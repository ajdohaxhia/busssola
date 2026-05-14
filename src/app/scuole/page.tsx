'use client'

import { GraduationCap, Users, Presentation, CheckCircle2, FileText, ShieldCheck, Printer } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

const LESSON_PLANS = [
    {
        title: "Lezione 1: Phishing & Truffe (45 min)",
        target: "Scuola Secondaria",
        duration: "45 minuti",
        objectives: ["Riconoscere SMS e email false", "Capire come funzionano i link truffa", "Cosa fare se si inseriscono i dati"],
        moduleLink: "/moduli/modulo-03-truffe-phishing"
    },
    {
        title: "Lezione 2: Cyberbullismo (45 min)",
        target: "Scuola Secondaria",
        duration: "45 minuti",
        objectives: ["Differenza tra scherzo e reato", "Tutele legali e segnalazioni", "Ruolo degli spettatori attivi"],
        moduleLink: "/moduli/modulo-06-stalking-doxxing"
    },
    {
        title: "Laboratorio: Privacy Smartphone (60 min)",
        target: "Laboratorio pratico",
        duration: "60 minuti",
        objectives: ["Controllare permessi app", "Blindare account Google/Apple", "Attivare 2FA in classe"],
        moduleLink: "/moduli/modulo-07-privacy-smartphone"
    }
]

export default function ScuolePage() {
    return (
        <Container size="md" className="py-16 space-y-24">
            {/* Hero */}
            <header className="text-center space-y-6 max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest mb-2 uppercase border border-primary/20">
                    <GraduationCap className="w-4 h-4" /> Risorse per Docenti
                </div>
                <h1 className="text-4xl md:text-6xl font-display font-semibold text-foreground tracking-tight leading-tight">
                    Materiale didattico pronto per la classe.
                </h1>
                <p className="text-xl text-secondary leading-relaxed">
                    Busssola non è solo un sito, è uno strumento per l'educazione civica digitale. Risorse gratuite, senza registrazione, ottimizzate per la LIM e la stampa.
                </p>
                <div className="pt-4 flex flex-wrap justify-center gap-4">
                    <Button asChild size="lg" className="h-14 px-8 rounded-xl font-bold">
                        <Link href="#lezioni">Sfoglia lezioni pronte</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="h-14 px-8 rounded-xl font-bold">
                        <Link href="/contact">Richiedi kit completo</Link>
                    </Button>
                </div>
            </header>

            {/* Ready Lessons Section */}
            <section id="lezioni" className="space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-display font-bold text-foreground">Lezioni da 45 minuti</h2>
                    <p className="text-secondary">Piani di lezione strutturati per coprire un'ora scolastica, usando i moduli di Busssola come base.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {LESSON_PLANS.map((lesson, i) => (
                        <Card key={i} className="p-8 border border-border bg-surface flex flex-col hover:border-primary/20 transition-all rounded-[2rem]">
                            <div className="space-y-4 flex-1">
                                <Badge variant="secondary" className="bg-primary/5 text-primary border-primary/10 uppercase tracking-widest text-[9px]">{lesson.target}</Badge>
                                <h3 className="text-xl font-bold text-foreground leading-tight">{lesson.title}</h3>
                                <ul className="space-y-3 pt-2">
                                    {lesson.objectives.map((obj, j) => (
                                        <li key={j} className="flex gap-2 text-sm text-secondary leading-relaxed">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> {obj}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <Button asChild variant="outline" className="mt-8 rounded-xl w-full">
                                <Link href={lesson.moduleLink}>Apri Modulo <ArrowRight className="w-4 h-4 ml-2" /></Link>
                            </Button>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Teachers Materials */}
            <section className="bg-surface border border-border rounded-[3rem] p-8 md:p-12 space-y-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
                    <FileText size={200} />
                </div>
                <div className="max-w-3xl mx-auto space-y-10 relative z-10">
                    <h2 className="text-3xl font-display font-bold text-foreground text-center">Strumenti per il docente</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { title: "Checklist Docente: Prime 24h", desc: "Cosa fare se uno studente segnala una sextortion o un furto d'identità.", icon: FileText },
                            { title: "Patto Digitale di Famiglia", desc: "Scheda da consegnare ai genitori per gestire l'uso dello smartphone a casa.", icon: Users },
                            { title: "Scheda Genitori: Cyber-rischi", desc: "Sintesi veloce per spiegare i pericoli reali ai non esperti.", icon: ShieldCheck },
                            { title: "Modalità 'Proietta in classe'", desc: "Tutte le guide sono ottimizzate per la lettura su grandi schermi e LIM.", icon: Presentation },
                        ].map((item, i) => (
                            <div key={i} className="p-6 bg-background rounded-2xl border border-border/60 space-y-3">
                                <item.icon className="w-6 h-6 text-primary" />
                                <h4 className="font-bold text-foreground">{item.title}</h4>
                                <p className="text-sm text-secondary leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Print Friendly Callout */}
            <section className="text-center space-y-8 max-w-2xl mx-auto">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto">
                    <Printer size={32} />
                </div>
                <div className="space-y-4">
                    <h2 className="text-3xl font-display font-bold text-foreground">Layout Print-Friendly</h2>
                    <p className="text-secondary text-lg">
                        Ogni lezione su Busssola può essere stampata (Ctrl+P) in un formato pulito. Puoi stampare le checklist o le sintesi operative e consegnarle come materiale di studio o di supporto per le famiglie.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <div className="bg-foreground text-white p-12 rounded-[3rem] text-center space-y-8 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
                <div className="relative z-10 space-y-4">
                    <h3 className="text-3xl font-display font-bold">Invia il tuo feedback</h3>
                    <p className="text-white/70 max-w-xl mx-auto text-lg leading-relaxed">
                        Sei un docente e hai usato Busssola in classe? Facci sapere com'è andata o suggerisci nuovi materiali didattici.
                    </p>
                </div>
                <Button asChild size="lg" className="h-14 px-12 rounded-xl font-bold bg-white text-foreground hover:bg-white/90 relative z-10">
                    <Link href="mailto:scuole@busssola.com">scuole@busssola.com</Link>
                </Button>
            </div>
        </Container>
    )
}

import { ArrowRight } from 'lucide-react'
