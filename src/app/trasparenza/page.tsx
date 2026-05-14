import { Container } from '@/components/ui/Container'
import { CheckCircle2, Lock, Code } from 'lucide-react'

export default function TrasparenzaPage() {
    return (
        <Container size="md" className="py-16 space-y-12">
            <header className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground tracking-tight">Trasparenza</h1>
                <p className="text-xl text-secondary leading-relaxed">
                    Busssola è un progetto indipendente. Ecco come stiamo al mondo.
                </p>
            </header>

            <div className="space-y-12 text-secondary leading-relaxed">
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground">Chi finanzia il progetto?</h2>
                    <p>
                        Busssola è un'iniziativa civica indipendente a scopo educativo. Non riceviamo finanziamenti da aziende, non ospitiamo pubblicità e non vendiamo i dati degli utenti (semplicemente perché non li raccogliamo). Il progetto è sostenuto dal lavoro volontario del suo creatore e dei contributori su GitHub.
                    </p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground">Relazione con la Pubblica Amministrazione</h2>
                    <div className="bg-amber-50 border border-amber-100 p-6 rounded-2xl space-y-3">
                        <p className="text-amber-900 font-semibold">Busssola NON è un ente pubblico, un ufficio governativo o un'agenzia ufficiale.</p>
                        <p className="text-amber-800 text-sm leading-relaxed">
                            Le informazioni e le guide presenti sul sito hanno esclusivamente scopo informativo e di orientamento civico. Sebbene ci impegniamo al massimo per mantenere i contenuti aggiornati e precisi basandoci su fonti ufficiali (AgID, INPS, Comuni, Ministeri), <strong>solo le fonti istituzionali hanno valore legale</strong>. Ti invitiamo sempre a verificare ogni procedura sui siti ufficiali degli enti competenti prima di procedere.
                        </p>
                    </div>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-100 space-y-4">
                        <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center">
                            <Lock size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-emerald-900">Nessun Vendor Lock-in</h3>
                        <p className="text-emerald-800/80 text-sm">
                            Non ti consiglieremo mai un prodotto specifico (un antivirus, una VPN) perché veniamo pagati dall'azienda produttrice. Se citiamo uno strumento, è perché lo riteniamo tecnicamente valido.
                        </p>
                    </div>
                    <div className="p-8 rounded-2xl bg-blue-50 border border-blue-100 space-y-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-500 text-white flex items-center justify-center">
                            <Code size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-blue-900">Codice e Contenuti</h3>
                        <p className="text-blue-800/80 text-sm">
                            Busssola è costruita con tecnologie moderne (Next.js, Tailwind) puntando alla massima velocità e sostenibilità digitale (basso consumo di dati).
                        </p>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground">Il nostro impegno</h2>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                            <span><strong>Indipendenza:</strong> Nessun legame con partiti o aziende di sorveglianza.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                            <span><strong>Gratuità:</strong> I contenuti fondamentali resteranno accessibili a tutti.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                            <span><strong>Etica dei Dati:</strong> Zero profilazione. Mai.</span>
                        </li>
                    </ul>
                </section>
            </div>
        </Container>
    )
}
