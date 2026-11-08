import Link from 'next/link'
import {
    Calculator,
    Gift,
    Search,
    Zap,
    ArrowRight,
    Lock,
    Sparkles,
} from 'lucide-react'
import { PageHeader } from '@/components/ui/PageHeader'
import { JsonLd } from '@/components/seo/JsonLd'
import { absoluteUrl } from '@/lib/seo-core'

const TOOLS = [
    {
        id: 'calcolo-stipendio-netto',
        title: 'Calcolatore Stipendio Netto da RAL',
        category: 'Lavoro e Fisco',
        badge: 'Aggiornato 3 Aliquote IRPEF',
        icon: Calculator,
        time: '1 minuto',
        summary: 'Inserisci la tua Retribuzione Annua Lorda (RAL) e ottieni una simulazione trasparente del netto mensile (su 13 o 14 mensilità) e annuo. Include contributi IVS 9,19%, aliquote IRPEF a 3 scaglioni, detrazioni da lavoro dipendente e addizionali stimate.',
        href: '/tool/calcolo-stipendio-netto',
    },
    {
        id: 'trova-bonus',
        title: 'Trova le tue Agevolazioni e Bonus',
        category: 'Famiglia e Sostegni',
        badge: 'Questionario Interattivo',
        icon: Gift,
        time: '2 minuti',
        summary: 'Rispondi a 5 domande sul tuo nucleo familiare, fascia ISEE e situazione lavorativa. Lo strumento incrocia i criteri normativi ufficiali e ti mostra i sostegni a cui potresti avere diritto (Assegno Unico, Carta Dedicata a Te, ADI, bonus asilo nido, sconti bollette).',
        href: '/tool/trova-bonus',
    },
    {
        id: 'trova-procedura',
        title: 'Trova la Procedura Ufficiale',
        category: 'Documenti e Procedure',
        badge: 'Orientamento Rapido',
        icon: Search,
        time: '30 secondi',
        summary: 'Hai perso la carta d’identità, devi chiedere la NASpI, dare le dimissioni o cambiare residenza? Trova all’istante il primo passo concreto da fare, la lista esatta dei documenti necessari, il portale pubblico .gov.it corretto e le alternative per non fare code.',
        href: '/tool/trova-procedura',
    },
    {
        id: 'calcolo-consumo-elettrico',
        title: 'Calcolo Consumo Elettrico Elettrodomestici',
        category: 'Casa ed Energia',
        badge: 'Stima Bolletta ARERA',
        icon: Zap,
        time: '1 minuto',
        summary: 'Quanto consuma davvero il condizionatore in estate, la lavatrice o il boiler elettrico? Seleziona gli elettrodomestici, imposta le ore di utilizzo quotidiane e calcola la spesa reale in kWh ed euro mensili/annuali con i consigli di risparmio ENEA.',
        href: '/tool/calcolo-consumo-elettrico',
    },
]

export default function ToolDirectoryPage() {
    const collectionSchema = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Strumenti e Calcolatori Civici Gratuiti - Busssola',
        description: 'Directory di simulatori e strumenti pratici indipendenti per cittadini: stipendio netto da RAL, questionario agevolazioni ISEE, motore procedure e consumi elettrici.',
        url: absoluteUrl('/tool/'),
        hasPart: TOOLS.map((t) => ({
            '@type': 'SoftwareApplication',
            name: t.title,
            description: t.summary,
            url: absoluteUrl(t.href),
            applicationCategory: 'UtilityApplication',
            operatingSystem: 'All',
        })),
    }

    return (
        <div className="space-y-10 py-8">
            <JsonLd data={collectionSchema} />

            <PageHeader
                badge="Strumenti Civici Gratuiti"
                icon={Calculator}
                title="Simulatori e Strumenti Decisionali"
                description="Calcolatori indipendenti e pratici per risolvere dubbi burocratici, economici e di gestione quotidiana. Nessun dato personale viene registrato: ogni calcolo viene eseguito al 100% in locale nel tuo browser."
            />

            {/* Privacy and Local execution guarantee */}
            <div className="p-4 rounded-xl border border-border/60 bg-surface flex items-start md:items-center gap-3 text-xs md:text-sm text-secondary">
                <Lock className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5 md:mt-0" />
                <div>
                    <strong className="text-foreground font-semibold">Privacy totale garantita: </strong>
                    <span>
                        Nessun dato inserito (stipendio, ISEE, composizione familiare o abitudini di consumo) viene salvato su server o condiviso con terzi. Tutte le operazioni rimangono esclusivamente sul tuo dispositivo.
                    </span>
                </div>
            </div>

            {/* Tools Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {TOOLS.map((t) => {
                    const Icon = t.icon
                    return (
                        <article
                            key={t.id}
                            className="bg-surface border border-border rounded-xl p-6 md:p-8 flex flex-col justify-between hover:border-primary/60 transition-all shadow-sm hover:shadow-md group"
                        >
                            <div className="space-y-4">
                                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/50 pb-3">
                                    <div className="flex items-center gap-2">
                                        <div className="p-2 rounded-lg bg-surface-muted border border-border/60 text-primary">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-surface-muted text-secondary border border-border">
                                            {t.category}
                                        </span>
                                    </div>
                                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/20">
                                        {t.badge}
                                    </span>
                                </div>

                                <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                                    {t.title}
                                </h2>

                                <p className="text-xs md:text-sm text-secondary leading-relaxed">
                                    {t.summary}
                                </p>
                            </div>

                            <div className="pt-6 mt-6 border-t border-border/40 flex items-center justify-between">
                                <span className="text-xs text-muted">Tempo stimato: {t.time}</span>
                                <Link
                                    href={t.href}
                                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary-hover transition-colors shadow-sm"
                                >
                                    Apri strumento
                                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                            </div>
                        </article>
                    )
                })}
            </div>

            {/* Methodological Box */}
            <div className="p-6 rounded-xl bg-surface border border-border space-y-3">
                <div className="flex items-center gap-2 text-foreground font-semibold text-base">
                    <Sparkles className="w-5 h-5 text-accent" />
                    <h3>Come sono progettati gli strumenti di Busssola</h3>
                </div>
                <p className="text-xs md:text-sm text-secondary leading-relaxed">
                    Tutti i motori di calcolo integrano normative ufficiali: le formule fiscali applicano l’art. 13 del TUIR e gli scaglioni IRPEF vigenti, le soglie ISEE fanno riferimento ai decreti INPS e MASAF, e i consumi energetici si basano sui dati medi pubblicati da ENEA e ARERA. Non ci sono algoritmi opachi né stime arbitrarie.
                </p>
                <div className="pt-2 flex items-center gap-4 text-xs">
                    <Link href="/metodo-editoriale" className="font-semibold text-primary hover:underline">
                        Metodo editoriale e scientifico ↗
                    </Link>
                    <Link href="/fonti" className="text-muted hover:text-foreground">
                        Elenco fonti istituzionali ↗
                    </Link>
                </div>
            </div>
        </div>
    )
}
