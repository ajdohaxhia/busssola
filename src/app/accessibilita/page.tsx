import { Container } from '@/components/ui/Container'
import { CheckCircle2, Monitor, Keyboard, MousePointer2, Type } from 'lucide-react'

export default function AccessibilitaPage() {
    return (
        <Container size="md" className="py-16 space-y-12">
            <header className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground tracking-tight">Dichiarazione di Accessibilità</h1>
                <p className="text-xl text-secondary leading-relaxed">
                    Il nostro impegno per rendere la sicurezza digitale alla portata di tutti, senza barriere.
                </p>
            </header>

            <div className="space-y-12 text-secondary leading-relaxed">
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground">Il nostro obiettivo</h2>
                    <p>
                        Vogliamo che Busssola sia utilizzabile dal maggior numero possibile di persone, indipendentemente dalle capacità fisiche o sensoriali o dal dispositivo utilizzato. L'accessibilità non è un'aggiunta, ma parte del nostro metodo editoriale e tecnico.
                    </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl border border-border bg-surface space-y-3">
                        <Type className="text-primary w-6 h-6" />
                        <h3 className="font-bold text-foreground">Leggibilità</h3>
                        <p className="text-sm">Utilizziamo caratteri ad alta leggibilità, contrasti di colore conformi alle linee guida WCAG 2.1 e una gerarchia visiva chiara.</p>
                    </div>
                    <div className="p-6 rounded-2xl border border-border bg-surface space-y-3">
                        <Keyboard className="text-primary w-6 h-6" />
                        <h3 className="font-bold text-foreground">Navigazione da tastiera</h3>
                        <p className="text-sm">L'intero sito è navigabile tramite tastiera, con stati di focus chiaramente visibili per aiutare chi non usa il mouse.</p>
                    </div>
                </div>

                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground">Caratteristiche tecniche</h2>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span><strong>HTML Semantico:</strong> Utilizziamo tag corretti per permettere agli screen reader di interpretare la struttura della pagina.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span><strong>Target di tocco:</strong> I pulsanti e i link hanno dimensioni adeguate per essere facilmente cliccabili anche su schermi touch piccoli.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span><strong>Riduzione del movimento:</strong> Molte delle nostre animazioni rispettano le impostazioni di sistema dell'utente.</span>
                        </li>
                    </ul>
                </section>

                <section className="bg-surface-muted p-8 rounded-2xl space-y-4">
                    <h3 className="text-lg font-bold text-foreground">Segnala un problema</h3>
                    <p className="text-sm leading-relaxed">
                        Se riscontri difficoltà nell'accesso ad alcuni contenuti o hai suggerimenti per migliorare l'accessibilità di Busssola, scrivici a <a href="mailto:accessibilita@busssola.com" className="font-bold underline">accessibilita@busssola.com</a>. La tua esperienza ci aiuta a migliorare.
                    </p>
                </section>
            </div>
        </Container>
    )
}
