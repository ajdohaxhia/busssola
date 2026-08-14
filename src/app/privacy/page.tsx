import { Container } from '@/components/ui/Container'
import { siteStats } from '@/config/siteStats'

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
                        Busssola è un progetto informativo indipendente nato con una precisa etica della riservatezza. Crediamo che l'educazione digitale non debba costarti il tracciamento della tua vita online. Per questo motivo, abbiamo ridotto al minimo tecnico indispensabile la raccolta di dati.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">2. Quali dati raccogliamo</h2>
                    <p>
                        <strong>Nessuna profilazione.</strong> Non ti chiediamo di registrarti, non abbiamo form di login e non utilizziamo cookie di profilazione pubblicitaria.
                    </p>
                    <p>
                        Tuttavia, come ogni sito web moderno, il fornitore dell'infrastruttura (Cloudflare Pages) potrebbe raccogliere log tecnici minimi (indirizzo IP, tipo di browser, data e ora dell'accesso) per garantire la sicurezza del sito e prevenire attacchi informatici. Questi dati non vengono usati da noi per identificarti.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">3. Salvataggio dei progressi</h2>
                    <p>
                        Busssola utilizza il <strong>LocalStorage</strong> del tuo browser per memorizzare quali lezioni hai letto e i tuoi progressi nei percorsi. Questi dati rimangono esclusivamente sul tuo dispositivo e non vengono mai inviati ai nostri server. Se cancelli la cache del browser, questi dati verranno rimossi.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">4. Link esterni e Fonti</h2>
                    <p>
                        Il sito contiene link a siti ufficiali (Polizia Postale, Garante Privacy, Apple, Google, ecc.). Una volta usciti da Busssola, si applicano le policy del sito di destinazione. Non siamo responsabili per il trattamento dati operato da terze parti.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">5. Diritti dell'utente</h2>
                    <p>
                        Poiché non raccogliamo dati identificativi o account, non abbiamo modo di associare una navigazione a una persona fisica. Tuttavia, per qualsiasi domanda riguardante la protezione dei dati, puoi contattarci.
                    </p>
                </section>

                <div className="bg-primary/5 border border-primary/10 p-8 rounded-2xl space-y-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Ultimo aggiornamento: {siteStats.lastUpdatedAt}</p>
                    <h3 className="text-lg font-bold text-primary">Domande sulla privacy?</h3>
                    <p className="text-sm">Busssola è un progetto informativo. Per comunicazioni relative ai dati: <a href="mailto:privacy@busssola.com" className="font-semibold underline">privacy@busssola.com</a>.</p>
                </div>

                <p className="text-xs text-muted-foreground italic">
                    Nota: Questa informativa è una base informativa e va verificata/adattata in caso di aggiunta di analytics, form o altri servizi di raccolta dati.
                </p>
            </article>
        </Container>
    )
}
