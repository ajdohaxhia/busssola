'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Search, Users, Scale, FileText } from 'lucide-react'
import { Container } from '@/components/ui/Container'

export default function MetodoEditorialePage() {
    return (
        <Container size="md" className="py-16 md:py-24 space-y-16 min-h-screen">
            <header className="space-y-6 text-center pb-12 border-b border-border">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 text-primary mb-4 rotate-3">
                    <ShieldCheck size={40} />
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-foreground leading-[1.1]">
                    Metodo Editoriale
                </h1>
                <p className="text-xl text-secondary max-w-2xl mx-auto font-medium leading-relaxed">
                    Come selezioniamo, verifichiamo e aggiorniamo le informazioni che trovi su Busssola per garantirti la massima efficacia e affidabilità.
                </p>
            </header>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-12"
            >
                <div className="prose prose-lg dark:prose-invert max-w-none text-secondary">
                    <p className="lead text-xl text-foreground font-medium">
                        La sicurezza digitale non è un'opinione. Le indicazioni fornite su questa piattaforma seguono un processo di validazione rigoroso e si basano su framework di sicurezza riconosciuti a livello internazionale, adattati per un pubblico non tecnico.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                        <div className="bg-surface border border-border p-8 rounded-[2rem] space-y-4 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                                <Search className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground">1. Ricerca e Fonti Autoritative</h3>
                            <p className="text-secondary leading-relaxed">
                                I nostri moduli si basano su linee guida ufficiali di enti governativi (come la Polizia Postale), framework di cybersecurity (NIST, ENISA) e ricerche accademiche peer-reviewed nel campo della psicologia digitale. Non pubblichiamo contenuti basati su notizie sensazionalistiche.
                            </p>
                        </div>
                        
                        <div className="bg-surface border border-border p-8 rounded-[2rem] space-y-4 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground">2. Semplificazione Didattica</h3>
                            <p className="text-secondary leading-relaxed">
                                L'astrazione tecnica è il più grande ostacolo all'educazione. Traduciamo concetti complessi in un linguaggio accessibile, mantenendo l'accuratezza tecnica. Ogni testo viene letto e validato per assicurarne la comprensione da un pubblico eterogeneo (giovani e adulti).
                            </p>
                        </div>

                        <div className="bg-surface border border-border p-8 rounded-[2rem] space-y-4 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                                <Scale className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground">3. Imparzialità e Indipendenza</h3>
                            <p className="text-secondary leading-relaxed">
                                Busssola non è sponsorizzata da aziende di sicurezza informatica. Quando citiamo strumenti o pratiche, lo facciamo per puro fine educativo e metodologico. Non riceviamo compensi per promuovere software, antivirus o servizi commerciali.
                            </p>
                        </div>

                        <div className="bg-surface border border-border p-8 rounded-[2rem] space-y-4 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                                <FileText className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground">4. Aggiornamento Continuo</h3>
                            <p className="text-secondary leading-relaxed">
                                Il panorama delle minacce digitali cambia ogni giorno. I nostri moduli vengono revisionati regolarmente (ciclo trimestrale) per garantire che le tattiche di difesa consigliate siano efficaci contro gli attacchi più recenti (come i nuovi sviluppi nell'IA generativa).
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-foreground text-background rounded-[2.5rem] p-10 md:p-16 text-center space-y-6 mt-16 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/10" />
                    <div className="relative z-10 space-y-4 max-w-3xl mx-auto">
                        <h2 className="text-3xl font-display font-semibold tracking-tight">Hai trovato un'imprecisione?</h2>
                        <p className="text-background/80 text-lg leading-relaxed">
                            L'errore è umano e la rete cambia in fretta. Se noti un'informazione obsoleta o imprecisa, segnalacelo. La nostra priorità è mantenere questa risorsa quanto più corretta possibile.
                        </p>
                        <div className="pt-4">
                            <a href="/contact" className="inline-block bg-background text-foreground font-semibold px-8 py-4 rounded-xl hover:bg-background/90 transition-colors">
                                Invia una segnalazione editoriale
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Container>
    )
}
