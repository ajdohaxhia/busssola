'use client'

import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const FAQS = [
    {
        q: "Busssola è gratuita?",
        a: "Sì, totalmente. Non ci sono costi, abbonamenti o versioni premium. Il progetto è sostenuto da volontari e mira a fornire educazione civica digitale gratuita per tutti, senza barriere economiche."
    },
    {
        q: "Busssola è un ente pubblico o governativo?",
        a: "No. Busssola è un progetto civico indipendente e open-source. Non siamo affiliati ad alcun ministero o ente pubblico, ma utilizziamo esclusivamente fonti istituzionali ufficiali (come INPS, AgID, Polizia Postale) per garantire l'accuratezza delle informazioni."
    },
    {
        q: "Le guide hanno valore legale?",
        a: "No. Le informazioni fornite hanno scopo puramente informativo e di orientamento pratico. Non sostituiscono i testi di legge, né la consulenza legale professionale. Per atti ufficiali, fare sempre riferimento ai siti degli enti competenti che hanno valore legale prevalente."
    },
    {
        q: "Posso usare Busssola a scuola?",
        a: "Assolutamente sì. Busssola è pensata per essere una risorsa per docenti ed educatori. Puoi proiettare le guide in classe, usarle come base per laboratori di cittadinanza digitale o distribuirle agli studenti come materiale di approfondimento."
    },
    {
        q: "Salvate i miei dati personali?",
        a: "No. Busssola non richiede registrazione, email o login. Non usiamo cookie di profilazione e non raccogliamo i tuoi dati di navigazione. Tutto quello che fai resta salvato esclusivamente sul tuo dispositivo tramite LocalStorage."
    },
    {
        q: "Come funzionano i progressi locali?",
        a: "Quando completi una lezione o una checklist, il tuo browser salva questa informazione in una memoria locale. Questo ti permette di riprendere da dove avevi interrotto senza dover creare un account. Poiché non salviamo nulla sui nostri server, se cambi browser o cancelli la cronologia, i progressi andranno persi."
    },
    {
        q: "Posso cancellare i miei progressi?",
        a: "Sì. Poiché i dati sono memorizzati solo sul tuo dispositivo, puoi cancellarli in qualsiasi momento pulendo la cache del browser per il sito di Busssola o utilizzando le funzioni di pulizia dati del tuo sistema operativo."
    },
    {
        q: "Le fonti utilizzate sono ufficiali?",
        a: "Sì. Ogni guida è costruita partendo da documenti e portali istituzionali riconosciuti, come AgID, il Garante per la Protezione dei Dati Personali, INPS, la Polizia Postale e i siti governativi ufficiali (.gov.it)."
    },
    {
        q: "Ogni quanto vengono aggiornate le guide?",
        a: "Le guide vengono revisionate periodicamente o ogni volta che vengono segnalati cambiamenti normativi o tecnici rilevanti. Ciascuna scheda riporta la data dell'ultima revisione in fondo alla pagina."
    },
    {
        q: "Cosa faccio se una guida contiene un errore?",
        a: "Puoi segnalarlo immediatamente aprendo una 'Issue' su GitHub o contattandoci via email. Essendo un progetto collaborativo, verifichiamo ogni segnalazione e aggiorniamo i contenuti nel minor tempo possibile."
    },
    {
        q: "Posso contribuire al progetto?",
        a: "Certamente. Busssola è un progetto open-source. Puoi contribuire scrivendo nuove guide, correggendo bozze esistenti, segnalando bug tecnici o migliorando il codice sorgente direttamente su GitHub."
    },
    {
        q: "Posso stampare le guide per darle a chi non usa internet?",
        a: "Sì. Il sito è ottimizzato per la stampa (Ctrl+P o Cmd+P). Le guide verranno formattate in modo pulito e leggibile, rendendole ideali per essere consegnate a persone con poca dimestichezza digitale o per uso offline."
    },
    {
        q: "Posso usare Busssola con minori?",
        a: "Sì, il linguaggio è studiato per essere semplice e accessibile. Tuttavia, consigliamo la supervisione di un adulto o di un educatore quando si affrontano temi delicati come la sicurezza online, il cyberbullismo o l'uso dei social network."
    },
    {
        q: "Cosa devo fare in caso di emergenza reale?",
        a: "In caso di pericolo immediato per la vita o l'incolumità, non consultare il sito: chiama subito il Numero Unico di Emergenza 112. Le nostre guide SOS servono per gestire le fasi successive o emergenze digitali, non situazioni di pericolo fisico imminente."
    },
    {
        q: "Perché non fornite consulenza legale personalizzata?",
        a: "Busssola è uno strumento di informazione e orientamento generale, non uno studio legale. Ogni situazione ha specificità che richiedono il parere di un professionista abilitato. Forniamo i percorsi standard, ma non possiamo sostituirci a un avvocato."
    },
    {
        q: "Perché non consigliate servizi o software privati specifici?",
        a: "Per garantire la totale imparzialità e indipendenza del progetto. Suggeriamo solo standard di sicurezza universali (come le Passkey o l'autenticazione a due fattori) o piattaforme istituzionali, evitando di favorire un operatore commerciale rispetto a un altro."
    },
    {
        q: "Posso condividere una guida con altre persone?",
        a: "Sì, incoraggiamo attivamente la condivisione. Puoi inviare il link diretto a una guida tramite messaggistica o social media per aiutare un amico o un familiare che si trova in una situazione di difficoltà digitale."
    },
    {
        q: "Come vengono proposte e scelte le nuove guide?",
        a: "Le nuove guide nascono dalle segnalazioni degli utenti, dalle nuove tendenze in ambito di sicurezza informatica o dalle necessità espresse da associazioni e scuole che collaborano con il progetto."
    },
    {
        q: "Busssola funziona davvero senza registrazione?",
        a: "Sì. Riteniamo che l'accesso alle informazioni fondamentali sui diritti digitali debba essere anonimo e senza barriere. Non ti verrà mai chiesto di creare un account per consultare i contenuti."
    },
    {
        q: "Usate l'intelligenza artificiale per scrivere i testi?",
        a: "Sì, utilizziamo l'AI per generare bozze iniziali partendo esclusivamente da fonti ufficiali. Tuttavia, ogni singolo testo viene revisionato, corretto e validato da supervisori umani prima di essere pubblicato."
    },
    {
        q: "Come verificate l'accuratezza dei contenuti generati?",
        a: "Seguiamo un protocollo rigoroso che prevede il confronto incrociato dei testi con le fonti originali. Verifichiamo che i passaggi tecnici siano aggiornati e che il linguaggio sia comprensibile, applicando un controllo umano su ogni parola."
    },
    {
        q: "Posso usare il materiale di Busssola in un'associazione?",
        a: "Sì. Busssola è un bene comune. Le associazioni possono utilizzare le guide per attività di formazione, supporto ai cittadini o materiale informativo interno, citando la fonte originale."
    },
    {
        q: "Cosa devo fare se ho subito una truffa online?",
        a: "Consulta immediatamente la nostra sezione SOS dedicata alle truffe. Ti guiderà nei passi fondamentali: blocco delle carte, raccolta delle prove e presentazione della denuncia alle autorità competenti."
    },
    {
        q: "Cosa fare se una criticità riguarda una persona fragile?",
        a: "Supporta la persona con calma, utilizzando il linguaggio semplificato delle nostre guide per spiegarle cosa sta succedendo. Aiutala a mettere in sicurezza i suoi account e, se necessario, accompagnala a sporgere denuncia."
    },
    {
        q: "Come posso segnalare link interrotti?",
        a: "I siti istituzionali cambiano spesso indirizzo. Se trovi un link che non funziona, segnalalo tramite GitHub o email. È un aiuto prezioso che ci permette di mantenere il servizio sempre efficiente."
    },
    {
        q: "Come viene gestita tecnicamente la mia privacy?",
        a: "Il sito è progettato per essere statico e sicuro. Non essendoci un database centrale che raccoglie informazioni sugli utenti, non c'è rischio di data breach dei tuoi dati personali su Busssola."
    },
    {
        q: "Dove posso trovare l'elenco completo delle fonti?",
        a: "In fondo a ogni guida troverai una sezione dedicata intitolata 'Fonti e Approfondimenti', con i link diretti ai portali ufficiali utilizzati per la redazione di quel contenuto specifico."
    },
    {
        q: "Cosa significa “Quality Gate”?",
        a: "È il nostro processo di revisione: ogni contenuto, prima di andare online, deve soddisfare tre requisiti: accuratezza della fonte, semplicità del linguaggio (accessibilità) e utilità pratica dei passaggi suggeriti."
    },
    {
        q: "Posso aprire una 'Issue' su GitHub anche se non sono un programmatore?",
        a: "Assolutamente sì. Puoi usare le 'Issue' come un normale modulo di contatto per suggerire miglioramenti, segnalare refusi o proporre nuovi temi. È il modo più veloce per interagire con il team di sviluppo."
    },
    {
        q: "Come posso aiutare il progetto senza programmare?",
        a: "Puoi aiutarci segnalando inesattezze, suggerendo nuovi argomenti, aiutando nella semplificazione dei testi complessi o semplicemente facendo conoscere Busssola a chi potrebbe averne bisogno."
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
