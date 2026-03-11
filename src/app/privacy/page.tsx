'use client'

import { Container } from '@/components/ui/Container'
import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'

export default function PrivacyPage() {
    return (
        <Container size="md" className="py-16 md:py-24 space-y-12 min-h-screen">
            <header className="space-y-6 text-center pb-12 border-b border-border">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 text-primary mb-4">
                    <ShieldCheck size={40} />
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-foreground leading-[1.1]">
                    Privacy Policy
                </h1>
                <p className="text-xl text-secondary max-w-2xl mx-auto font-medium">
                    In breve: quello che succede sul tuo dispositivo, rimane sul tuo dispositivo.
                </p>
            </header>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="prose prose-lg dark:prose-invert max-w-none text-secondary"
            >
                <div className="bg-emerald-50 text-emerald-900 border border-emerald-200 dark:bg-emerald-950/30 dark:border-emerald-900/50 dark:text-emerald-200 p-8 rounded-3xl mb-12 shadow-sm">
                    <h2 className="text-2xl font-bold mb-2">Privacy by Design</h2>
                    <p className="font-medium text-lg leading-relaxed m-0">
                        Busssola è stata progettata dal primo giorno per non raccogliere dati personali. 
                        <strong> Non abbiamo un database centrale, non richiediamo registrazione e non tracciamo le tue abitudini di lettura.</strong>
                    </p>
                </div>

                <div className="space-y-12">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">1. Dati Personali</h2>
                        <p>
                            Busssola <strong>non raccoglie, archivia o elabora alcun dato personale identificabile</strong> degli utenti. Puoi utilizzare l'intera piattaforma in completo anonimato. Non ti chiederemo mai il tuo nome, la tua email (salvo tu non decida di contattarci volontariamente tramite il modulo Contatti) o il tuo numero di telefono.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">2. Progressi Salvati Localmente (Local Storage)</h2>
                        <p>
                            Per permetterti di riprendere la lettura dei moduli da dove ti eri fermato e tenere traccia dei percorsi completati, Busssola salva queste informazioni <strong>esclusivamente all'interno del browser che stai utilizzando (tecnologia Local Storage)</strong>.
                        </p>
                        <p>
                            Questi dati non vengono mai inviati a nessun server. Se cambi dispositivo, browser o svuoti la cache, i tuoi progressi si azzereranno. Abbiamo fatto questa scelta tecnica per darti il 100% del controllo sulle tue informazioni.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">3. Cookie e Tracciamento</h2>
                        <p>
                            Non utilizziamo cookie di profilazione o traccianti pubblicitari di terze parti (come Facebook Pixel, Google Ads, ecc.).
                            Utilizziamo unicamente sistemi di analytics anonimizzati e cookie tecnici strettamente necessari al funzionamento di base del sito web. L'uso della piattaforma non genera un profilo commerciale dell'utente.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">4. Modulo Contatti</h2>
                        <p>
                            Se decidi di contattarci tramite la pagina Contatti o via email, utilizzeremo le informazioni fornite (nome, email del mittente) esclusivamente per rispondere alla tua richiesta. Questi dati non verranno ceduti a terzi né inseriti in mailing list.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">5. Minori</h2>
                        <p>
                            Tutti i contenuti di Busssola sono adatti a minori, ma non raccogliendo dati anagrafici, non ci sono vincoli legati al trattamento dati under-14 o under-16. L'anonimato protegge l'utente a prescindere dall'età.
                        </p>
                    </section>
                </div>
            </motion.div>
        </Container>
    )
}
