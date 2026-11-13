/* ==========================================================================
   ELENCO DEI MANUALI
   --------------------------------------------------------------------------
   Questo è il file da modificare quando pubblichi un nuovo manuale.

   1. Carica il PDF italiano in "pdf/it/" e quello inglese (se c'è) in "pdf/en/".
      Usa nomi senza spazi né accenti, es. "drago-pigro.pdf".
   2. Copia uno dei blocchi qui sotto (dalla { alla },) e incollalo in cima
      alla lista MATERIALI.
   3. Compila i campi:

      categoria   Una delle chiavi di CATEGORIE (in fondo al file)
      data        Data di pubblicazione, "AAAA-MM-GG"
      pagine      Numero di pagine (facoltativo)
      livelli     Livelli consigliati, es. "1–5" (facoltativo)
      regole      "2014", "2024" o "2014/2024" (facoltativo)
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


   {
    categoria: "mostri",
    data: "2026-11-02",
    pagine: 16,
    livelli: "1–8",
    regole: "2024",
    it: {
      titolo: "Bestiario delle Cantine",
      descrizione: "Otto creature da incontrare tra botti e ragnatele, dal Topo Sommelier alla Muffa Senziente.",
      file: "pdf/it/bestiario-cantine.pdf",
      stampa: "pdf/it/bestiario-cantine-stampa.pdf",
      mb: 5.4
    },
    en: {
      titolo: "The Cellar Bestiary",
      descrizione: "Eight creatures lurking among barrels and cobwebs, from the Sommelier Rat to the Sentient Mould.",
      file: "pdf/en/cellar-bestiary.pdf",
      stampa: "pdf/en/cellar-bestiary-print.pdf",
      mb: 5.3
    }
  },
   ========================================================================== */

window.MATERIALI = [
  {
    categoria: "oggetti",
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
    categoria: "incantesimi",
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
