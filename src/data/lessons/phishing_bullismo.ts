import { Lesson } from '../modules'

export const PHISHING_LESSONS: Lesson[] = [
    {
        id: '3-phishing-intro',
        title: 'Phishing: L\'Email del Pescatore (Profondo)',
        content: `# Phishing: Anatomia di un Inganno Digitale
Il phishing non è un semplice errore tecnico, è una forma sofisticata di manipolazione psicologica nota come "Ingegneria Sociale". I truffatori studiano il comportamento umano per creare esche perfette.

## Il Meccanismo della "Paura e Urgenza"
I truffatori sfruttano l'Amigdala, la parte del cervello che gestisce le reazioni di attacco o fuga. Quando leggi "CONTO BLOCCATO: AGISCI ORA", il tuo cervello entra in uno stato di allerta che inibisce il pensiero logico-razionale della corteccia prefrontale.
- **Urgenza Artificiale:** "Hai 24 ore prima della cancellazione definitiva".
- **Autorità Falsa:** Usano loghi e linguaggi burocratici di Poste Italiane, INPS, PayPal o Apple.

## Perché è un business miliardario
Oggi i "Phishing-as-a-Service" permettono anche a criminali non esperti di comprare pacchetti pronti (phishing kit) con pagine clone identiche alle originali. Un solo clic può portare al furto di credenziali bancarie, identità digitale e accesso ai tuoi social.`,
        tips: ['L\'urgenza è il segnale numero uno di una truffa.', 'Il tuo cervello sotto stress è meno attento ai dettagli: fermati e respira.', 'Le aziende serie non ti scrivono mai con un countdown.']
    },
    {
        id: '3-email-headers-tech',
        title: 'Tecnica: Analizzare gli Header Email',
        content: `# Oltre il Mittente: Gli Intestazioni (Headers)
Se vuoi essere un vero esperto, devi imparare a leggere quello che c'è "sotto il cofano" di una mail.

## Visualizzare gli Header (Intestazioni)
In Gmail, clicca sui tre puntini e seleziona "Mostra originale". In Outlook, "Visualizza dettagli messaggio".

## Cosa cercare per smascherare un truffatore:
1. **Return-Path:** Se l'indirizzo nel "From" è \`supporto@amazon.it\` ma il "Return-Path" è \`hacker@server-russo.com\`, la mail è falsa.
2. **Authentication-Results:** Cerca i valori **SPF, DKIM e DMARC**.
    - **SPF: pass** -> Il server che ha inviato la mail è autorizzato.
    - **SPF: fail** -> È quasi certamente phishing.
3. **Received:** Mostra tutti i server attraversati dalla mail. Se vedi indirizzi IP strani o server in paesi sospetti, diffida.`,
        tips: ['"Mostra originale" rivela la verità tecnica dietro una mail.', 'SPF e DKIM sono la carta d\'identità digitale di una mail seria.', 'Non fidarti dei loghi, guarda le autenticazioni.']
    },
    {
        id: '3-hover-and-punycode',
        title: 'URL Spoofing e Attacchi Punycode',
        content: `# Link Ingannevoli e Alfabeti Alieni
Non basta più passare il mouse sopra un link (Hovering). Gli hacker usano tecniche visive per ingannarti.

## Attacco Punycode (Omografi)
Un hacker può registrare un dominio come \`аррӏе.com\`. Sembra "apple.com", ma usa lettere dell'alfabeto cirillico (la 'a' russa). 
- **Come evitarlo:** Guarda l'URL nella barra degli indirizzi dopo aver cliccato (anche se è meglio non cliccare mai). I browser moderni trasformano questi nomi in stringhe che iniziano con \`xn--\`. Se vedi \`xn--pple-43d.com\`, scappa!

## Accorciatori di URL (Bitly, TinyURL)
Vengono usati per nascondere la vera destinazione.
- **Tool di difesa:** Usa siti come [ExpandURL.net](https://www.expandurl.net) per vedere dove porta un link corto senza doverlo aprire.`,
        tips: ['Attenzione ai domini con lettere sospette o caratteri speciali.', 'Usa un "URL Expander" per i link accorciati.', 'L\'estensione .com non garantisce sicurezza se il nome è contraffatto.']
    },
    {
        id: '3-smishing-2fa-theft',
        title: 'Smishing e il Furto del Codice 2FA',
        content: `# Quando gli SMS diventano armi
Lo Smishing (Phishing via SMS) è pericolosissimo perché spesso arriva in thread (conversazioni) che sembrano legittime.

## SMS Spoofing
I criminali usano servizi che permettono di impostare il "Mittente Alfabetico" (es. "PosteInfo"). Il tuo telefono raggrupperà questo messaggio insieme ai veri messaggi di Poste Italiane.

## La truffa del Codice 2FA
Ti arriva un SMS: "Accesso anomalo rilevato. Inserisci il codice che ti abbiamo inviato per bloccare l'account". In realtà, l'hacker sta cercando di entrare nel tuo account e tu gli stai dando il codice di accesso (2FA) che serve a lui per superare la barriera di sicurezza.
**Regola d'oro:** Nessun operatore ti chiederà mai un codice ricevuto via SMS per "aiutarti".`,
        tips: ['I messaggi della banca non contengono mai link cliccabili a pagine di login.', 'Se ricevi un codice 2FA che non hai richiesto, qualcuno ha la tua password.', 'Non rispondere mai agli SMS sospetti.']
    },
    {
        id: '3-malware-analysis-lab',
        title: 'Analisi Malware: Oltre l\'Antivirus',
        content: `# Come studiare un file sospetto in sicurezza
Se hai un file sospetto, non basta l'antivirus locale. Serve un'analisi multi-livello.

## Sandbox Online (Any.Run / Joe Sandbox)
Questi servizi permettono di eseguire il file in un computer virtuale isolato (Sandbox) e vedere in tempo reale cosa fa:
- Cerca di contattare server in Russia o Cina?
- Tenta di criptare i documenti?
- Prova a installarsi all'avvio del PC?

## Hash di un File
Ogni file ha un'"impronta digitale" unica chiamata Hash (es. SHA-256). Se cambi anche solo un punto in un documento, l'hash cambia completamente.
- Copia l'hash del file e cercalo su Google o VirusTotal: se è un malware noto, troverai subito decine di segnalazioni.`,
        tips: ['La Sandbox è un laboratorio sicuro per detonare virus.', 'L\'impronta digitale di un file (Hash) non mente mai.', 'Non aprire mai file .exe, .scr o .js scaricati da siti di streaming.']
    },
    {
        id: '4-cyberbullismo-legge-71',
        title: 'Legge 71/2017: Il tuo Scudo Legale',
        content: `# La Prima Legge contro il Bullismo Digitale
L'Italia è stata pioniera con la Legge 29 maggio 2017, n. 71. È fondamentale conoscerla per sapersi difendere.

## Articolo 1: Definizione di Cyberbullismo
Definisce il cyberbullismo come qualunque forma di pressione, aggressione, ricatto, furto d'identità commessa per via telematica, che abbia lo scopo di isolare o umiliare un minore.

## I tuoi 3 Grandi Poteri di Difesa:
1. **Richiesta di Oscuramento (Art. 3):** Puoi chiedere (anche se minorenne, sopra i 14 anni) al gestore del sito la rimozione del contenuto. Se non lo fanno entro 48 ore, interviene il Garante della Privacy.
2. **Ammonimento del Questore (Art. 7):** Fino a quando non c'è una denuncia penale, puoi chiedere al Questore di chiamare il bullo (e i suoi genitori) in commissariato per un "rimprovero ufficiale". Questo rimane nel fascicolo della persona.
3. **Figura del Referente a Scuola:** Ogni scuola DEVE avere un professore referente per il bullismo a cui puoi rivolgerti.`,
        tips: ['Sopra i 14 anni puoi muoverti legalmente anche senza genitori.', 'L\'ammonimento del Questore è gratuito e molto veloce.', 'La scuola è obbligata per legge ad aiutarti.']
    },
    {
        id: '4-forensics-screenshots',
        title: 'Forensics: Salvare prove inattaccabili',
        content: `# Come creare prove che valgono in tribunale
Uno screenshot normale può essere contestato come "fotomontaggio". Ecco come creare prove forensi.

## Il Metodo del Video-Log
Usa un'app di registrazione schermo (AZ Recorder su Android, Registrazione Schermo su iOS, OBS su PC).
1. Inizia a registrare.
2. Vai su un sito che mostra data e ora esatta (es. \`oraesatta.it\`).
3. Torna sulla chat o sul post offensivo.
4. Scorri lentamente tutta la conversazione per mostrare che è reale.
5. Clicca sul profilo dell'aggressore per mostrare il suo ID univoco (URL).

## Autenticazione Forense
Esistono tool come **Kopernicana** o **TrueScreen** che certificano lo screenshot rendendolo immodificabile tramite crittografia (Timestamp). Questi hanno valore di prova legale certa.`,
        tips: ['Un video che mostra data, ora e scorrimento è quasi impossibile da smentire.', 'Salva l\'URL del profilo dell\'aggressore, non solo il nome.', 'Non cancellare mai la conversazione originale finché non l\'hai documentata.']
    },
    {
        id: '4-psicologia-bullo-vittima',
        title: 'Psicologia: Il Meccanismo del Silenzio',
        content: `# Perché il bullismo online fa così male?
Il dolore psicologico del bullismo digitale è spesso superiore a quello fisico per un motivo preciso: la **Disinibizione Online**.

## L'Effetto Disinibizione
L'assenza di contatto visivo fa sì che il bullo non riceva il "feedback del dolore" dalla vittima. Questo spegne l'empatia e lo porta a compiere atti di crudeltà che non farebbe mai guardandoti negli occhi.

## Il "Ciclo della Vergogna"
La vittima spesso prova vergogna e pensa di meritarsi gli insulti, o ha paura di perdere l'accesso ai social se lo dice ai genitori. 
**Verità:** Il bullo si nutre del tuo isolamento. Rompere il silenzio non significa "fare la spia", significa esercitare il proprio diritto alla sicurezza e alla salute mentale.`,
        tips: ['Il bullismo online NON è colpa tua, mai.', 'I bulli agiscono così perché sono protetti da uno schermo, non perché sono forti.', 'Il silenzio è l\'unico complice del bullo.']
    }
]

export const BULLISMO_LESSONS = PHISHING_LESSONS.filter(l => l.id.startsWith('4'))
