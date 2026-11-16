# La Bacheca dell'Avventuriero / The Adventurer's Board

Sito statico e bilingue (italiano e inglese) per distribuire gratuitamente
mini manuali PDF per Dungeons & Dragons 5e. Funziona su GitHub Pages senza
installare niente.

## I file

```
index.html          La struttura della pagina (non serve toccarla)
js/config.js        ← Impostazioni: nome, link Ko-fi, email, licenza
js/materiali.js     ← L'elenco dei manuali: lo modifichi a ogni nuova uscita
js/testi.js         ← Tutte le frasi del sito, in italiano e in inglese
js/main.js          Il funzionamento (lingua, filtri, ricerca, il d20)
css/style.css       Lo stile (i colori sono in cima al file)
pdf/it/             I PDF in italiano
pdf/en/             I PDF in inglese
img/                Favicon ed eventuali copertine (crea img/copertine/)
.nojekyll           Dice a GitHub di pubblicare i file così come sono
```

I PDF in `pdf/` e i manuali in `js/materiali.js` sono esempi: sostituiscili
con i tuoi.

## Prima di pubblicare

Apri `js/config.js` e controlla:

- **kofi**: sostituisci `IL-TUO-NOME-KOFI` con il tuo nome utente Ko-fi
  (es. `https://ko-fi.com/neuromancer`, se è quello).
- **email**: se vuoi ricevere segnalazioni, scrivila tra le virgolette.
  Se resta vuota, la frase con l'email e la domanda "Ho trovato un errore"
  non compaiono.
- **licenza**: `by-nc-nd` (scaricare e condividere citando l'autore, senza
  vendere né condividere versioni modificate) oppure `by-nc` (come sopra,
  ma permette di condividere versioni modificate).

## Pubblicare su GitHub Pages

1. Accedi a <https://github.com> come **neuromancer**.
2. Clicca **New repository** e chiamalo esattamente
   **`neuromancer.github.io`**. Lascialo **Public** e clicca
   **Create repository**.
   Con questo nome il sito sarà all'indirizzo più corto possibile:
   <https://neuromancer.github.io>. Se scegli un altro nome (es.
   `bacheca-dnd`), l'indirizzo diventa
   `https://neuromancer.github.io/bacheca-dnd/`.
3. Nella pagina del repository clicca **uploading an existing file** e
   trascina dentro **tutto il contenuto** di questa cartella (non la cartella
   stessa: `index.html` deve stare in primo piano). Clicca **Commit changes**.
4. Vai su **Settings → Pages**. In **Source** scegli **Deploy from a branch**,
   poi branch **main** e cartella **/ (root)**. Clicca **Save**.
5. Dopo un paio di minuti il sito è online.

> Il file `.nojekyll` inizia con un punto e su alcuni computer è nascosto.
> Non è indispensabile, ma se riesci caricalo.

## Aggiungere un nuovo manuale

1. Nel repository apri `pdf/it`, clicca **Add file → Upload files** e carica
   il PDF italiano. Se hai la versione inglese, caricala in `pdf/en`.
   Usa nomi senza spazi né accenti, es. `drago-pigro.pdf`.
2. Apri `js/materiali.js` e clicca sulla matita (✏️).
3. Copia un blocco esistente (da `{` a `},`), incollalo in cima alla lista e
   compila i campi. Le istruzioni sono in cima al file.
   - Un manuale può avere più categorie: `categorie: ["classi", "incantesimi"]`.
     Comparirà sotto ognuno dei filtri indicati.
   - Se il manuale esiste solo in italiano, nel blocco `en` scrivi solo titolo
     e descrizione, senza `file`: chi visita in inglese vedrà
     "Available in Italian only" e potrà scaricare la versione italiana.
   - Quando arriva la traduzione, carica il PDF in `pdf/en` e aggiungi la riga
     `file`.
   - Se hai anche una versione da stampa, caricala nella stessa cartella
     (es. `pdf/it/drago-pigro-stampa.pdf`) e aggiungi la riga
     `stampa: "pdf/it/drago-pigro-stampa.pdf",` sotto `file`. Accanto a
     "Scarica PDF" comparirà il pulsante "Versione da stampa". Vale per ogni
     lingua: la versione inglese ha la sua riga `stampa` nel blocco `en`.
4. Clicca **Commit changes**. Il sito si aggiorna da solo in un minuto o due.

I manuali usciti negli ultimi 45 giorni hanno il sigillo "Nuovo"
(lo cambi con `giorniNovita` in `config.js`).

### Copertine (facoltative)

Metti un'immagine in `img/copertine/` (JPG o WebP, larga circa 800 px, in
formato 3:2) e aggiungi al manuale il campo
`copertina: "img/copertine/nome-immagine.jpg"`.

## Come funziona la lingua

- Al primo accesso il sito usa la lingua del browser: italiano per chi ha il
  browser in italiano, inglese per tutti gli altri.
- Il selettore IT / EN in alto cambia lingua e se la ricorda.
- Puoi condividere un link già in una lingua aggiungendo `?lang=en` o
  `?lang=it`, es. `https://neuromancer.github.io/?lang=en`.

Per cambiare una frase del sito modifica `js/testi.js`, in entrambe le lingue.

## Limiti di GitHub

Ogni file può pesare al massimo 100 MB (dal browser se ne caricano fino a
25 MB). Tutto il sito dovrebbe restare sotto 1 GB.

## Provarlo sul tuo computer

Basta aprire `index.html` con un doppio clic.
