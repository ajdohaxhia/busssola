import { Container } from '@/components/ui/Container'

export default function PrivacyPage() {
    return (
        <Container size="md" className="py-16 space-y-12">
            <header className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground tracking-tight">Privacy Policy</h1>
                <p className="text-xl text-secondary leading-relaxed">
                    Trasparenza totale su come gestiamo (e non gestiamo) i tuoi dati.
                </p>
            </header>

            <article className="prose prose-slate max-w-none space-y-8 text-secondary leading-relaxed">
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">1. Il nostro approccio</h2>
                    <p>
                        Busssola è nata come piattaforma "Privacy by Design". Crediamo che l'educazione digitale non debba costarti il tracciamento della tua vita online. Per questo motivo, abbiamo ridotto al minimo tecnico indispensabile la raccolta di dati.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">2. Quali dati raccogliamo</h2>
                    <p>
                        <strong>Nessuno.</strong> Non ti chiediamo di registrarti, non ti chiediamo la tua email per accedere ai contenuti e non utilizziamo cookie di profilazione o di terze parti (come Facebook Pixel o Google Analytics invasivi).
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">3. Salvataggio dei progressi</h2>
                    <p>
                        Se vedi una barra di avanzamento o moduli completati, sappi che questi dati sono salvati esclusivamente nel <strong>Local Storage</strong> del tuo browser. Busssola non invia questi dati a un server centrale. Se cancelli la cache del browser, i tuoi progressi andranno persi perché appartengono solo a te e al tuo dispositivo.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">4. Contatti via Email</h2>
                    <p>
                        Se decidi di scriverci un'email tramite i link nella pagina Contatti, riceveremo il tuo indirizzo email e il contenuto del messaggio. Useremo queste informazioni solo per risponderti e non le inseriremo in database di marketing o newsletter senza il tuo esplicito consenso.
                    </p>
                </section>

                <div className="bg-primary/5 border border-primary/10 p-8 rounded-2xl space-y-4">
                    <h3 className="text-lg font-bold text-primary">Hai domande sulla tua privacy?</h3>
                    <p className="text-sm">Scrivici a <a href="mailto:privacy@busssola.com" className="font-semibold underline">privacy@busssola.com</a>. Rispondiamo personalmente a ogni richiesta riguardante la gestione dei dati.</p>
                </div>
            </article>
        </Container>
    )
}
