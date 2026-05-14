'use client'

import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const FAQS = [
    {
        q: "Busssola è un ente pubblico o governativo?",
        a: "No. Busssola è un progetto civico indipendente e open-source. Non siamo affiliati ad alcun ministero o ente pubblico, ma utilizziamo esclusivamente fonti ufficiali (come INPS, AgID, Polizia Postale) per garantire l'accuratezza delle informazioni."
    },
    {
        q: "Le guide hanno valore legale?",
        a: "No. Le informazioni fornite hanno scopo puramente informativo e di orientamento pratico. Non sostituiscono i testi di legge, né i siti ufficiali degli enti competenti che hanno sempre valore legale prevalente."
    },
    {
        q: "Busssola è davvero gratuito?",
        a: "Sì, totalmente. Non ci sono costi, non ci sono versioni 'premium', non vendiamo corsi e non mostriamo pubblicità. È un servizio offerto alla collettività."
    },
    {
        q: "Come vengono aggiornate le fonti?",
        a: "Ogni guida viene revisionata periodicamente. Ciascuna scheda riporta la data dell'ultima revisione e il link diretto alla fonte ufficiale utilizzata. Se noti un'inesattezza, puoi segnalarla subito."
    },
    {
        q: "Salvate i miei dati personali?",
        a: "No. Busssola non richiede registrazione né login. Non usiamo cookie di profilazione e non raccogliamo i tuoi dati di navigazione. Tutto quello che fai (come i progressi nelle lezioni) resta salvato esclusivamente sul tuo dispositivo (Local Storage)."
    },
    {
        q: "Posso usare Busssola a scuola?",
        a: "Assolutamente sì. Busssola è pensata per essere una risorsa per docenti ed educatori. Puoi proiettare le guide in classe o usarle come base per laboratori di cittadinanza digitale."
    },
    {
        q: "Posso stampare le guide?",
        a: "Sì. Il sito è ottimizzato per la stampa (Ctrl+P o Cmd+P). Le guide verranno stampate in un formato leggibile e pulito, ideale per essere consegnato a persone che non hanno dimestichezza con il digitale."
    },
    {
        q: "Come funzionano i progressi locali?",
        a: "Quando completi una lezione o una checklist, il tuo browser salva questa informazione in una memoria locale. Se cambi computer, usi un altro browser o cancelli la cronologia, questi progressi verranno persi, poiché noi non li salviamo sui nostri server."
    },
    {
        q: "Cosa faccio se una guida contiene un errore?",
        a: "Puoi segnalarlo tramite GitHub aprendo una 'Issue' o contattandoci via email. Essendo un progetto open-source, chiunque può proporre correzioni o aggiornamenti."
    },
    {
        q: "Perché non consigliate prodotti o software specifici?",
        a: "Per mantenere la nostra indipendenza. Consigliamo solo strumenti istituzionali o standard di sicurezza riconosciuti universalmente (come le Passkey o la 2FA), evitando di favorire un'azienda privata rispetto a un'altra."
    },
    {
        q: "Cosa devo fare in caso di emergenza reale?",
        a: "Se c'è un pericolo immediato per la tua vita o incolumità, non leggere le nostre guide: chiama subito il 112. Le nostre guide SOS servono per gestire le fasi successive o emergenze puramente digitali (come il ricatto online)."
    },
    {
        q: "Posso usare Busssola con persone fragili o minori?",
        a: "Sì, il linguaggio è studiato per essere semplice e accessibile. Tuttavia, consigliamo sempre la supervisione di un adulto o di un tutor quando si affrontano temi delicati come la sicurezza online o i ricatti."
    }
]

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <Container size="md" className="py-16 space-y-12">
            <header className="space-y-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-2">
                    <HelpCircle size={32} />
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground tracking-tight">Domande Frequenti</h1>
                <p className="text-xl text-secondary leading-relaxed max-w-2xl mx-auto">
                    Tutto quello che c'è da sapere su Busssola, sulla tua privacy e sull'uso corretto delle guide.
                </p>
            </header>

            <div className="space-y-4 max-w-3xl mx-auto">
                {FAQS.map((faq, i) => (
                    <div key={i} className="border border-border rounded-2xl overflow-hidden bg-surface transition-all hover:border-primary/20">
                        <button
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            className="w-full flex items-center justify-between p-6 text-left hover:bg-surface-muted/50 transition-colors"
                        >
                            <span className="font-semibold text-foreground pr-8 leading-tight">{faq.q}</span>
                            <div className="shrink-0 w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center">
                                {openIndex === i ? <Minus size={16} className="text-primary" /> : <Plus size={16} className="text-secondary" />}
                            </div>
                        </button>
                        <AnimatePresence>
                            {openIndex === i && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <div className="p-6 pt-2 text-secondary leading-relaxed border-t border-border/40 bg-surface-muted/20 text-base">
                                        {faq.a}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
            
            <footer className="pt-12 text-center max-w-xl mx-auto">
                <Card className="p-8 border-dashed border-border bg-surface-muted/30 rounded-[2rem]">
                    <h3 className="text-lg font-bold text-foreground mb-2">Hai altre domande?</h3>
                    <p className="text-sm text-secondary mb-6">Se non trovi la risposta che cerchi, scrivici o consulta il nostro repository su GitHub.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="text-primary font-bold text-sm uppercase tracking-wider hover:underline">Contattaci</button>
                        <span className="text-border">•</span>
                        <button className="text-primary font-bold text-sm uppercase tracking-wider hover:underline">GitHub Repository</button>
                    </div>
                </Card>
            </footer>
        </Container>
    )
}
