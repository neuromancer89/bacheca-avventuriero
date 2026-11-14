/* ==========================================================================
   TESTI DEL SITO, IN ITALIANO E IN INGLESE
   --------------------------------------------------------------------------
   Qui trovi tutte le frasi del sito. Per cambiare un testo modificalo in
   entrambe le lingue.

   Le parole tra graffe vengono sostituite in automatico:
     {autore}  il tuo nome (da config.js)
     {email}   la tua email (da config.js)
     {licenza} il nome della licenza, con il link
     {anno}    l'anno corrente
     {n}       un numero (conteggi, tiro del dado)
   ========================================================================== */

window.TESTI = {
  it: {
    titolo_pagina: "La Bacheca dell'Avventuriero – Mini manuali gratuiti per D&D 5 edizione",
    descrizione_pagina: "Mini manuali PDF gratuiti per Dungeons & Dragons quinta edizione: mostri, oggetti magici, sottoclassi, incantesimi e strumenti per il master.",
    salta: "Vai ai manuali",
    nome_sito: "La Bacheca dell'Avventuriero",
    nav_etichetta: "Navigazione principale",
    nav_manuali: "Manuali",
    nav_chi: "Chi sono",
    nav_domande: "Domande",
    kofi_breve: "Sostienimi",
    lingua_gruppo: "Lingua del sito",

    eroe_titolo: "Mini manuali gratuiti per le tue sessioni di D&D 5 edizione",
    eroe_intro: "Mostri, oggetti magici, sottoclassi e aiuti per il master, raccolti in piccoli PDF pronti da stampare. E si, sono tutti gratis!",
    eroe_bottone: "Sfoglia i manuali",

    dado_sr: "Tira il dado e lascia che scelga un manuale per te",
    dado_invito: "Indeciso? Tira il d20 e lascia scegliere al destino.",
    dado_20: "Venti naturale! Il destino ha parlato chiaro:",
    dado_1: "Uno naturale… il dado si è offeso, ma ti consiglia comunque:",
    dado_alto: "Ottimo tiro! Il dado ti consiglia:",
    dado_medio: "Tiro onesto. Il dado ti consiglia:",
    dado_basso: "Tiro bassino, ma il dado non si arrende:",
    dado_vuoto: "Hai fatto {n}, ma la bacheca è ancora vuota.",

    bottino_titolo: "La bacheca del bottino",
    bottino_intro: "Scegli una categoria o cerca per nome. Clicca su “Scarica PDF” e il manuale è tuo. Tutti i manuali sono in formato a5.",
    filtri_gruppo: "Filtra per categoria",
    tutti: "Tutti",
    cerca_sr: "Cerca un manuale",
    cerca_placeholder: "Cerca: pozioni, bardo, cantine…",
    conteggio_1: "1 manuale in bacheca",
    conteggio_n: "{n} manuali in bacheca",
    vuoto: "<strong>Nessun manuale trovato.</strong> Prova un'altra parola o mostra tutte le categorie.",
    mostra_tutto: "Mostra tutto",

    nuovo: "Nuovo",
    nuovo_suggerimento: "Pubblicato di recente",
    livelli: "Livelli",
    pagine: "Pagine",
    regole: "Regole",
    peso: "Peso",
    scarica: "Scarica PDF",
    scarica_altra: "Scarica PDF (inglese)",
    stampa: "Versione da stampa",
    stampa_altra: "Versione da stampa (inglese)",
    altra_versione: "English version",   // link alla versione inglese
    altra_normale: "PDF",                // link al PDF inglese normale
    altra_stampa: "printer-friendly",    // link al PDF inglese da stampa
    solo_altra: "Disponibile solo in inglese",
    pubblicato: "Pubblicato il {data}",

    chi_titolo: "Chi c'è dietro lo schermo del master",
    chi_testo: "Ciao! Sono <strong>{autore}</strong>, giocatore (scarso), master (anche peggio) e collezionista compulsivo di dadi. Qui raccolgo i mini manuali che preparo per il mio tavolo, sperando che servano anche al tuo.",
    chi_email: "Hai trovato un errore, hai un'idea o vuoi raccontarmi com'è andata la sessione? Scrivimi a <a href=\"mailto:{email}\">{email}</a>.",

    sostieni_titolo: "Offri un caffè al bardo",
    sostieni_testo: "I manuali sono e resteranno gratuiti. Se ti sono stati utili e vuoi aiutarmi a scriverne altri, puoi lasciarmi un contributo su Ko‑fi.",
    sostieni_bottone: "Offrimi un caffè su Ko-fi",

    faq_titolo: "Domande frequenti",
    faq_gratis_d: "È davvero tutto gratis?",
    faq_gratis_r: "Sì. Nessuna registrazione e nessuna email da lasciare: clicchi e scarichi.",
    faq_licenza_d: "Posso condividere i manuali?",
    "faq_licenza_r_by-nc-nd": "Sì, purché citi l'autore ({autore}) con un link a questo sito. Non puoi venderli né condividerne versioni modificate, ma puoi adattarli come vuoi per il tuo tavolo. I manuali sono rilasciati con licenza {licenza}.",
    "faq_licenza_r_by-nc": "Sì, anche in versione modificata, purché citi l'autore ({autore}) con un link a questo sito e non li venda. I manuali sono rilasciati con licenza {licenza}.",
    faq_stampa_d: "Posso stamparli?",
    faq_stampa_r: "Certo, sono fatti per questo. Molti manuali hanno anche una “Versione da stampa”, senza sfondi e con meno colori, per risparmiare inchiostro. Stampa tutte le copie che servono al tuo gruppo.",
    faq_lingua_d: "In che lingua sono i manuali?",
    faq_lingua_r: "Ogni manuale nasce in italiano e molti hanno anche la versione in inglese. Quando c'è, trovi il link “English version” accanto al pulsante di download.",
    faq_regole_d: "Sono compatibili con le regole del 2014 o del 2024?",
    faq_regole_r: "Ogni manuale indica la versione delle regole per cui è pensato. In generale si usano con entrambe con piccoli aggiustamenti.",
    faq_errore_d: "Ho trovato un errore in un manuale. Cosa faccio?",
    faq_errore_r: "Scrivimi a <a href=\"mailto:{email}\">{email}</a> indicando il nome del manuale e la pagina: lo correggo e carico la versione aggiornata.",
    faq_immagini_d: "Bellissime le illustrazioni! Le hai fatte tu?",
    faq_immagini_r: "Mi piacerebbe un sacco, ma purtroppo non sono un illustratore. Sono generate tramite AI open source.",

    piede_disclaimer: "Materiale non ufficiale creato da un fan. Non è approvato né sponsorizzato da Wizards of the Coast. Dungeons & Dragons e D&D sono marchi di Wizards of the Coast LLC.",
    piede_copyright: "© {anno} {autore}. Manuali rilasciati con licenza {licenza}. Fatto con pergamena, inchiostro e troppi d20."
  },

  en: {
    titolo_pagina: "The Adventurer's Board – Free mini-manuals for D&D 5th edition",
    descrizione_pagina: "Free PDF mini-manuals for Dungeons & Dragons fifth edition: monsters, magic items, subclasses, spells and DM tools.",
    salta: "Skip to the manuals",
    nome_sito: "The Adventurer's Board",
    nav_etichetta: "Main navigation",
    nav_manuali: "Manuals",
    nav_chi: "About",
    nav_domande: "FAQ",
    kofi_breve: "Support me",
    lingua_gruppo: "Site language",

    eroe_titolo: "Free mini‑manuals for your D&D 5th edition sessions",
    eroe_intro: "Monsters, magic items, subclasses and DM aids, packed into small print-ready PDFs. And yes, they are all for free!",
    eroe_bottone: "Browse the manuals",

    dado_sr: "Roll the die and let it pick a manual for you",
    dado_invito: "Can't choose? Roll the d20 and let fate decide.",
    dado_20: "Natural 20! Fate has spoken:",
    dado_1: "Natural 1… the die is sulking, but still suggests:",
    dado_alto: "Great roll! The die suggests:",
    dado_medio: "Fair roll. The die suggests:",
    dado_basso: "Low roll, but the die won't give up:",
    dado_vuoto: "You rolled {n}, but the board is still empty.",

    bottino_titolo: "The loot board",
    bottino_intro: "Pick a category or search by name. Click “Download PDF” and the manual is yours. All the manuals are in a5 format.",
    filtri_gruppo: "Filter by category",
    tutti: "All",
    cerca_sr: "Search for a manual",
    cerca_placeholder: "Search: potions, bard, cellar…",
    conteggio_1: "1 manual on the board",
    conteggio_n: "{n} manuals on the board",
    vuoto: "<strong>No manuals found.</strong> Try another word or show every category.",
    mostra_tutto: "Show everything",

    nuovo: "New",
    nuovo_suggerimento: "Recently published",
    livelli: "Levels",
    pagine: "Pages",
    regole: "Rules",
    peso: "Size",
    scarica: "Download PDF",
    scarica_altra: "Download PDF (Italian)",
    stampa: "Printer-friendly version",
    stampa_altra: "Printer-friendly (Italian)",
    altra_versione: "Versione italiana",   // link to the Italian version
    altra_normale: "PDF",                  // link to the standard Italian PDF
    altra_stampa: "da stampa",             // link to the Italian printer-friendly PDF
    solo_altra: "Available in Italian only",
    pubblicato: "Published {data}",

    chi_titolo: "Who's behind the DM screen",
    chi_testo: "Hi! I'm <strong>{autore}</strong>, a (bad) player, (even wors) dungeon master, and compulsive dice collector. This is where I share the mini-manuals I make for my own table, hoping they'll be useful at yours too.",
    chi_email: "Found a mistake, got an idea, or want to tell me how the session went? Write to me at <a href=\"mailto:{email}\">{email}</a>.",

    sostieni_titolo: "Buy the bard a coffee",
    sostieni_testo: "The manuals are free and always will be. If they've been useful and you'd like to help me write more, you can leave a tip on Ko‑fi.",
    sostieni_bottone: "Buy me a coffee on Ko-fi",

    faq_titolo: "Frequently asked questions",
    faq_gratis_d: "Is it really all free?",
    faq_gratis_r: "Yes. No sign-up and no email required: click and download.",
    faq_licenza_d: "Can I share the manuals?",
    "faq_licenza_r_by-nc-nd": "Yes, as long as you credit the author ({autore}) with a link to this site. You can't sell them or share modified versions, but you're free to adapt them for your own table. The manuals are released under the {licenza} license.",
    "faq_licenza_r_by-nc": "Yes, modified versions included, as long as you credit the author ({autore}) with a link to this site and don't sell them. The manuals are released under the {licenza} license.",
    faq_stampa_d: "Can I print them?",
    faq_stampa_r: "Of course, that's what they're for. Many manuals also come in a “Printer-friendly version”, with no backgrounds and fewer colours, to save ink. Print as many copies as your group needs.",
    faq_lingua_d: "What language are the manuals in?",
    faq_lingua_r: "Every manual is written in Italian first, and many have an English version too. Manuals that are still Italian-only are marked as such.",
    faq_regole_d: "Do they work with the 2014 or the 2024 rules?",
    faq_regole_r: "Each manual says which version of the rules it's designed for. Most work with both with minor tweaks.",
    faq_errore_d: "I found a mistake in a manual. What should I do?",
    faq_errore_r: "Write to me at <a href=\"mailto:{email}\">{email}</a> with the manual's name and page: I'll fix it and upload the corrected version.",
    faq_immagini_d: "The illustrations are beautiful! Did you draw them yourself?",
    faq_immagini_r: "I'd love to, but unfortunately I'm not an illustrator. They're generated using open-source AI.",

    piede_disclaimer: "Unofficial fan content. Not approved or endorsed by Wizards of the Coast. Dungeons & Dragons and D&D are trademarks of Wizards of the Coast LLC.",
    piede_copyright: "© {anno} {autore}. Manuals released under the {licenza} license. Made with parchment, ink and too many d20s."
  }
};
