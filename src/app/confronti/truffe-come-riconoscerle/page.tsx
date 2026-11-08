import Link from 'next/link'
import {
    ArrowLeft,
    AlertTriangle,
    ShieldAlert,
    CheckCircle2,
    XCircle,
    PhoneCall,
    Mail,
    MessageSquare,
    QrCode,
    HelpCircle,
    Lock,
} from 'lucide-react'
import { PageHeader } from '@/components/ui/PageHeader'
import { JsonLd } from '@/components/seo/JsonLd'
import { buildSeoMetadata } from '@/lib/seo'
import { absoluteUrl } from '@/lib/seo-core'

export const metadata = buildSeoMetadata({
    title: 'Truffe e Phishing: Matrice di Riconoscimento Canale per Canale',
    description: 'Come riconoscere subito SMS truffa (smishing), finte telefonate della banca (vishing), email malevole, WhatsApp del "figlio in difficoltà" e finti QR code. I segnali d’allarme e cosa fare.',
    path: '/confronti/truffe-come-riconoscerle/',
    keywords: [
        'come riconoscere sms truffa',
        'falsa telefonata banca antifrode',
        'truffa pacco fermo sms',
        'phishing inps agenzia entrate',
        'truffa whatsapp ciao mamma ho perso il telefono',
        'cosa fare dopo aver cliccato link truffa',
        'spoofing mittente sms',
    ],
})

const FRAUD_CHANNELS = [
    {
        name: 'SMS (Smishing) e Spoofing del Mittente',
        icon: MessageSquare,
        color: 'text-amber-500',
        howItWorks: 'Il messaggio truffa appare all’interno dello stesso thread SMS della tua banca reale, della posta o del corriere. Dice che l’accesso al conto è bloccato o che un pacco è fermo per oneri doganali da pagare.',
        redFlags: [
            'Presenza di un link abbreviato o con dominio strano (es. bit.ly, banca-sicura24.com, poste-aggiornamento.it)',
            'Urgenza drammatica: "Hai 15 minuti per sbloccare l’utenza prima della cancellazione"',
            'Richiesta di inserire password, PIN o numero di carta su una pagina web',
        ],
        whatNeverToDo: 'Non cliccare mai sul link. La banca non ti chiederà mai di cliccare un link per riattivare le credenziali.',
    },
    {
        name: 'Telefonate della Falsa Banca (Vishing / Caller ID Spoofing)',
        icon: PhoneCall,
        color: 'text-red-500',
        howItWorks: 'Ricevi una chiamata da un sedicente "operatore della sicurezza antifrode". Sul display appare il numero reale della tua banca (tramite spoofing telefonico). Ti dicono che è in corso un bonifico non autorizzato verso l’estero.',
        redFlags: [
            'Ti chiedono di leggere ad alta voce o digitare un codice OTP ricevuto sul cellulare',
            'Ti ordinano di trasferire immediatamente i tuoi risparmi su un "conto tecnico sicuro" o "fondo di garanzia"',
            'Ti dicono di non recarti in filiale e di non chiudere la chiamata perché "gli impiegati potrebbero essere complici"',
        ],
        whatNeverToDo: 'Riattacca subito. I conti di sicurezza transitori NON esistono. La banca non ha mai bisogno che tu sposti fondi per bloccare un attacco.',
    },
    {
        name: 'Email di Finto Rimborso o Notifica Giudiziaria (Phishing)',
        icon: Mail,
        color: 'text-blue-500',
        howItWorks: 'Email con loghi contraffatti di INPS, Agenzia delle Entrate o Polizia di Stato. Affermano che hai diritto a un rimborso fiscale o che sei indagato per pedopornografia, invitando a scaricare una ricevuta in allegato.',
        redFlags: [
            'L’indirizzo reale del mittente (visibile espandendo i dettagli) non termina con .gov.it o con il dominio ufficiale',
            'Allegati con estensione pericolosa (.zip, .exe, .rar, o finti PDF con doppio suffisso come fattura.pdf.exe)',
            'Mancanza del tuo codice fiscale o nome specifico nel corpo dell’email (es. "Gentile contribuente")',
        ],
        whatNeverToDo: 'Non scaricare né aprire l’allegato. Elimina l’email e segnalala come phishing nel tuo client di posta.',
    },
    {
        name: 'Truffa WhatsApp del "Figlio che ha perso il telefono"',
        icon: MessageSquare,
        color: 'text-emerald-500',
        howItWorks: 'Messaggio da un numero sconosciuto: "Ciao papà/mamma, mi è caduto il telefono nel water, questo è il mio numero provvisorio. Ho urgente bisogno di 750€ per pagare una spesa/bolletta scaduta prima che mi blocchino il conto".',
        redFlags: [
            'Richiesta di denaro immediata tramite bonifico istantaneo, ricarica PostePay o carta prepagata',
            'Scuse continue per non poter fare una chiamata vocale o una videochiamata ("ho il microfono rotto")',
            'Tono affettuoso ma incalzante per indurre panico nel genitore',
        ],
        whatNeverToDo: 'Non versare un solo centesimo. Chiama immediatamente il vecchio numero storico di tuo figlio o di altri familiari.',
    },
    {
        name: 'Falsi Codici QR (Quishing)',
        icon: QrCode,
        color: 'text-purple-500',
        howItWorks: 'Adesivi contraffatti incollati sopra ai veri QR code di colonnine di ricarica auto, parcometri, o menù di bar e ristoranti. Inquadrando il codice si viene dirottati su un portale di phishing di pagamento.',
        redFlags: [
            'Adesivo sovrapposto visibilmente staccabile o non perfettamente allineato al cartello originale',
            'L’indirizzo web che compare sulla fotocamera prima dell’apertura non corrisponde al gestore del servizio',
            'Richiesta improvvisa di installare un profilo di configurazione o un’app esterna',
        ],
        whatNeverToDo: 'Non inserire dati di pagamento se il link non è quello istituzionale del fornitore.',
    },
]

const FAQS = [
    {
        question: 'Come può un SMS truffa comparire nella stessa chat dei messaggi veri della mia banca?',
        answer: 'I protocolli SMS tradizionali (SS7) consentono di personalizzare il campo "Sender ID" con una stringa alfanumerica senza richiedere una verifica crittografica di autenticità. I truffatori usano piattaforme online estere che inviano il messaggio con il nome esatto della tua banca (ad esempio "Intesa", "UniCredit", "PosteInfo"). Lo smartphone del destinatario, riconoscendo lo stesso nome mittente, unisce automaticamente il messaggio truffa allo storico delle notifiche legittime.',
    },
    {
        question: 'Cosa devo fare nei primi 10 minuti se ho inserito i dati della mia carta su un sito truffa?',
        answer: '1) Blocca immediatamente la carta di pagamento chiamando il numero verde di blocco della tua banca (attivo 24/7) o direttamente dall’app bancaria. 2) Se hai comunicato le credenziali di accesso all’home banking, modifica subito la password da un dispositivo sicuro. 3) Fai screenshot della pagina truffa, del messaggio e della transazione sospetta. 4) Presenta denuncia alla Polizia Postale o ai Carabinieri.',
    },
    {
        question: 'Se ho autorizzato un bonifico su indicazione di un finto operatore, la banca è tenuta a rimborsarmi?',
        answer: 'La giurisprudenza dell’Arbitro Bancario Finanziario (ABF) e dei tribunali riconosce la responsabilità dell’intermediario bancario qualora non abbia adottato sistemi di sicurezza avanzati per prevenire lo spoofing telefonico e transazioni anomale. Se la banca non dimostra la colpa grave dell’utente, quest’ultimo ha diritto al rimborso totale o parziale delle somme sottratte.',
    },
]

export default function TruffeRiconoscerlePage() {
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Truffe e Phishing: Matrice di Riconoscimento Canale per Canale',
        description: 'Guida pratica di autodifesa digitale per riconoscere e bloccare sul nascere SMS contraffatti, finte telefonate bancarie, phishing ed email malevole.',
        url: absoluteUrl('/confronti/truffe-come-riconoscerle/'),
        author: {
            '@type': 'Person',
            name: 'Adelajdo Haxhiaj',
        },
        publisher: {
            '@type': 'Organization',
            name: 'Busssola',
        },
        datePublished: '2026-10-18',
        dateModified: '2026-11-08',
    }

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: FAQS.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    }

    return (
        <div className="space-y-10 py-8">
            <JsonLd data={articleSchema} />
            <JsonLd data={faqSchema} />

            <div className="flex items-center gap-2 text-xs text-muted">
                <Link href="/confronti" className="inline-flex items-center gap-1 hover:text-foreground">
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Tutti i confronti
                </Link>
                <span>/</span>
                <span className="text-foreground font-medium">Matrice Truffe e Phishing</span>
            </div>

            <PageHeader
                badge="Allarme e Prevenzione Frodi"
                icon={ShieldAlert}
                title="Truffe Online: Come Riconoscerle Subito Canale per Canale"
                description="Matrice di autodifesa digitale: come individuare all’istante SMS di spoofing bancario, telefonate di finti operatori della sicurezza, email esca, messaggi ingannevoli su WhatsApp e finti codici QR."
            />

            {/* Emergency Alert Banner */}
            <div className="bg-red-500/10 border border-red-500/25 rounded-xl p-5 text-red-950 dark:text-red-100 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                <div className="space-y-1">
                    <div className="flex items-center gap-2 font-semibold text-base text-red-900 dark:text-red-200">
                        <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
                        <span>Hai appena cliccato su un link o comunicato un codice?</span>
                    </div>
                    <p className="text-xs md:text-sm text-red-900/80 dark:text-red-200/90 max-w-2xl leading-relaxed">
                        Non perdere tempo: chiama il numero di blocco della tua banca (scritto dietro alla carta), modifica le password dal sito ufficiale e consulta subito il nostro protocollo di primo soccorso digitale.
                    </p>
                </div>
                <Link
                    href="/sos"
                    className="px-4 py-2 text-xs font-semibold rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors whitespace-nowrap shadow-sm"
                >
                    Apri Centro SOS Emergenze
                </Link>
            </div>

            {/* Fraud Channel Matrix */}
            <section className="space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground">
                        Matrice canali: meccanismo, segnali rossi e cosa NON fare
                    </h2>
                </div>

                <div className="grid gap-6">
                    {FRAUD_CHANNELS.map((ch, idx) => {
                        const Icon = ch.icon
                        return (
                            <article
                                key={idx}
                                className="bg-surface border border-border rounded-xl p-6 md:p-8 space-y-4 hover:border-primary/50 transition-all shadow-sm"
                            >
                                <div className="flex items-center gap-3 border-b border-border/50 pb-3">
                                    <div className="p-2.5 rounded-lg bg-surface-muted border border-border/60">
                                        <Icon className={`w-5 h-5 ${ch.color}`} />
                                    </div>
                                    <h3 className="font-display font-semibold text-lg md:text-xl text-foreground">
                                        {ch.name}
                                    </h3>
                                </div>

                                <div className="space-y-1 text-xs md:text-sm">
                                    <strong className="text-foreground font-semibold">Come funziona la trappola:</strong>
                                    <p className="text-secondary leading-relaxed">{ch.howItWorks}</p>
                                </div>

                                <div className="p-4 rounded-lg bg-surface-muted border border-border/50 space-y-2 text-xs">
                                    <strong className="font-semibold text-foreground block">
                                        Segnali d&apos;allarme immediati (Red Flags):
                                    </strong>
                                    <ul className="space-y-1.5 text-secondary">
                                        {ch.redFlags.map((rf, rIdx) => (
                                            <li key={rIdx} className="flex items-start gap-2">
                                                <XCircle className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                                                <span>{rf}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="p-3.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs flex items-start gap-2.5">
                                    <Lock className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                                    <div>
                                        <strong className="font-semibold text-amber-950 dark:text-amber-200">Regola d&apos;oro: </strong>
                                        <span className="text-amber-900/90 dark:text-amber-300/90">{ch.whatNeverToDo}</span>
                                    </div>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </section>

            {/* Golden Rules Summary */}
            <section className="bg-surface border border-border rounded-xl p-6 md:p-8 space-y-4">
                <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground">
                    I 4 principi infallibili di difesa
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
                    <div className="p-4 rounded-lg bg-surface-muted border border-border/50 space-y-1.5">
                        <div className="flex items-center gap-2 font-semibold text-foreground">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            <span>1. Nessuno ti chiede l&apos;OTP a voce</span>
                        </div>
                        <p className="text-secondary leading-relaxed">
                            L&apos;OTP (One Time Password) serve esclusivamente a confermare un&apos;azione che stai eseguendo TU. Chiunque te lo chieda a voce o via messaggio è un truffatore, senza eccezioni.
                        </p>
                    </div>

                    <div className="p-4 rounded-lg bg-surface-muted border border-border/50 space-y-1.5">
                        <div className="flex items-center gap-2 font-semibold text-foreground">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            <span>2. I conti di sicurezza transitori non esistono</span>
                        </div>
                        <p className="text-secondary leading-relaxed">
                            Se un presunto operatore antifrode ti chiede di spostare i soldi su un altro IBAN per proteggerli, sta cercando di farti svuotare il conto volontariamente per impedire il blocco.
                        </p>
                    </div>

                    <div className="p-4 rounded-lg bg-surface-muted border border-border/50 space-y-1.5">
                        <div className="flex items-center gap-2 font-semibold text-foreground">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            <span>3. Chiudi la chiamata e richiama tu</span>
                        </div>
                        <p className="text-secondary leading-relaxed">
                            Non fidarti mai del numero visualizzato sullo schermo del telefono: può essere falsificato. Riattacca sempre e componi manualmente il numero della tua filiale o del servizio clienti ufficiale.
                        </p>
                    </div>

                    <div className="p-4 rounded-lg bg-surface-muted border border-border/50 space-y-1.5">
                        <div className="flex items-center gap-2 font-semibold text-foreground">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            <span>4. Non accedere ai portali tramite link inviati</span>
                        </div>
                        <p className="text-secondary leading-relaxed">
                            Se ricevi un avviso su INPS, Agenzia delle Entrate, Poste o Banca, apri l&apos;app ufficiale o digita manualmente l&apos;indirizzo nel browser (es. www.inps.it). Non cliccare mai il link dell&apos;SMS.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Accordion */}
            <section className="bg-surface border border-border rounded-xl p-6 md:p-8 space-y-6">
                <div className="flex items-center gap-2.5">
                    <HelpCircle className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-display font-semibold text-foreground">
                        Domande Frequenti su Truffe e Rimborsi
                    </h2>
                </div>
                <div className="grid gap-4">
                    {FAQS.map((faq, idx) => (
                        <div key={idx} className="p-4 rounded-lg bg-surface-muted border border-border/50 space-y-2">
                            <h3 className="font-semibold text-sm md:text-base text-foreground">
                                {faq.question}
                            </h3>
                            <p className="text-xs md:text-sm text-secondary leading-relaxed">
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Official Support Links */}
            <div className="p-4 rounded-xl border border-border/60 bg-surface-muted flex items-center justify-between flex-wrap gap-3 text-xs text-secondary">
                <div className="flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-primary" />
                    <span>Per segnalazioni e denunce: Commissariato di P.S. Online (Polizia Postale) e CERT-AgID.</span>
                </div>
                <div className="flex items-center gap-3">
                    <a
                        href="https://www.commissariatodips.it"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
                    >
                        Polizia Postale Online ↗
                    </a>
                    <Link href="/moduli/modulo-03-truffe-phishing" className="text-muted hover:text-foreground">
                        Guida completa al modulo truffe ↗
                    </Link>
                </div>
            </div>
        </div>
    )
}
