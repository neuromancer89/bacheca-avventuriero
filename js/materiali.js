/* ==========================================================================
   ELENCO DEI MANUALI
   --------------------------------------------------------------------------
   Questo è il file da modificare quando pubblichi un nuovo manuale.

   1. Carica il PDF italiano in "pdf/it/" e quello inglese (se c'è) in "pdf/en/".
      Usa nomi senza spazi né accenti, es. "drago-pigro.pdf".
   2. Copia uno dei blocchi qui sotto (dalla { alla },) e incollalo in cima
      alla lista MATERIALI.
   3. Compila i campi:

      categorie   Una o più chiavi di CATEGORIE (in fondo al file), tra
                  parentesi quadre e separate da virgole:
                    categorie: ["mostri"]
                    categorie: ["classi", "incantesimi"]
                  Il manuale compare sotto ognuna delle categorie indicate.
      data        Data di pubblicazione, "AAAA-MM-GG"
      pagine      Numero di pagine (facoltativo)
      livelli     Livelli consigliati, es. "1–5" (facoltativo)
      regole      Versione delle regole, es. "2014" (facoltativo)
      copertina   Immagine, es. "img/copertine/drago.jpg" (facoltativo)

      it: { ... }  La versione italiana
      en: { ... }  La versione inglese
         titolo       Il nome del manuale
         descrizione  Una o due frasi su cosa contiene
         file         Il percorso del PDF. Se manca, il sito dice che il
                      manuale è disponibile solo nell'altra lingua.
         stampa       Il percorso della versione da stampa (facoltativo),
                      es. "pdf/it/drago-pigro-stampa.pdf". Se c'è, accanto
                      a "Scarica PDF" compare il pulsante "Versione da stampa".
         mb           Peso del file in MB, es. 2.4 (facoltativo)

      Se il PDF esiste solo in italiano, puoi comunque scrivere titolo e
      descrizione in inglese (senza "file"): chi visita il sito in inglese
      capirà di cosa parla e vedrà "Available in Italian only".

   4. Salva e carica le modifiche su GitHub.
      ========================================================================== */

window.MATERIALI = [
  {
    categoria: ["oggetti"],
    data: "2026-11-13",
    regole: "2014/2024",
    it: {
      titolo: "Erbario Arcano",
      descrizione: "Cento piante, fiori e funghi magici per la quinta edizione.",
      file: "pdf/it/Erbario.pdf",
      stampa: "pdf/it/Erbario_print.pdf"
    },
    en: {
      titolo: "Arcane Herbarium",
      descrizione: "One hundred magical plants, flowers and fungi for fifth edition.",
      file: "pdf/en/Herbarium.pdf",
      stampa: "pdf/en/Herbarium_print.pdf"
    }
  },

   {
    categoria: ["incantesimi", "oggetti"],
    data: "2026-11-13",
    regole: "2014",
    it: {
      titolo: "Grimorio - Il Libro delle Ore Spente",
      descrizione: "Trentacinque incantesimi che chiunque sappia piegare la magia può leggere. E pagare.",
      file: "pdf/it/Grimorio.pdf",
      stampa: "pdf/it/Grimorio_print.pdf"
    },
    en: {
      titolo: "Grimoire - The Book of Snuffed Hours",
      descrizione: "Thirty-five spells that anyone who can bend magic may read. And pay for.",
      file: "pdf/en/Grimoire.pdf",
      stampa: "pdf/en/Grimoire_print.pdf"
    }
  },

  {
    categoria: ["classi", "oggetti"],
    data: "2026-11-20",
    regole: "2014",
    it: {
      titolo: "Il Libro dell'Alchimista",
      descrizione: "Quaranta formule di pozioni, elisir e reagenti per l'Artefice.",
      file: "pdf/it/Libro_Alchimista.pdf",
      stampa: "pdf/it/Libro_Alchimista_print.pdf"
    },
    en: {
      titolo: "The Alchemist's Book",
      descrizione: "Forty formulas for potions, elixirs and reagents for the Artificer.",
      file: "pdf/en/Alchemist_Book.pdf",
      stampa: "pdf/en/Alchemist_Book_print.pdf"
    }
  }
];

/* Le categorie, con il nome nelle due lingue.
   "icona" deve essere una di: artiglio, pozione, scudo, scintilla, dado,
   libro, mappa */
window.CATEGORIE = {
  mostri:      { it: "Mostri",               en: "Monsters",            icona: "artiglio" },
  oggetti:     { it: "Oggetti magici",       en: "Magic items",         icona: "pozione" },
  classi:      { it: "Classi e sottoclassi", en: "Classes & subclasses", icona: "scudo" },
  incantesimi: { it: "Incantesimi",          en: "Spells",              icona: "scintilla" },
  regole:      { it: "Regole opzionali",     en: "Optional rules",      icona: "dado" },
  master:      { it: "Strumenti del master", en: "DM tools",            icona: "libro" }
};
