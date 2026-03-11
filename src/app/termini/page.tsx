'use client'

import { Container } from '@/components/ui/Container'
import { motion } from 'framer-motion'
import { Scale } from 'lucide-react'

export default function TermsPage() {
    return (
        <Container size="md" className="py-16 md:py-24 space-y-12 min-h-screen">
            <header className="space-y-6 text-center pb-12 border-b border-border">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 text-primary mb-4 p-5">
                    <Scale size={40} className="w-full h-full" />
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-foreground leading-[1.1]">
                    Termini d'Uso
                </h1>
                <p className="text-xl text-secondary max-w-2xl mx-auto font-medium">
                    Le regole e le limitazioni riguardanti l'utilizzo del materiale presente su Busssola.
                </p>
            </header>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="prose prose-lg dark:prose-invert max-w-none text-secondary"
            >
                <div className="space-y-12">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">1. Natura Educativa del Piattaforma</h2>
                        <p>
                            Busssola è un progetto a <strong>puro scopo educativo e informativo</strong>. I materiali in esso contenuti non costituiscono in alcun modo consulenza legale, psicologica o investigativa professionale.
                        </p>
                        <p>
                            In caso di pericolo imminente, frodi in corso o situazioni critiche, l'utente è tenuto a <strong>contattare immediatamente le Forze dell'Ordine o i numeri di emergenza competenti (Es. 112)</strong>. Gli autori della piattaforma non si assumono la responsabilità circa l'esito delle situazioni segnalate nell'area SOS.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">2. Utilizzo e Limitazione di Responsabilità</h2>
                        <p>
                            Le pratiche di sicurezza informatica descritte rappresentano buone norme generali. Tuttavia, nessun sistema al mondo è sicuro al 100%. Applicare i consigli di Busssola riduce notevolmente il rischio, ma <strong>non garantisce l'immunità</strong> da attacchi informatici avanzati, furti di dati o raggiri.
                        </p>
                        <p>
                            Busssola declina ogni responsabilità per danni diretti, indiretti o consequenziali derivanti dall'utilizzo (o dall'errata interpretazione) delle informazioni qui presenti.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">3. Utilizzo a Scopo Didattico</h2>
                        <p>
                            Incoraggiamo l'uso di Busssola all'interno di scuole, associazioni, oratori e contesti formativi. <strong>Il materiale è gratuito e accessibile a tutti.</strong> È consentito proiettare i moduli in classe o usarli come base per proprie lezioni.
                        </p>
                        <p>
                            Non è tuttavia consentito copiare, replicare su altri siti, o <strong>vendere</strong> il contenuto di Busssola senza autorizzazione esplicita.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">4. Link Esterni</h2>
                        <p>
                            La piattaforma contiene URL e link verso siti esterni (come il sito della Polizia Postale o altri servizi terzi). Non abbiamo controllo su queste pagine esterne, e i link vi sono inseriti a mero scopo di pubblica utilità.
                        </p>
                    </section>
                </div>
            </motion.div>
        </Container>
    )
}
