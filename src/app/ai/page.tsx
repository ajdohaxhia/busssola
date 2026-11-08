import Link from 'next/link'
import {
    Sparkles,
    Shield,
    CheckCircle2,
    XCircle,
    GraduationCap,
    Briefcase,
    Lock,
    Search,
    Cpu,
    ExternalLink,
} from 'lucide-react'
import { PageHeader } from '@/components/ui/PageHeader'
import { JsonLd } from '@/components/seo/JsonLd'
import { absoluteUrl } from '@/lib/seo-core'

const AI_ASSISTANTS = [
    {
        name: 'ChatGPT',
        company: 'OpenAI',
        freeFeatures: 'Modello GPT-4o mini e accesso parziale a GPT-4o, ricerca web in tempo reale, analisi dati e generazione immagini limitata.',
        paidFeatures: 'ChatGPT Plus / Pro: accesso prioritario a GPT-4o senza limiti rigidi, modelli avanzati di ragionamento (o1), creazione di GPTs personalizzati.',
        privacyPolicy: 'Nelle impostazioni account ("Controlli dati") è possibile disattivare l’opzione "Migliora il modello per tutti" per impedire che le chat vengano usate per l’addestramento.',
        bestFor: 'Brainstorming creativo, prima stesura di testi, spiegazioni generali e programmazione di base.',
        officialDocs: 'https://help.openai.com/en/articles/7730893-data-controls-faq',
    },
    {
        name: 'Google Gemini',
        company: 'Google',
        freeFeatures: 'Modello Gemini 1.5 Flash / Pro, finestra di contesto estesa, integrazione con l’ecosistema Google (Docs, Drive, Gmail, Maps, YouTube) e ricerca web Google.',
        paidFeatures: 'Gemini Advanced (Google One AI Premium): accesso ai modelli più potenti, integrazione nativa nei documenti di lavoro e 2 TB di archiviazione cloud.',
        privacyPolicy: 'Nelle impostazioni di Gemini è possibile disattivare l’archiviazione delle attività per impedire ai revisori umani di analizzare le conversazioni.',
        bestFor: 'Analisi di documenti lunghi o video, integrazione con strumenti Google e sintesi di fonti web recenti.',
        officialDocs: 'https://support.google.com/gemini/answer/13594961',
    },
    {
        name: 'Claude',
        company: 'Anthropic',
        freeFeatures: 'Accesso al modello Claude 3.5 Sonnet con limiti giornalieri di messaggi, analisi di file di testo e codice, scrittura naturale e sfumata.',
        paidFeatures: 'Claude Pro: volume di messaggi 5 volte superiore, accesso prioritario durante i picchi di traffico e anteprima di nuove funzionalità (Projects).',
        privacyPolicy: 'Anthropic non addestra i propri modelli commerciali sulle chat degli utenti a meno che non vi sia un consenso esplicito o una segnalazione di abuso.',
        bestFor: 'Scrittura complessa, sintesi di testi argomentativi, revisione stilistica e generazione di codice pulito.',
        officialDocs: 'https://support.anthropic.com/en/articles/7996848-how-does-anthropic-handle-my-data',
    },
    {
        name: 'Microsoft Copilot',
        company: 'Microsoft',
        freeFeatures: 'Accesso gratuito tramite account Microsoft con ricerca Bing integrata, generazione immagini con DALL-E e citazioni cliccabili delle fonti web.',
        paidFeatures: 'Copilot Pro: integrazione diretta nelle applicazioni Word, Excel, PowerPoint e Outlook con modelli più veloci.',
        privacyPolicy: 'Con account aziendale (Commercial Data Protection) i dati delle chat non vengono salvati né usati per addestrare i modelli.',
        bestFor: 'Ricerche web con citazioni delle fonti e lavoro integrato con l’ecosistema Windows e Office.',
        officialDocs: 'https://learn.microsoft.com/it-it/copilot/manage',
    },
    {
        name: 'Modelli Open-Source Locali (Ollama / Llama / Mistral)',
        company: 'Community Open Source',
        freeFeatures: 'Completamente gratuiti, scaricabili ed eseguibili in locale sul proprio computer senza connessione internet.',
        paidFeatures: 'Nessun costo di abbonamento. Richiedono hardware adeguato (computer con almeno 16 GB di RAM e scheda video o processore Apple Silicon).',
        privacyPolicy: 'Massima privacy assoluta: nessun dato, testo o file esce dal proprio computer. Zero tracciamento su server terzi.',
        bestFor: 'Trattamento di dati altamente riservati, segreti aziendali, documenti legali o medici e massima indipendenza da piattaforme commerciali.',
        officialDocs: 'https://ollama.com',
    },
]

const USE_CASES = [
    {
        title: 'AI per lo Studio: Imparare senza delegare il cervello',
        icon: GraduationCap,
        summary: 'Il rischio maggiore dell’AI nello studio è l’illusione di competenza: leggere un riassunto generato dall’AI non equivale ad aver compreso il concetto.',
        goodPractice: 'Usa l’AI come tutor socratico: chiedile "Mettimi alla prova con 5 domande a risposta aperta sul capitolo che ti incollo, e dimmi dove sbaglio"',
        badPractice: 'Farsi scrivere la tesina o i compiti: oltre a rischiare allucinazioni o verifiche antiplagio, si perde la capacità di strutturare un pensiero autonomo.',
    },
    {
        title: 'AI per Curriculum e Lettere: Valorizzare, non inventare',
        icon: Briefcase,
        summary: 'I sistemi di reclutamento (ATS) e i selezionatori umani riconoscono facilmente i curriculum scritti con frasi generiche o altisonanti da prompt standard.',
        goodPractice: 'Incolla la tua bozza reale con dati quantitativi e chiedi: "Rendi più concisa questa descrizione evidenziando i risultati misurabili raggiunti"',
        badPractice: 'Chiedere "Scrivimi un CV per un lavoro da project manager": genererà competenze fittizie che non saprai difendere durante il colloquio.',
    },
    {
        title: 'Privacy e Dati Personali: Cosa NON inserire mai',
        icon: Lock,
        summary: 'I prompt inseriti nelle versioni gratuite delle AI cloud possono essere salvati e revisionati da team umani per valutare la qualità delle risposte.',
        goodPractice: 'Anonimizza sempre i testi: sostituisci nomi propri, aziende, indirizzi e codici identificativi con etichette generiche prima di incollarli.',
        badPractice: 'Incollare estratti conto bancari, cartelle cliniche, password, documenti d’identità o accordi di riservatezza coperti da NDA.',
    },
    {
        title: 'Fact-Checking e Allucinazioni: La regola d’oro',
        icon: Search,
        summary: 'I modelli linguistici (LLM) sono generatori probabilistici di testo coerente, non database di verità certificata: possono citare leggi inesistenti con totale sicurezza.',
        goodPractice: 'Verifica sempre ogni legge, data, formula o statistica confrontandola direttamente sulla Gazzetta Ufficiale, su Normattiva o sul portale ministeriale.',
        badPractice: 'Fidarsi ciecamente di un numero o di una sentenza giudiziaria fornita dall’AI senza aver aperto il link della fonte primaria originale.',
    },
]

export default function AiHubPage() {
    const pageSchema = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Guida Indipendente all’Intelligenza Artificiale - Busssola',
        description: 'Bussola critica per l’uso consapevole degli strumenti di AI per lo studio, il lavoro e la tutela della privacy.',
        url: absoluteUrl('/ai/'),
    }

    return (
        <div className="space-y-10 py-8">
            <JsonLd data={pageSchema} />

            <PageHeader
                badge="Bussola Digitale AI"
                icon={Sparkles}
                title="Intelligenza Artificiale per Studio e Lavoro"
                description="Una guida indipendente e senza tecnicismi per orientarsi tra ChatGPT, Gemini, Claude, Copilot e modelli locali: cosa offrono gratis, come proteggere la privacy, verificare le fonti ed evitare le allucinazioni."
            />

            {/* Core Principle Alert */}
            <div className="bg-primary/10 border border-primary/25 rounded-xl p-5 text-foreground flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                <div className="space-y-1">
                    <div className="flex items-center gap-2 font-semibold text-base text-primary">
                        <Cpu className="w-5 h-5" />
                        <span>La regola aurea: L’AI è un acceleratore, non un sostituto del pensiero</span>
                    </div>
                    <p className="text-xs md:text-sm text-secondary max-w-2xl leading-relaxed">
                        Un modello linguistico non capisce ciò che scrive: calcola la parola statisticamente più probabile. Usalo per schematizzare, confrontare e trovare spunti, ma mantieni sempre la responsabilità finale di verifica sulle fonti primarie.
                    </p>
                </div>
                <Link
                    href="/moduli/modulo-07-privacy-smartphone"
                    className="px-4 py-2 text-xs font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary-hover transition-colors whitespace-nowrap shadow-sm"
                >
                    Guida alla Privacy Digitale
                </Link>
            </div>

            {/* Comparison Directory Table */}
            <section className="space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground">
                        I principali assistenti AI a confronto
                    </h2>
                    <span className="text-xs text-muted">Aggiornato a novembre 2026</span>
                </div>

                <div className="grid gap-6">
                    {AI_ASSISTANTS.map((ai) => (
                        <article
                            key={ai.name}
                            className="bg-surface border border-border rounded-xl p-6 md:p-8 space-y-4 shadow-sm hover:border-primary/50 transition-all"
                        >
                            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/50 pb-3">
                                <div>
                                    <h3 className="font-display font-semibold text-xl md:text-2xl text-foreground">
                                        {ai.name}
                                    </h3>
                                    <span className="text-xs text-muted">Sviluppato da {ai.company}</span>
                                </div>
                                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-surface-muted border border-border text-foreground">
                                    Ideale per: {ai.bestFor}
                                </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                                <div className="p-4 rounded-lg bg-surface-muted border border-border/40 space-y-1">
                                    <strong className="text-emerald-600 dark:text-emerald-400 font-semibold block">
                                        Cosa include la versione gratuita:
                                    </strong>
                                    <p className="text-secondary leading-relaxed">{ai.freeFeatures}</p>
                                </div>

                                <div className="p-4 rounded-lg bg-surface-muted border border-border/40 space-y-1">
                                    <strong className="text-primary font-semibold block">
                                        Funzionalità a pagamento e limiti:
                                    </strong>
                                    <p className="text-secondary leading-relaxed">{ai.paidFeatures}</p>
                                </div>
                            </div>

                            <div className="p-3.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs text-blue-950 dark:text-blue-100 flex items-start gap-2.5">
                                <Lock className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                                <div>
                                    <strong className="font-semibold text-blue-900 dark:text-blue-200">
                                        Tutela della Privacy e Addestramento:
                                    </strong>
                                    <p className="text-blue-900/80 dark:text-blue-200/80 leading-relaxed mt-0.5">
                                        {ai.privacyPolicy}
                                    </p>
                                </div>
                            </div>

                            <div className="pt-2 flex items-center justify-end">
                                <a
                                    href={ai.officialDocs}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-xs text-muted hover:text-foreground font-mono transition-colors"
                                >
                                    Documentazione ufficiale e privacy policy {ai.company}
                                    <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Practical Use Case Guidelines */}
            <section className="bg-surface border border-border rounded-xl p-6 md:p-8 space-y-6">
                <div>
                    <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground">
                        Come usare l’AI nella vita reale: Esempi pratici
                    </h2>
                    <p className="text-xs md:text-sm text-secondary mt-1">
                        Cosa funziona davvero e quali sono gli errori più comuni in studio, lavoro e sicurezza.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {USE_CASES.map((uc, idx) => {
                        const Icon = uc.icon
                        return (
                            <div
                                key={idx}
                                className="p-5 rounded-xl bg-surface-muted border border-border/50 space-y-3.5"
                            >
                                <div className="flex items-center gap-2.5">
                                    <div className="p-2 rounded-lg bg-surface border border-border text-primary">
                                        <Icon className="w-4 h-4" />
                                    </div>
                                    <h3 className="font-display font-semibold text-base text-foreground">
                                        {uc.title}
                                    </h3>
                                </div>

                                <p className="text-xs text-secondary leading-relaxed">
                                    {uc.summary}
                                </p>

                                <div className="space-y-2 text-xs">
                                    <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-950 dark:text-emerald-100 flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                                        <div>
                                            <strong className="font-semibold block text-emerald-900 dark:text-emerald-200">
                                                Uso consigliato:
                                            </strong>
                                            <span>{uc.goodPractice}</span>
                                        </div>
                                    </div>

                                    <div className="p-2.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-950 dark:text-red-100 flex items-start gap-2">
                                        <XCircle className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                                        <div>
                                            <strong className="font-semibold block text-red-900 dark:text-red-200">
                                                Cosa evitare:
                                            </strong>
                                            <span>{uc.badPractice}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>

            {/* AI Literacy: 4 Checklist items */}
            <section className="bg-surface border border-border rounded-xl p-6 md:p-8 space-y-4">
                <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground">
                    I 4 principi di alfabetizzazione all&apos;Intelligenza Artificiale
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
                    <div className="p-4 rounded-lg bg-surface-muted border border-border/40 space-y-1.5">
                        <strong className="text-foreground font-semibold block text-sm">
                            1. Nessun dato intimo
                        </strong>
                        <p className="text-secondary leading-relaxed">
                            Tratta la finestra di chat dell&apos;AI come una bacheca pubblica: non digitare password, IBAN, dati di salute o nomi di clienti.
                        </p>
                    </div>

                    <div className="p-4 rounded-lg bg-surface-muted border border-border/40 space-y-1.5">
                        <strong className="text-foreground font-semibold block text-sm">
                            2. Chiedi la logica
                        </strong>
                        <p className="text-secondary leading-relaxed">
                            Non limitarti a chiedere il risultato: chiedi all&apos;AI di spiegare i passaggi logici intermedi, in modo da poter verificare ogni presupposto.
                        </p>
                    </div>

                    <div className="p-4 rounded-lg bg-surface-muted border border-border/40 space-y-1.5">
                        <strong className="text-foreground font-semibold block text-sm">
                            3. Controlla le fonti
                        </strong>
                        <p className="text-secondary leading-relaxed">
                            Se l&apos;AI cita una legge, un articolo di cronaca o uno studio accademico, cerca la fonte originale su Google per verificare che esista realmente.
                        </p>
                    </div>

                    <div className="p-4 rounded-lg bg-surface-muted border border-border/40 space-y-1.5">
                        <strong className="text-foreground font-semibold block text-sm">
                            4. Stile autentico
                        </strong>
                        <p className="text-secondary leading-relaxed">
                            L&apos;AI tende a usare frasi stereotipate e aggettivi enfatici. Riscrivi sempre il testo con la tua voce personale prima di inviarlo.
                        </p>
                    </div>
                </div>
            </section>

            {/* Backlinks to Safety */}
            <div className="p-4 rounded-xl border border-border/60 bg-surface-muted flex items-center justify-between flex-wrap gap-3 text-xs text-secondary">
                <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    <span>Per proteggere i tuoi dispositivi da truffe basate su intelligenza artificiale (deepfake e clonazione vocale):</span>
                </div>
                <Link href="/confronti/truffe-come-riconoscerle" className="font-semibold text-primary hover:underline">
                    Consulta la matrice di autodifesa digitale ↗
                </Link>
            </div>
        </div>
    )
}
