import { Lesson } from '../modules'

export const PREDATORI_LESSONS: Lesson[] = [
    {
        id: '1-grooming-definizione',
        title: 'Grooming: Anatomia di un Reato Penale',
        content: `# Grooming: Cosa dice la Legge e la Psicologia
Il termine "grooming" deriva dall'inglese "to groom" (curare, preparare). In ambito legale italiano, si riferisce all'Art. 609-undecies c.p. (Adescamento di minorenni). Non è un semplice comportamento inopportuno; è un crimine penale punito con la reclusione da uno a tre anni.

## La Psicologia del Predatore
Il predatore non agisce d'impulso. Segue un protocollo preciso:
1. **Targeting:** Sceglie profili che sembrano vulnerabili o che esprimono bisogno di affetto/attenzione.
2. **Gaining Trust:** Crea un legame emotivo fortissimo, spesso spacciandosi per un coetaneo che "capisce meglio di chiunque altro".
3. **Sexualization:** Introduce gradualmente temi sessuali per testare i confini della vittima.

## L'intento reale
L'obiettivo finale è il controllo. Una volta ottenute foto intime (CSAM), il predatore usa il ricatto (Sextortion) per costringere la vittima a mandare altro materiale o, nel peggiore dei casi, ad accettare incontri fisici.`,
        tips: ['Il grooming è un reato serio, non una tua colpa.', 'L\'intento del predatore è manipolatorio fin dal primo "ciao".', 'Se senti che un adulto ti capisce "troppo bene", potrebbe essere targeting.']
    },
    {
        id: '1-love-bombing-mechanics',
        title: 'Meccanismi del Love Bombing',
        content: `# Love Bombing: La Droga della Dopamina Digitale
Il love bombing è la fase in cui il predatore ti sommerge di attenzioni. Funziona perché sfrutta il rilascio di dopamina nel tuo cervello.

## Come riconoscerlo tecnicamente
- **Frequenza Anomala:** Ti invia 50-100 messaggi al giorno, preoccupandosi se non rispondi in 5 minuti.
- **Validazione Eccessiva:** "Sei la persona più intelligente che abbia mai conosciuto", "I tuoi amici sono troppo immaturi per te".
- **Identità Specchio:** Dice di amare esattamente le tue stesse cose (musica, giochi, hobby) per creare un'illusione di anima gemella.

## Perché è pericoloso?
Crea un **Debito Emotivo**. Quando lui inizierà a chiederti cose "scomode", tu ti sentirai in debito per tutta la gentilezza che ti ha mostrato e avrai paura di deluderlo. Questa è l'essenza della manipolazione.`,
        tips: ['Complimenti eccessivi da uno sconosciuto = Red Flag.', 'Nessuno si innamora in poche ore di chat: è una tecnica.', 'Diffida di chi vuole sapere ogni dettaglio della tua vita subito.']
    },
    {
        id: '1-catfish-technical-investigation',
        title: 'Investigazione Tecnica di un Catfish',
        content: `# Smascherare il Falso: Tool Investigativi
Il catfishing (uso di falsa identità) può essere smascherato con un po' di investigazione digitale (OSINT).

## Tool di Ricerca Inversa
1. **TinEye vs Google Images:** TinEye è spesso più preciso per trovare foto rubate da siti web meno noti.
2. **Yandex Images:** Sorprendentemente efficace per identificare volti, poiché usa algoritmi di riconoscimento facciale superiori per le ricerche pubbliche.

## Analisi del Profilo (Audit)
- **Data di Creazione:** Guarda il primo post. Se è di 3 giorni fa ma ha 2000 follower, sono stati comprati.
- **Engagement Consistency:** Ha 500 Like ma zero commenti? O i commenti sono tutti bot ("Beautiful!", "Nice pic")?
- **Username check:** Cerca lo stesso username su altri social (usa [Sherlock](https://github.com/sherlock-project/sherlock) o siti come Namechk). Se trovi un profilo con lo stesso nome ma foto diverse, hai trovato un truffatore.`,
        tips: ['Yandex Images è il "segreto" degli investigatori per trovare fake.', 'Un profilo "perfetto" con zero amici reali è al 99% un catfish.', 'Chiedi sempre una prova video: "toccati il naso con la mano destra ora".']
    },
    {
        id: '1-sextortion-crisis-management',
        title: 'Gestione Crisi: Sextortion',
        content: `# Sextortion: Fermare il Ricatto Ora
Se qualcuno ti minaccia di diffondere tue foto intime, sei in una situazione di emergenza. Ma non sei senza potere.

## Protocollo di Azione Immediata:
1. **NON PAGARE:** Mai. Il pagamento non cancella la foto, conferma solo che hai paura e che pagherai ancora.
2. **NON CANCELLARE LA CHAT:** Le minacce sono prove legali fondamentali. Fai screenshot forensi (includi data, ora e URL del profilo).
3. **Usa StopNCII.org:** Questo portale permette di creare un "hash" (impronta digitale) della tua foto e inviarlo ai database di Facebook, Instagram e TikTok per bloccarne il caricamento automatico.
4. **Denuncia alla Polizia Postale:** È l'unico modo per far sequestrare i dispositivi del ricattatore.

## Ricorda
Il ricattatore è un criminale, tu sei la vittima. La vergogna che provi è l'arma che lui usa contro di te. Levagli l'arma parlandone con un adulto fidato.`,
        tips: ['StopNCII.org è lo strumento più potente al mondo contro il Revenge Porn.', 'I ricattatori smettono se vedono che non hai paura di denunciarli.', 'Non fidarti delle sue "promesse" di cancellare tutto se paghi.']
    },
    {
        id: '1-legal-dossier-creation',
        title: 'Creare un Dossier Legale Efficace',
        content: `# Come Documentare per la Polizia Postale
Quando vai a denunciare, più informazioni tecniche porti, più velocemente agiranno.

## Cosa includere nel Dossier:
- **URL Completi:** Non scrivere "L'utente @Marco123", scrivi \`https://instagram.com/marco123_hack\`. Gli username cambiano, gli ID account no.
- **Metadata delle Email:** Se ti scrive via mail, salva l'intero messaggio come file .eml per mantenere gli header degli IP.
- **Log delle Chiamate:** Se ti chiama, fai screenshot del registro chiamate con orari precisi.
- **Codice Univoco:** Se l'aggressore usa Telegram, cerca il suo "User ID" numerico (tramite bot come @userinfobot), che rimane lo stesso anche se cambia nome e numero.

## Conservazione
Metti tutto su una chiavetta USB crittografata (o protetta da password) e portala fisicamente alla Polizia Postale della tua città.`,
        tips: ['Gli screenshot da soli non bastano, servono gli URL.', 'L\'ID numerico di Telegram è l\'unico modo per non perdere traccia del predatore.', 'Conserva le prove offline in un posto sicuro.']
    }
]
