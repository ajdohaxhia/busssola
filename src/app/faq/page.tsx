'use client'

import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { PageHeader } from '@/components/ui/PageHeader'

const FAQS = [
    {
        q: "Busssola è davvero gratuita?",
        a: "Sì, totalmente. Non ci sono costi, non ci sono versioni 'premium', non vendiamo corsi e non mostriamo pubblicità. È un servizio offerto alla collettività."
    },
    {
        q: "Busssola è un ente pubblico o governativo?",
        a: "No. Busssola è un progetto civico indipendente e open-source. Non siamo affiliati ad alcun ministero o ente pubblico, ma utilizziamo esclusivamente fonti ufficiali (come INPS, AgID, Polizia Postale) per garantire l'accuratezza delle informazioni."
    },
    {
        q: "Le guide hanno valore legale?",
        a: "No. Le informazioni fornite hanno scopo puramente informativo e di orientamento pratico. Non sostituiscono i testi di legge, né i siti ufficiali degli enti competenti che hanno sempre valore legale prevalente."
    },
    {
        q: "Posso usare Busssola a scuola?",
        a: "Assolutamente sì. Busssola è pensata per essere una risorsa per docenti ed educatori. Puoi proiettare le guide in classe o usarle come base per laboratori di cittadinanza digitale."
    },
    {
        q: "Salvate i miei dati personali?",
        a: "No. Busssola non richiede registrazione né login. Non usiamo cookie di profilazione e non raccogliamo i tuoi dati di navigazione. Tutto quello che fai (come i progressi nelle lezioni) resta salvato esclusivamente sul tuo dispositivo (Local Storage)."
    },
    {
        q: "Come funzionano i progressi locali?",
        a: "Quando completi una lezione o una checklist, il tuo browser salva questa informazione in una memoria locale. Se cambi computer, usi un altro browser o cancelli la cronologia, questi progressi verranno persi, poiché noi non li salviamo sui nostri server."
    },
    {
        q: "Posso cancellare i progressi?",
        a: "Sì, basta svuotare la cache del browser per il sito busssola.com oppure usare il tasto di reset che trovi in alcune sezioni del sito."
    },
    {
        q: "Le fonti sono ufficiali?",
        a: "Sì. Ogni guida cita le fonti originali (siti .gov.it o manuali di supporto ufficiali delle piattaforme). Puoi trovarle in fondo a ogni scheda."
    },
    {
        q: "Ogni quanto aggiornate le guide?",
        a: "Le guide vengono revisionate periodicamente. Ogni scheda riporta la data dell'ultima revisione. Se noti un'inesattezza, puoi segnalarla tramite GitHub."
    },
    {
        q: "Cosa faccio se una guida è sbagliata?",
        a: "Puoi aprire una segnalazione (issue) sul nostro repository GitHub o scriverci via email. Trattandosi di un progetto open-source, il contributo della comunità è fondamentale."
    },
    {
        q: "Posso contribuire?",
        a: "Sì! Cerchiamo sempre persone che aiutino a semplificare testi complessi o a scrivere nuove guide. Controlla la nostra pagina 'Contribuisci' su GitHub."
    },
    {
        q: "Posso stampare le guide?",
        a: "Sì. Il sito è ottimizzato per la stampa (Ctrl+P). Otterrai una versione pulita e leggibile, ideale da consegnare a chi ha meno dimestichezza col digitale."
    },
    {
        q: "Posso usare Busssola con minori?",
        a: "Sì, il linguaggio è semplice e accessibile. Tuttavia, consigliamo sempre la supervisione di un adulto quando si affrontano temi delicati come la sicurezza online o i ricatti."
    },
    {
        q: "Cosa faccio in emergenza?",
        a: "In caso di pericolo fisico immediato chiama sempre il 112. Se l'emergenza è digitale (account rubato, ricatto), usa la nostra pagina SOS per i primi passi critici."
    },
    {
        q: "Perché non date consulenza legale?",
        a: "Perché non siamo avvocati. Busssola descrive le procedure burocratiche e tecniche. Per casi complessi che richiedono assistenza legale, consigliamo sempre di rivolgersi a un professionista o a un sindacato/patronato."
    },
    {
        q: "Perché non consigliate servizi privati specifici?",
        a: "Per mantenere la totale indipendenza. Consigliamo software o app solo se sono standard di mercato riconosciuti o strumenti istituzionali."
    },
    {
        q: "Posso condividere una guida con altri?",
        a: "Certamente. Puoi inviare il link o stampare la guida. Busssola è un bene comune."
    },
    {
        q: "Come proponete nuove guide?",
        a: "Analizziamo le richieste dei cittadini, le novità legislative o i nuovi rischi digitali emergenti segnalati dalle autorità."
    },
    {
        q: "Busssola funziona senza registrazione?",
        a: "Sì. Tutti i contenuti sono accessibili a chiunque senza dover creare un account o lasciare dati."
    },
    {
        q: "Usate AI per scrivere?",
        a: "Utilizziamo strumenti di intelligenza artificiale per aiutarci nella sintesi e nella strutturazione dei dati, ma ogni contenuto è rigorosamente revisionato e verificato da un essere umano esperto prima della pubblicazione."
    },
    {
        q: "Come verificate i contenuti generati?",
        a: "Tramite il nostro 'Quality Gate': un processo di revisione che controlla la veridicità delle fonti, la chiarezza dei passaggi e l'assenza di pareri personali."
    },
    {
        q: "Posso usare il materiale in un’associazione?",
        a: "Sì. Il materiale è rilasciato con licenza open-source e può essere usato da associazioni, comuni o enti del terzo settore."
    },
    {
        q: "Cosa fare se ho subito una truffa?",
        a: "Segui i passi nella nostra pagina SOS e in quella del modulo Truffe. La prima cosa è bloccare i pagamenti e sporgere denuncia online o presso le autorità."
    },
    {
        q: "Cosa fare se riguarda una persona fragile?",
        a: "Assisti la persona nella procedura ma non sostituirti a lei se può farlo autonomamente. Usa le nostre checklist per assicurarti di non dimenticare nulla."
    },
    {
        q: "Come segnalare link rotti?",
        a: "Puoi farlo tramite GitHub aprendo una issue."
    },
    {
        q: "Come viene gestita la privacy?",
        a: "Non raccogliamo dati. Il sito è statico e i pochi dati di progresso risiedono solo sul tuo dispositivo."
    },
    {
        q: "Dove trovo le fonti?",
        a: "Nella pagina 'Fonti' del sito o in fondo a ogni singola lezione."
    },
    {
        q: "Cosa significa “Quality Gate”?",
        a: "È il nostro standard interno di qualità: una guida entra nel sito solo se ha fonti certe, passi chiari e linguaggio accessibile."
    },
    {
        q: "Posso aprire una issue su GitHub?",
        a: "Sì, è il modo migliore per comunicare con il team di sviluppo e di redazione."
    },
    {
        q: "Come posso aiutare il progetto senza programmare?",
        a: "Puoi aiutarci segnalando inesattezze, suggerendo nuovi argomenti, aiutando nella semplificazione dei testi complessi o semplicemente facendo conoscere Busssola a chi potrebbe averne bisogno."
    }
]

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <Container size="md" className="py-12 space-y-12">
            <PageHeader 
                centered
                badge="Centro Assistenza"
                icon={HelpCircle}
                title="Domande Frequenti"
                description="Tutto quello che c'è da sapere su Busssola, sulla tua privacy e sull'uso corretto delle guide civiche."
            />

            <div className="space-y-4 max-w-3xl mx-auto">
                {FAQS.map((faq, i) => (
                    <div key={i} className="border-2 border-border rounded-[2rem] overflow-hidden bg-surface transition-all hover:border-primary/20 hover:shadow-lg group">
                        <button
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            className="w-full flex items-center justify-between p-8 text-left hover:bg-surface-muted transition-colors focus:outline-none focus:bg-primary/5"
                            aria-expanded={openIndex === i}
                        >
                            <span className="font-display font-black text-foreground pr-8 leading-tight text-lg group-hover:text-primary transition-colors">{faq.q}</span>
                            <div className="shrink-0 w-10 h-10 rounded-xl bg-background border-2 border-border flex items-center justify-center group-hover:border-primary/40 transition-colors shadow-inner">
                                {openIndex === i ? <Minus size={18} className="text-primary" strokeWidth={3} /> : <Plus size={18} className="text-secondary" strokeWidth={3} />}
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
                                    <div className="px-8 pb-8 pt-0 text-secondary leading-relaxed border-t-2 border-border/40 bg-surface-muted/20 text-lg font-medium">
                                        {faq.a}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
            
            <footer className="pt-20 text-center max-w-2xl mx-auto">
                <Card className="p-10 border-4 border-dashed border-border bg-surface-muted/30 rounded-[3rem] space-y-8 text-left">
                    <div className="space-y-2">
                        <h3 className="text-2xl font-display font-black text-foreground tracking-tight">Hai altre domande?</h3>
                        <p className="text-secondary font-medium">Se non trovi la risposta che cerchi, il nostro team è a disposizione.</p>
                    </div>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        <Button asChild variant="outline" className="rounded-xl font-black uppercase tracking-widest px-6 h-12 bg-surface">
                            <Link href="/contact">Contattaci</Link>
                        </Button>
                        <Button asChild variant="outline" className="rounded-xl font-black uppercase tracking-widest px-6 h-12 bg-surface">
                            <Link href="https://github.com/ajdohaxhia/busssola">GitHub Community</Link>
                        </Button>
                    </div>
                </Card>
            </footer>
        </Container>
    )
}
