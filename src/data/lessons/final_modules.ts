import { Lesson } from '../modules'

export const FINAL_MODULES_LESSONS: Lesson[] = [
    {
        id: '9-deepfake-video',
        title: 'Deepfake Video: Riconoscere il falso',
        content: `# Vedere non è più credere
L'intelligenza artificiale può creare video di persone reali che dicono e fanno cose mai accadute.

## Come individuare un Deepfake
- **Occhi e Sguardo:** Le IA faticano a simulare il battito naturale delle ciglia o i riflessi negli occhi.
- **Bordi del Viso:** Guarda i contorni tra viso e capelli o tra collo e mascella: spesso appaiono sfocature o "glitch".
- **Sincronizzazione Labiale:** Il movimento della bocca non corrisponde perfettamente ai suoni più complessi (m, b, p).

### Perché è pericoloso?
Può essere usato per creare fake news politiche o per il "Deepfake Porn", una forma di abuso gravissima che colpisce soprattutto giovani donne.`,
        tips: ['Controlla sempre se il video è riportato da testate giornalistiche serie.', 'Le IA faticano ancora con i dettagli della bocca e del collo.']
    },
    {
        id: '9-ai-voice-scams',
        title: 'Truffe Vocali (Voice Cloning)',
        content: `# Quella è davvero la voce di tua madre?
Oggi bastano 30 secondi di audio registrato per clonare la voce di chiunque con l'IA.

## Lo scenario del ricatto
Ricevi una chiamata o un messaggio vocale: sembra un tuo amico o un familiare che dice di essere in pericolo e di aver bisogno di soldi subito.

### Come difendersi
1. **Fai una domanda personale:** Qualcosa che solo voi sapete (es. "Come si chiama il peluche che avevi da piccolo?"). L'IA non può rispondere.
2. **Chiama su un altro canale:** Riaggancia e chiama il numero salvato in rubrica, non rispondere a numeri sconosciuti.`,
        tips: ['Usa una "parola d\'ordine" sicura con la tua famiglia.', 'Diffida dei messaggi vocali inviati da numeri sconosciuti che chiedono soldi.']
    },
    {
        id: '10-crypto-basic-scam',
        title: 'Le Fondamenta della Truffa Crypto',
        content: `# Criptovalute: Alto Rischio, Zero Garanzie
Le criptovalute sono usate spesso per truffe perché non esiste una banca che può annullare un bonifico fatto per errore.

## I segnali di una truffa crypto
- **Guadagni garantiti:** Nessun investimento garantisce il 10% al giorno.
- **Influencer Shilling:** Personaggi famosi che promuovono una nuova moneta "sconosciuta" dicendo che "andrà sulla luna". 
- **Urgenza:** "Compra ora o perdi l'opportunità della vita".

### Conclusione
Se qualcuno ti contatta su Instagram o Telegram per parlarti di crypto, è un truffatore al 100%. Punto.`,
        tips: ['Nessuno ti regala criptovalute gratis.', 'Le transazioni crypto sono irreversibili: se sbagli, i soldi sono persi.']
    },
    {
        id: '10-seed-phrase-key',
        title: 'La Seed Phrase: La Chiave di Tutto',
        content: `# La tua "Frase di Recupero" è Personale
Se apri un portafoglio crypto (Wallet), riceverai 12 o 24 parole casuali. Quella è la tua "Seed Phrase".

## Regola d'oro assoluta
**MAI condividere queste parole con nessuno.** NESSUN supporto tecnico, nessun amministratore, nessun sito te le chiederà mai per motivi legittimi.

### Cosa succede se le dai?
Chiunque abbia quelle parole ha il controllo totale dei tuoi soldi. Può svuotare il tuo wallet in un secondo e non potrai fare nulla per recuperarli.`,
        tips: ['Scrivi la seed phrase solo su carta e nascondila bene.', 'Non fare MAI uno screenshot o una foto alla seed phrase.']
    },
    {
        id: '11-sexting-legge-csam',
        title: 'Sexting Under 18: È Reato?',
        content: `# La Legge è Diversa per i Minori
Molti adolescenti pensano che scambiarsi foto intime sia legale se entrambi sono d'accordo. In Italia e in molti paesi, non è così.

## CSAM (Child Sexual Abuse Material)
Qualsiasi immagine sessualmente esplicita di una persona sotto i 18 anni è considerata dalla legge "materiale pedopornografico".
- **Se la mandi:** Stai distribuendo materiale illegale.
- **Se la ricevi e la tieni:** Sei in possesso di materiale illegale.
- **Se la condividi:** Stai commettendo un reato penale gravissimo.

### Il rischio per te
Anche se sei minorenne, sopra i 14 anni sei imputabile e puoi finire in un percorso giudiziario penale che segnerà il tuo futuro lavorativo e personale.`,
        tips: ['Sotto i 18 anni, il materiale intimo è SEMPRE illegale.', 'Non è "libertà sessuale", è un rischio legale enorme per entrambi.']
    },
    {
        id: '11-se-hai-mandato',
        title: 'Cosa fare se hai inviato una foto',
        content: `# Panico: Ho mandato una foto intima, e ora?
Se hai fatto un errore, non farti prendere dalla disperazione. Agisci subito.

## Passaggi di emergenza
1. **Chiedi la cancellazione:** Chiedi alla persona di cancellarla, ma non fidarti solo della sua parola.
2. **Usa StopNCII.org:** È un servizio globale che crea un'impronta digitale della tua foto per bloccarne il caricamento su Facebook, Instagram e TikTok in automatico.
3. **Parlane con un adulto:** Non affrontare questo peso da solo/a. Un genitore può aiutarti a sporgere querela se la foto viene diffusa.

### Ricorda
La colpa è di chi diffonde o ricatta, non di chi ha avuto fiducia.`,
        tips: ['StopNCII.org è uno strumento potentissimo per prevenire la diffusione.', 'Non pagare ricatti: denuncia subito.']
    },
    {
        id: '12-net-neutrality-depth',
        title: 'Net Neutrality: Perché combattere?',
        content: `# Internet è un Servizio Pubblico?
La Neutralità della Rete dice che i bit sono tutti uguali.

## Cosa accadrebbe senza
Immagina se il tuo operatore dicesse: "Vuoi usare WhatsApp? Costa 5€ al mese in più. Vuoi usare il nostro servizio di chat lento? È gratis".
Senza Net Neutrality, le grandi aziende potrebbero decidere quali siti puoi vedere velocemente e quali no, creando una censura basata sui soldi.

### La situazione in Europa
In UE siamo protetti da leggi forti, ma negli USA e in altri paesi la battaglia è costante. Essere informati ci permette di difendere questo diritto.`,
        tips: ['La Net Neutrality garantisce l\'accesso uguale a tutta l\'informazione.', 'Senza di essa, internet diventerebbe come la TV via cavo: a pacchetti.']
    },
    {
        id: '12-privacy-vs-surveillance',
        title: 'Privacy vs Sorveglianza di Massa',
        content: `# Chi ci controlla?
Viviamo in un'era di sorveglianza digitale costante, sia commerciale che governativa.

## Sorveglianza Commerciale
Aziende come Google e Facebook creano profili psicologici basati su ogni tuo click per venderti prodotti o idee politiche.

## Sorveglianza Governativa
In alcuni stati, internet è usata per tracciare il dissenso. Tool come il riconoscimento facciale o il monitoraggio delle chat crittografate mettono a rischio la democrazia. La crittografia (come quella di Signal o WhatsApp) è il nostro unico scudo contro questa intrusione.`,
        tips: ['La crittografia non è per i criminali, è per i cittadini liberi.', 'Sostenere la privacy significa sostenere la democrazia.']
    },
    {
        id: '13-ansia-da-notifica',
        title: 'Ansia da Notifica e Burnout',
        content: `# Il tuo cervello sotto attacco
Ricevere centinaia di stimoli digitali al giorno porta a una degradazione della capacità di concentrazione (Attention Span).

## Sintomi del Burnout Digitale
- Irritabilità se non puoi controllare il telefono.
- Difficoltà a leggere un libro per più di 10 minuti.
- Sensazione di stanchezza mentale costante nonostante non si faccia sforzo fisico.

### La cura: Deep Work
Impara a dedicare blocchi di tempo (es. 40 minuti) a una sola attività senza tenere il telefono nella stessa stanza. Riconquista il tuo tempo.`,
        tips: ['Metti il telefono in un\'altra stanza mentre studi.', 'Il silenzio digitale è rigenerante per il cervello.']
    },
    {
        id: '13-body-dysmorphism',
        title: 'Filtri e Body Dysmorphism',
        content: `# Lo Specchio Distorto dei Social
L'uso costante di filtri (che restringono il naso, ingrandiscono gli occhi, levigano la pelle) altera la percezione che abbiamo di noi stessi.

## Il rischio psicologico
Vedere se stessi sempre "migliorati" dai filtri può portare a odiare il proprio vero riflesso nello specchio reale. Si chiama Dismorfismo Corporeo.

### Consiglio
Prova a passare una settimana postando solo foto reali, senza filtri. Accetta la bellezza della realtà e smetti di seguire account che promuovono standard di bellezza impossibili prodotti dall'IA.`,
        tips: ['I filtri sono maschere digitali, non la verità.', 'Unfollow chi ti fa sentire inadeguato/a.']
    }
]
