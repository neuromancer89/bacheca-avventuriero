(function () {
  "use strict";

  var CONFIG = window.CONFIG || {};
  var TESTI = window.TESTI || {};
  var categorie = window.CATEGORIE || {};
  var LINGUE = ["it", "en"];
  var GIORNI_NOVITA = CONFIG.giorniNovita || 45;

  var LICENZE = {
    "by-nc-nd": { nome: "CC BY-NC-ND 4.0", url: "https://creativecommons.org/licenses/by-nc-nd/4.0/deed." },
    "by-nc":    { nome: "CC BY-NC 4.0",    url: "https://creativecommons.org/licenses/by-nc/4.0/deed." }
  };
  var chiaveLicenza = LICENZE[CONFIG.licenza] ? CONFIG.licenza : "by-nc-nd";

  var ICONE = {
    mappa: '<path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z"/><path d="M9 4v14M15 6v14"/>',
    artiglio: '<path d="M6 4c3 5 3 11 0 16M12 3c3 6 3 12 0 18M18 4c3 5 3 11 0 16"/>',
    pozione: '<path d="M9 3h6M10 3v5L5 18a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 18L14 8V3"/><path d="M7.5 14h9"/>',
    scudo: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M12 7v10M8 11h8"/>',
    scintilla: '<path d="M12 3l2.2 6.8L21 12l-6.8 2.2L12 21l-2.2-6.8L3 12l6.8-2.2z"/>',
    libro: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 21V5M8 7h7M8 11h5"/>',
    dado: '<path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M12 6l5 8H7z"/>'
  };

  var el = {
    filtri: document.getElementById("filtri"),
    cerca: document.getElementById("cerca"),
    avvisi: document.getElementById("avvisi"),
    vuoto: document.getElementById("vuoto"),
    azzera: document.getElementById("azzera"),
    conteggio: document.getElementById("conteggio"),
    dado: document.getElementById("dado"),
    numero: document.getElementById("dado-numero"),
    esito: document.getElementById("dado-esito"),
    metaDescrizione: document.querySelector('meta[name="description"]')
  };

  var stato = { categoria: "tutti", testo: "" };

  /* ---------- lingua ---------- */

  function linguaIniziale() {
    try {
      var p = new URLSearchParams(location.search).get("lang");
      if (LINGUE.indexOf(p) !== -1) return p;
    } catch (e) {}
    try {
      var s = localStorage.getItem("lingua");
      if (LINGUE.indexOf(s) !== -1) return s;
    } catch (e) {}
    var n = (navigator.languages && navigator.languages[0]) || navigator.language || "it";
    return /^it\b/i.test(n) ? "it" : "en";
  }

  var lingua = linguaIniziale();
  function altraLingua() { return lingua === "it" ? "en" : "it"; }

  function riempi(s, extra) {
    var lic = LICENZE[chiaveLicenza];
    var valori = {
      autore: esc(CONFIG.autore || ""),
      email: esc(CONFIG.email || ""),
      anno: String(new Date().getFullYear()),
      licenza: '<a href="' + lic.url + lingua + '" rel="license noopener" target="_blank">' + lic.nome + "</a>"
    };
    for (var k in extra) valori[k] = extra[k];
    return String(s).replace(/\{(\w+)\}/g, function (m, k) { return k in valori ? valori[k] : m; });
  }

  function t(chiave, extra) {
    var v = (TESTI[lingua] || {})[chiave];
    if (v == null) v = (TESTI.it || {})[chiave];
    if (v == null) return chiave;
    return riempi(v, extra);
  }

  // testo semplice (senza HTML) per textContent e attributi
  function tPiano(chiave, extra) {
    var d = document.createElement("div");
    d.innerHTML = t(chiave, extra);
    return d.textContent;
  }

  function applicaTesti() {
    document.documentElement.lang = lingua;
    document.title = tPiano("titolo_pagina");
    if (el.metaDescrizione) el.metaDescrizione.content = tPiano("descrizione_pagina");

    document.querySelectorAll("[data-t]").forEach(function (n) {
      n.textContent = tPiano(n.dataset.t);
    });
    document.querySelectorAll("[data-t-html]").forEach(function (n) {
      var k = n.dataset.tHtml;
      if (k === "faq_licenza_r") k = "faq_licenza_r_" + chiaveLicenza;
      n.innerHTML = t(k);
    });
    document.querySelectorAll("[data-t-attr]").forEach(function (n) {
      n.dataset.tAttr.split(";").forEach(function (coppia) {
        var p = coppia.split(":");
        if (p.length === 2) n.setAttribute(p[0].trim(), tPiano(p[1].trim()));
      });
    });
    document.querySelectorAll("[data-lingua]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.lingua === lingua));
    });
    el.esito.textContent = tPiano("dado_invito");
  }

  function cambiaLingua(nuova) {
    if (nuova === lingua || LINGUE.indexOf(nuova) === -1) return;
    lingua = nuova;
    try { localStorage.setItem("lingua", lingua); } catch (e) {}
    try {
      var u = new URL(location.href);
      u.searchParams.set("lang", lingua);
      history.replaceState(null, "", u.href);
    } catch (e) {}
    applicaTesti();
    disegnaFiltri();
    disegna();
  }

  document.querySelectorAll("[data-lingua]").forEach(function (b) {
    b.addEventListener("click", function () { cambiaLingua(b.dataset.lingua); });
  });

  /* ---------- parti facoltative: Ko-fi, email ---------- */

  document.querySelectorAll('[data-se="kofi"]').forEach(function (n) { n.hidden = !CONFIG.kofi; });
  document.querySelectorAll('[data-se="email"]').forEach(function (n) { n.hidden = !CONFIG.email; });
  document.querySelectorAll('[data-link="kofi"]').forEach(function (n) { if (CONFIG.kofi) n.href = CONFIG.kofi; });

  /* ---------- utilità ---------- */

  function icona(nome) {
    return '<svg class="icona" viewBox="0 0 24 24" aria-hidden="true">' + (ICONE[nome] || ICONE.dado) + "</svg>";
  }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function normalizza(s) {
    return String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  }

  function eNuovo(m) {
    if (!m.data) return false;
    var d = new Date(m.data + "T00:00:00");
    return !isNaN(d) && (Date.now() - d.getTime()) / 86400000 <= GIORNI_NOVITA;
  }

  function dataLeggibile(s) {
    var d = new Date(s + "T00:00:00");
    if (isNaN(d)) return "";
    return d.toLocaleDateString(lingua === "it" ? "it-IT" : "en-GB", { day: "numeric", month: "long", year: "numeric" });
  }

  function peso(mb) {
    if (!mb) return "";
    return new Intl.NumberFormat(lingua === "it" ? "it-IT" : "en-GB", { maximumFractionDigits: 1, minimumFractionDigits: 1 }).format(mb) + " MB";
  }

  function nomeCategoria(k) {
    var c = categorie[k];
    if (!c) return k || "";
    return c[lingua] || c.it || c.nome || k;
  }

  // le categorie di un manuale, sempre come lista.
  // Accetta sia categoria: "mostri" sia categorie: ["mostri", "oggetti"]
  function categorieDi(m) {
    var c = m.categorie || m.categoria || [];
    if (!Array.isArray(c)) c = [c];
    return c.filter(function (k, i) { return k && c.indexOf(k) === i; });
  }

  // la versione di un manuale in una lingua, solo se ha un PDF
  function versione(m, l) { return m[l] && m[l].file ? m[l] : null; }

  // il testo da mostrare: nella lingua scelta se c'è, altrimenti nell'altra
  function testo(m) { return m[lingua] || m[altraLingua()] || {}; }

  function idDi(m) {
    var v = versione(m, "it") || versione(m, "en");
    return "manuale-" + normalizza(v.file.split("/").pop().replace(/\.pdf$/i, "")).replace(/[^a-z0-9]+/g, "-");
  }

  // solo i manuali con almeno un PDF, i più recenti per primi
  var materiali = (window.MATERIALI || []).filter(function (m) {
    return versione(m, "it") || versione(m, "en");
  });
  materiali.sort(function (a, b) { return String(b.data || "").localeCompare(String(a.data || "")); });
  materiali.forEach(function (m) { m._id = idDi(m); });

  /* ---------- filtri ---------- */

  function disegnaFiltri() {
    var conteggi = {};
    materiali.forEach(function (m) {
      categorieDi(m).forEach(function (k) { conteggi[k] = (conteggi[k] || 0) + 1; });
    });

    var html = '<button type="button" class="filtro" data-cat="tutti">' + esc(tPiano("tutti")) +
      ' <span class="filtro-n">' + materiali.length + "</span></button>";
    Object.keys(categorie).forEach(function (k) {
      if (!conteggi[k]) return;
      html += '<button type="button" class="filtro" data-cat="' + esc(k) + '">' +
        icona(categorie[k].icona) + esc(nomeCategoria(k)) +
        ' <span class="filtro-n">' + conteggi[k] + "</span></button>";
    });
    el.filtri.innerHTML = html;
  }

  function aggiornaFiltri() {
    el.filtri.querySelectorAll(".filtro").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.cat === stato.categoria));
    });
  }

  /* ---------- avvisi (le card) ---------- */

  var stampante = '<svg class="icona" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 9V3h10v6"/><rect x="3" y="9" width="18" height="8" rx="2"/><path d="M7 14h10v7H7z"/></svg>';
  var frecciaGiu ='<svg class="icona" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v11M7 10l5 5 5-5M5 20h14"/></svg>';

  function avvisoHTML(m) {
    var etichetteCat = categorieDi(m).map(function (k) {
      var c = categorie[k] || { icona: "dado" };
      return "<li>" + icona(c.icona) + esc(nomeCategoria(k)) + "</li>";
    }).join("");
    var tx = testo(m);
    var qui = versione(m, lingua);
    var altra = versione(m, altraLingua());
    var principale = qui || altra;

    var dati = [];
    if (m.livelli) dati.push([tPiano("livelli"), m.livelli]);
    if (m.pagine) dati.push([tPiano("pagine"), m.pagine]);
    if (m.regole) dati.push([tPiano("regole"), m.regole]);
    if (principale.mb) dati.push([tPiano("peso"), peso(principale.mb)]);

    var etichetta = qui ? tPiano("scarica") : tPiano("scarica_altra");
    var etichettaStampa = qui ? tPiano("stampa") : tPiano("stampa_altra");
    var linguaFile = qui ? lingua : altraLingua();

    // riga con il link all'altra lingua (solo se esistono entrambe)
    var rigaAltra = "";
    if (qui && altra) {
      var al = altraLingua();
      if (altra.stampa) {
        rigaAltra = '<p class="avviso-altra" lang="' + al + '">' + esc(tPiano("altra_versione")) + ": " +
          '<a href="' + esc(altra.file) + '" download hreflang="' + al + '">' + esc(tPiano("altra_normale")) + "</a>, " +
          '<a href="' + esc(altra.stampa) + '" download hreflang="' + al + '">' + esc(tPiano("altra_stampa")) + "</a></p>";
      } else {
        rigaAltra = '<p class="avviso-altra" lang="' + al + '">' +
          '<a href="' + esc(altra.file) + '" download hreflang="' + al + '">' + esc(tPiano("altra_versione")) + "</a></p>";
      }
    }

    return '<li class="avviso" id="' + m._id + '">' +
      '<span class="puntina" aria-hidden="true"></span>' +
      (eNuovo(m) ? '<span class="sigillo" title="' + esc(tPiano("nuovo_suggerimento")) + '">' + esc(tPiano("nuovo")) + "</span>" : "") +
      (m.copertina ? '<img class="avviso-copertina" src="' + esc(m.copertina) + '" alt="" loading="lazy">' : "") +
      (etichetteCat ? '<ul class="avviso-categorie" aria-label="' + esc(tPiano("categorie_etichetta")) + '">' + etichetteCat + "</ul>" : "") +
      "<h3>" + esc(tx.titolo) + "</h3>" +
      '<p class="avviso-descrizione">' + esc(tx.descrizione) + "</p>" +
      (dati.length ? '<dl class="avviso-dati">' + dati.map(function (d) {
        return "<div><dt>" + esc(d[0]) + "</dt><dd>" + esc(d[1]) + "</dd></div>";
      }).join("") + "</dl>" : "") +
      (!qui ? '<p class="avviso-nota">' + esc(tPiano("solo_altra")) + "</p>" : "") +
      '<div class="avviso-piede">' +
        '<a class="bottone" href="' + esc(principale.file) + '" download hreflang="' + linguaFile + '">' +
          frecciaGiu + esc(etichetta) + '<span class="sr-only">: ' + esc(tx.titolo) + "</span></a>" +
        (principale.stampa
          ? '<a class="bottone bottone-stampa" href="' + esc(principale.stampa) + '" download hreflang="' + linguaFile + '">' +
            stampante + esc(etichettaStampa) + '<span class="sr-only">: ' + esc(tx.titolo) + "</span></a>"
          : "") +
      "</div>" +
      rigaAltra +
      (m.data ? '<p class="avviso-data"><time datetime="' + esc(m.data) + '">' + esc(tPiano("pubblicato", { data: dataLeggibile(m.data) })) + "</time></p>" : "") +
    "</li>";
  }

  function filtrati() {
    var q = normalizza(stato.testo.trim());
    return materiali.filter(function (m) {
      var cats = categorieDi(m);
      if (stato.categoria !== "tutti" && cats.indexOf(stato.categoria) === -1) return false;
      if (!q) return true;
      var tutto = [];
      cats.forEach(function (k) {
        var c = categorie[k] || {};
        tutto.push(k, c.it || "", c.en || "");
      });
      LINGUE.forEach(function (l) { if (m[l]) tutto.push(m[l].titolo, m[l].descrizione); });
      return normalizza(tutto.join(" ")).indexOf(q) !== -1;
    });
  }

  function disegna() {
    var lista = filtrati();
    el.avvisi.innerHTML = lista.map(avvisoHTML).join("");
    el.vuoto.hidden = lista.length > 0;
    el.conteggio.textContent = lista.length === 1 ? tPiano("conteggio_1") : tPiano("conteggio_n", { n: lista.length });
    aggiornaFiltri();
  }

  el.filtri.addEventListener("click", function (e) {
    var b = e.target.closest(".filtro");
    if (!b) return;
    stato.categoria = b.dataset.cat;
    disegna();
  });

  el.cerca.addEventListener("input", function () {
    stato.testo = el.cerca.value;
    disegna();
  });

  el.azzera.addEventListener("click", function () {
    stato.categoria = "tutti";
    stato.testo = "";
    el.cerca.value = "";
    disegna();
  });

  /* ---------- il d20 ---------- */

  var riduciMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var staRotolando = false;

  function commento(n) {
    if (n === 20) return "dado_20";
    if (n === 1) return "dado_1";
    if (n >= 15) return "dado_alto";
    if (n >= 8) return "dado_medio";
    return "dado_basso";
  }

  function rivelaScelta(n) {
    if (!materiali.length) {
      el.esito.textContent = tPiano("dado_vuoto", { n: n });
      return;
    }
    var scelto = materiali[Math.floor(Math.random() * materiali.length)];

    stato.categoria = "tutti";
    stato.testo = "";
    el.cerca.value = "";
    disegna();

    var card = document.getElementById(scelto._id);
    if (card) card.classList.add("scelto");

    el.esito.innerHTML = '<span class="dado-commento">' + esc(tPiano(commento(n))) + '</span> <a href="#' + scelto._id + '">' + esc(testo(scelto).titolo) + "</a>";
  }

  el.dado.addEventListener("click", function () {
    if (staRotolando) return;
    var finale = 1 + Math.floor(Math.random() * 20);

    if (riduciMovimento) {
      el.numero.textContent = finale;
      rivelaScelta(finale);
      return;
    }

    staRotolando = true;
    el.dado.classList.remove("critico", "fallimento");
    el.dado.classList.add("rotola");
    var passi = 0;
    var timer = setInterval(function () {
      el.numero.textContent = 1 + Math.floor(Math.random() * 20);
      if (++passi >= 12) {
        clearInterval(timer);
        el.numero.textContent = finale;
        el.dado.classList.remove("rotola");
        if (finale === 20) el.dado.classList.add("critico");
        if (finale === 1) el.dado.classList.add("fallimento");
        staRotolando = false;
        rivelaScelta(finale);
      }
    }, 65);
  });

  /* ---------- avvio ---------- */

  applicaTesti();
  disegnaFiltri();
  disegna();
})();
