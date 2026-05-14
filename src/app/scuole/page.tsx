'use client'

import { GraduationCap, Users, Presentation, CheckCircle2, FileText, ShieldCheck, Printer, ArrowRight, ShieldAlert, Clock } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

const LESSON_PLANS = [
    {
        title: "Phishing & Truffe",
        duration: "45 min",
        target: "Scuola Secondaria",
        objectives: ["Riconoscere SMS e email false", "Capire come funzionano i link truffa", "Cosa fare se si inseriscono i dati"],
        moduleLink: "/moduli/modulo-03-truffe-phishing",
        type: "Lezione Teorica"
    },
    {
        title: "Cyberbullismo",
        duration: "45 min",
        target: "Scuola Secondaria",
        objectives: ["Differenza tra scherzo e reato", "Tutele legali e segnalazioni", "Ruolo degli spettatori attivi"],
        moduleLink: "/moduli/modulo-06-stalking-doxxing",
        type: "Discussione Guidata"
    },
    {
        title: "Privacy Smartphone",
        duration: "60 min",
        target: "Laboratorio Pratico",
        objectives: ["Controllare permessi app", "Blindare account Google/Apple", "Attivare 2FA in classe"],
        moduleLink: "/moduli/modulo-07-privacy-smartphone",
        type: "Laboratorio"
    },
    {
        title: "Account Sicuri",
        duration: "45 min",
        target: "Tutti i gradi",
        objectives: ["Creare password robuste", "Usare Password Manager", "Importanza delle Passkey"],
        moduleLink: "/moduli/modulo-02-account-security",
        type: "Laboratorio"
    },
    {
        title: "Social & Relazioni",
        duration: "45 min",
        target: "Secondaria II Grado",
        objectives: ["Rischi del grooming", "Sextortion e tutele", "Sharenting e consenso"],
        moduleLink: "/moduli/modulo-16-famiglia-minori",
        type: "Lezione Teorica"
    },
    {
        title: "Cittadinanza Digitale",
        duration: "60 min",
        target: "Secondaria I Grado",
        objectives: ["Diritti e doveri online", "Uso critico delle fonti", "Burocrazia digitale (SPID/CIE)"],
        moduleLink: "/moduli/modulo-09-documenti-identita",
        type: "Percorso Civico"
    }
]

const TEACHER_TOOLS = [
    { 
        title: "Checklist Docente: Prime 24h", 
        desc: "Protocollo operativo per gestire una segnalazione di bullismo o sextortion.", 
        icon: FileText,
        link: "/checklist" 
    },
    { 
        title: "Patto Digitale di Famiglia", 
        desc: "Documento da consegnare alle famiglie per un uso consapevole del web.", 
        icon: Users,
        link: "/moduli/modulo-08-scuola-famiglia" 
    },
    { 
        title: "Scheda Genitori: Cyber-rischi", 
        desc: "Sintesi dei segnali di allarme per genitori non esperti di tecnologia.", 
        icon: ShieldAlert,
        link: "/moduli/modulo-05-grooming-minori" 
    },
    { 
        title: "Modalità 'Proietta in classe'", 
        desc: "Tutte le guide sono ottimizzate per la lettura collettiva su LIM.", 
        icon: Presentation,
        link: "/moduli" 
    }
]

export default function ScuolePage() {
    return (
        <Container size="lg" className="py-12 space-y-24">
            {/* Hero Section */}
            <header className="text-center space-y-8 max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[11px] font-bold tracking-widest mb-2 uppercase border border-primary/20">
                    <GraduationCap className="w-4 h-4" /> Portale Educazione Civica Digitale
                </div>
                <h1 className="text-4xl md:text-7xl font-display font-bold text-foreground tracking-tight leading-[1.1]">
                    Porta la consapevolezza <br className="hidden md:block" /> in classe, subito.
                </h1>
                <p className="text-xl text-secondary leading-relaxed max-w-2xl mx-auto">
                    Busssola fornisce materiali didattici gratuiti, aperti e pronti all'uso. Senza registrazione, senza costi, ottimizzati per docenti, studenti e famiglie.
                </p>
                <div className="pt-4 flex flex-wrap justify-center gap-4">
                    <Button asChild size="lg" className="h-14 px-10 rounded-2xl font-bold shadow-xl shadow-primary/20">
                        <Link href="#materiali">Sfoglia materiali pronti</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="h-14 px-10 rounded-2xl font-bold bg-surface">
                        <Link href="mailto:scuole@busssola.com">Contatta Hub Scuole</Link>
                    </Button>
                </div>
            </header>

            {/* Quick Stats/Value Prop */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-y border-border py-12">
                <div className="text-center space-y-2">
                    <div className="text-3xl font-black text-foreground">100% Gratis</div>
                    <p className="text-sm text-secondary font-medium uppercase tracking-wider">Risorsa Pubblica Aperta</p>
                </div>
                <div className="text-center space-y-2 border-x border-border/60 px-8">
                    <div className="text-3xl font-black text-foreground">LIM Ready</div>
                    <p className="text-sm text-secondary font-medium uppercase tracking-wider">Ottimizzato per proiezioni</p>
                </div>
                <div className="text-center space-y-2">
                    <div className="text-3xl font-black text-foreground">Zero Login</div>
                    <p className="text-sm text-secondary font-medium uppercase tracking-wider">Massima Privacy Studenti</p>
                </div>
            </div>

            {/* Materials Hub */}
            <section id="materiali" className="space-y-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-3">
                        <h2 className="text-3xl font-display font-bold text-foreground tracking-tight">Materiali pronti all'uso</h2>
                        <p className="text-secondary max-w-xl leading-relaxed">
                            Ogni card rappresenta un piano di lezione completo. Clicca per aprire il modulo di riferimento o scarica la versione stampabile.
                        </p>
                    </div>
                    <Badge variant="outline" className="h-8 px-4 font-bold border-primary/20 text-primary bg-primary/5">
                        {LESSON_PLANS.length} Lezioni Disponibili
                    </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {LESSON_PLANS.map((lesson, i) => (
                        <Card key={i} className="p-8 border border-border bg-surface flex flex-col hover:shadow-2xl transition-all rounded-[2.5rem] group">
                            <div className="space-y-5 flex-1">
                                <div className="flex justify-between items-start">
                                    <Badge variant="secondary" className="bg-primary/5 text-primary border-primary/10 uppercase tracking-widest text-[9px] font-bold">{lesson.type}</Badge>
                                    <span className="text-[10px] font-bold text-secondary uppercase flex items-center gap-1">
                                        <Clock className="w-3 h-3" /> {lesson.duration}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-display font-bold text-foreground leading-tight group-hover:text-primary transition-colors">{lesson.title}</h3>
                                <div className="text-xs font-bold text-secondary/60 uppercase tracking-wider mb-2">{lesson.target}</div>
                                <ul className="space-y-3 pt-2 m-0 p-0 list-none">
                                    {lesson.objectives.map((obj, j) => (
                                        <li key={j} className="flex gap-3 text-sm text-secondary leading-relaxed font-medium">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> {obj}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="pt-8 flex gap-2">
                                <Button asChild variant="outline" className="rounded-xl flex-1 font-bold h-12 border-border group-hover:border-primary/30">
                                    <Link href={lesson.moduleLink}>Apri Modulo</Link>
                                </Button>
                                <Button variant="ghost" size="icon" className="w-12 h-12 rounded-xl border border-border group-hover:bg-primary/5" onClick={() => window.print()}>
                                    <Printer className="w-5 h-5 text-secondary" />
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Teacher Protocols */}
            <section className="bg-surface border border-border rounded-[3.5rem] p-10 md:p-16 space-y-16 relative overflow-hidden shadow-sm">
                <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
                    <FileText size={300} />
                </div>
                
                <div className="text-center space-y-4 relative z-10">
                    <h2 className="text-4xl font-display font-bold text-foreground tracking-tight">Protocolli e Strumenti</h2>
                    <p className="text-secondary max-w-2xl mx-auto leading-relaxed font-medium">
                        Risorse strutturate per aiutare i docenti nella gestione quotidiana delle dinamiche digitali e dei casi critici.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 max-w-5xl mx-auto">
                    {TEACHER_TOOLS.map((item, i) => (
                        <Link href={item.link} key={i} className="group">
                            <div className="p-8 bg-background rounded-3xl border border-border/60 space-y-5 transition-all group-hover:shadow-xl group-hover:border-primary/20 h-full flex flex-col">
                                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div className="space-y-2 flex-1">
                                    <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors tracking-tight">{item.title}</h4>
                                    <p className="text-sm text-secondary leading-relaxed font-medium">{item.desc}</p>
                                </div>
                                <div className="pt-4 flex items-center gap-2 text-xs font-black text-primary uppercase tracking-widest">
                                    Vedi Risorsa <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Educational Note */}
            <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-foreground text-background p-10 md:p-16 rounded-[3.5rem] relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
                <div className="space-y-6 relative z-10">
                    <h2 className="text-3xl font-display font-bold text-white leading-tight">Nota per i docenti sui casi sensibili</h2>
                    <p className="text-white/70 text-lg leading-relaxed font-medium italic">
                        "Se uno studente segnala un reato (cyberbullismo grave, sextortion, grooming), mantieni la calma e documenta senza cancellare. In caso di reati a sfondo sessuale o minacce fisiche, contatta immediatamente il 112 o il 114."
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <Badge variant="outline" className="border-white/20 text-white font-bold uppercase tracking-widest">Procedura Legge 71/2017</Badge>
                        <Badge variant="outline" className="border-white/20 text-white font-bold uppercase tracking-widest">Referente Bullismo</Badge>
                    </div>
                </div>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] space-y-6 relative z-10">
                    <div className="flex items-center gap-4 text-white">
                        <ShieldCheck className="w-8 h-8 text-primary" />
                        <span className="font-bold text-xl">Busssola Scuole Hub</span>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed">
                        Forniamo consulenza gratuita per l'adozione dei materiali nelle scuole e associazioni. Scrivici per ricevere il kit completo di slide e verifiche.
                    </p>
                    <Button asChild className="w-full rounded-xl bg-white text-foreground hover:bg-white/90 font-bold h-12">
                        <Link href="mailto:scuole@busssola.com">scuole@busssola.com</Link>
                    </Button>
                </div>
            </section>

            {/* Print Layout CTA */}
            <section className="text-center space-y-8 max-w-2xl mx-auto pb-12">
                <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto shadow-inner border border-emerald-100/50">
                    <Printer size={40} />
                </div>
                <div className="space-y-4">
                    <h2 className="text-3xl font-display font-bold text-foreground tracking-tight leading-tight">Ottimizzato per la stampa</h2>
                    <p className="text-secondary text-lg leading-relaxed font-medium">
                        Sappiamo che non tutte le aule hanno una connessione stabile. Ogni guida e checklist su Busssola è ottimizzata (Ctrl+P) per essere stampata in un formato leggibile e pulito. Puoi usarle come schede di lavoro o materiale di supporto per le famiglie.
                    </p>
                </div>
            </section>
        </Container>
    )
}
