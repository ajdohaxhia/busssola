import { Container } from '@/components/ui/Container'

export default function TerminiPage() {
    return (
        <Container size="md" className="py-16 space-y-12">
            <header className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground tracking-tight">Termini d'Uso</h1>
                <p className="text-xl text-secondary leading-relaxed">
                    Regole chiare per una piattaforma educativa sicura.
                </p>
            </header>

            <article className="prose prose-slate max-w-none space-y-8 text-secondary leading-relaxed">
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">1. Scopo del Servizio</h2>
                    <p>
                        Busssola è una piattaforma informativa e didattica. I contenuti offerti sono frutto di ricerca e analisi ma hanno uno scopo puramente educativo. Non sostituiscono il parere legale di un avvocato o l'intervento tecnico di un professionista della cybersecurity in caso di attacco in corso.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">2. Limiti di Responsabilità</h2>
                    <p>
                        Ci impegniamo a mantenere le informazioni aggiornate, ma non possiamo garantire che ogni tecnica di attacco descritta sia l'unica esistente. Busssola non è responsabile per danni derivanti da un uso improprio delle informazioni fornite o per l'inefficacia di misure di sicurezza applicate dall'utente in autonomia.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">3. Utilizzo dei Contenuti</h2>
                    <p>
                        Puoi utilizzare Busssola per scopi personali, familiari o didattici in classe. È vietato copiare i contenuti per scopi commerciali o spacciarli come propri senza citare la fonte (Busssola.com).
                    </p>
                </section>

                <section className="space-y-4 text-sos">
                    <h2 className="text-2xl font-bold">4. Emergenze</h2>
                    <p className="font-semibold">
                        In caso di pericolo fisico immediato o di reati gravi in corso, contatta sempre il 112 (Numero Unico Europeo) o la Polizia Postale. Busssola è una bussola, non una caserma.
                    </p>
                </section>
            </article>
        </Container>
    )
}
