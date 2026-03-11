'use client'

import { Container } from '@/components/ui/Container'
import { motion } from 'framer-motion'
import { Eye, Code, Heart, DollarSign } from 'lucide-react'

export default function TrasparenzaPage() {
    return (
        <Container size="md" className="py-16 md:py-24 space-y-16 min-h-screen">
            <header className="space-y-6 text-center pb-12 border-b border-border">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 text-primary mb-4 p-5">
                    <Eye size={40} className="w-full h-full" />
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-foreground leading-[1.1]">
                    Trasparenza Totale
                </h1>
                <p className="text-xl text-secondary max-w-2xl mx-auto font-medium">
                    Chi siamo, chi ci finanzia e come costruiamo questa piattaforma. Nessun segreto.
                </p>
            </header>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-12"
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-surface p-8 rounded-[2rem] border border-border space-y-4 shadow-sm">
                        <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                            <DollarSign className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-xl text-foreground">Modello di Business</h3>
                        <p className="text-secondary leading-relaxed">
                            Busssola è autosostenuta e gratuita. Nessun paywall, nessuna pubblicità ("No Ads"), nessuna vendita di dati, nessun abbonamento "Premium" per sbloccare la sicurezza.
                        </p>
                    </div>

                    <div className="bg-surface p-8 rounded-[2rem] border border-border space-y-4 shadow-sm">
                        <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                            <Heart className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-xl text-foreground">Sponsor & Vendor</h3>
                        <p className="text-secondary leading-relaxed">
                            Siamo indipendenti. Non riceviamo fondi da aziende di sicurezza informatica. Qualsiasi brand menzionato lo è unicamente in ottica imparziale se rappresenta uno standard di settore.
                        </p>
                    </div>

                    <div className="bg-surface p-8 rounded-[2rem] border border-border space-y-4 shadow-sm">
                        <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                            <Code className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-xl text-foreground">La Piattaforma</h3>
                        <p className="text-secondary leading-relaxed">
                            Costruita e gestita da un piccolo team di esperti, sviluppatori ed educatori italiani con il solo obiettivo di migliorare l'educazione civica digitale nel nostro Paese.
                        </p>
                    </div>
                </div>

                <div className="mt-16 bg-surface-muted border border-border rounded-[2.5rem] p-10 md:p-16">
                    <h2 className="text-3xl font-display font-semibold text-foreground tracking-tight mb-6">Perché lo facciamo?</h2>
                    <div className="prose prose-lg dark:prose-invert max-w-none text-secondary">
                        <p className="leading-relaxed font-medium">
                            La maggior parte delle risorse e dei corsi di sicurezza informatica in lingua italiana è costosa o inutilmente complessa per un cittadino comune o uno studente. Quando succede un'emergenza (una foto rubata, una truffa), trovare istruzioni chiare tra centinaia di articoli in "avvocatese" o scritti per SEO è impossibile.
                        </p>
                        <p className="leading-relaxed font-medium">
                            Busssola serve a questo: azzerare il debito tecnologico e fornire indicazioni di sicurezza immediatamente difensive, con un'interfaccia calma che rispetti lo stress dell'utente.
                        </p>
                    </div>
                </div>
            </motion.div>
        </Container>
    )
}
