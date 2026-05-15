'use client'

import { GraduationCap, Users, Presentation, CheckCircle2, FileText, Printer, ArrowRight, ShieldAlert, Clock } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { PageHeader } from '@/components/ui/PageHeader'

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
            <PageHeader 
                centered
                badge="Hub per Docenti ed Educatori"
                icon={GraduationCap}
                title="Porta la consapevolezza in classe, subito."
                description="Busssola fornisce materiali didattici gratuiti, aperti e pronti all'uso. Ottimizzati per docenti, studenti e famiglie per l'educazione civica digitale."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-y border-border py-12">
                <div className="text-center space-y-2">
                    <div className="text-3xl font-black text-foreground uppercase tracking-tighter">100% Gratis</div>
                    <p className="text-sm text-secondary font-black uppercase tracking-widest opacity-40">Risorsa Pubblica</p>
                </div>
                <div className="text-center space-y-2 border-x border-border/60 px-8">
                    <div className="text-3xl font-black text-foreground uppercase tracking-tighter">LIM Ready</div>
                    <p className="text-sm text-secondary font-black uppercase tracking-widest opacity-40">Per Proiezione</p>
                </div>
                <div className="text-center space-y-2">
                    <div className="text-3xl font-black text-foreground uppercase tracking-tighter">Zero Login</div>
                    <p className="text-sm text-secondary font-black uppercase tracking-widest opacity-40">Massima Privacy</p>
                </div>
            </div>

            <section id="materiali" className="space-y-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-3 text-left">
                        <h2 className="text-3xl font-display font-black text-foreground tracking-tight uppercase tracking-tighter">Materiali pronti</h2>
                        <p className="text-lg text-secondary font-medium max-w-xl">
                            Piani di lezione completi. Clicca per aprire il modulo o stampa la versione offline.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {LESSON_PLANS.map((lesson, i) => (
                        <Card key={i} className="p-8 border-2 border-border bg-surface flex flex-col hover:shadow-2xl transition-all rounded-[3rem] group">
                            <div className="space-y-6 flex-1 text-left">
                                <div className="flex justify-between items-start">
                                    <Badge variant="secondary" className="bg-primary/5 text-primary border-primary/10 uppercase tracking-widest text-[9px] font-black">{lesson.type}</Badge>
                                    <span className="text-[10px] font-black text-secondary/40 uppercase flex items-center gap-1 tracking-widest">
                                        <Clock className="w-3 h-3" /> {lesson.duration}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-display font-black text-foreground leading-tight group-hover:text-primary transition-colors tracking-tight">{lesson.title}</h3>
                                <ul className="space-y-4 pt-2 m-0 p-0 list-none">
                                    {lesson.objectives.map((obj, j) => (
                                        <li key={j} className="flex gap-3 text-sm text-secondary leading-relaxed font-medium">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> {obj}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="pt-10 flex gap-2">
                                <Button asChild variant="outline" className="rounded-xl flex-1 font-black uppercase tracking-widest h-12 border-border group-hover:border-primary/30">
                                    <Link href={lesson.moduleLink}>Apri</Link>
                                </Button>
                                <Button variant="ghost" size="icon" className="w-12 h-12 rounded-xl border border-border group-hover:bg-primary/5" onClick={() => window.print()}>
                                    <Printer className="w-5 h-5 text-secondary" />
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            <section className="bg-surface border-2 border-border rounded-[4rem] p-10 md:p-20 space-y-16 relative overflow-hidden shadow-sm">
                <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none">
                    <FileText size={400} />
                </div>
                
                <div className="text-center space-y-4 relative z-10">
                    <h2 className="text-4xl font-display font-black text-foreground tracking-tight uppercase tracking-tighter">Protocolli</h2>
                    <p className="text-lg text-secondary max-w-2xl mx-auto font-medium">
                        Risorse strutturate per gestire casi critici e dinamiche digitali in classe.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 max-w-5xl mx-auto">
                    {TEACHER_TOOLS.map((item, i) => (
                        <Link href={item.link} key={i} className="group">
                            <div className="p-8 bg-background rounded-[2.5rem] border-2 border-border hover:border-primary/40 space-y-6 transition-all group-hover:shadow-2xl group-hover:-translate-y-1 h-full flex flex-col text-left">
                                <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center transition-all group-hover:scale-110 shadow-lg shadow-primary/20">
                                    <item.icon className="w-7 h-7" strokeWidth={2.5} />
                                </div>
                                <div className="space-y-2 flex-1">
                                    <h4 className="text-2xl font-display font-black text-foreground group-hover:text-primary transition-colors tracking-tight">{item.title}</h4>
                                    <p className="text-base text-secondary leading-relaxed font-medium">{item.desc}</p>
                                </div>
                                <div className="pt-4 flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-[0.2em]">
                                    Vedi Risorsa <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="text-center space-y-10 max-w-3xl mx-auto pb-12">
                <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto shadow-inner border border-emerald-100">
                    <Printer size={40} />
                </div>
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-5xl font-display font-black text-foreground tracking-tight leading-tight">Ottimizzato per la stampa</h2>
                    <p className="text-xl text-secondary leading-relaxed font-medium">
                        Ogni guida e checklist è pronta per essere stampata in bianco e nero (Ctrl+P) in formato leggibile. Ideale per aule senza connessione o da consegnare alle famiglie.
                    </p>
                </div>
            </section>
        </Container>
    )
}
