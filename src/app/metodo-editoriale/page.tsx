import { Container } from '@/components/ui/Container'
import { BookOpen, Heart } from 'lucide-react'

export default function MetodoPage() {
    return (
        <Container size="md" className="py-16 space-y-12">
            <header className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground tracking-tight">Metodo Editoriale</h1>
                <p className="text-xl text-secondary leading-relaxed">
                    Come costruiamo i contenuti di Busssola: tra rigore tecnico e calma emotiva.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 rounded-2xl bg-surface border border-border space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                        <BookOpen size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Semplicità, non banalità</h3>
                    <p className="text-secondary text-sm leading-relaxed">
                        Evitiamo il gergo tecnico non necessario. Se dobbiamo spiegare la 2FA, non parliamo di "algoritmi TOTP" se non è utile all'utente per proteggersi. Puntiamo alla chiarezza pratica.
                    </p>
                </div>
                <div className="p-8 rounded-2xl bg-surface border border-border space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-sos/10 text-sos flex items-center justify-center">
                        <Heart size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Sicurezza Emotiva</h3>
                    <p className="text-secondary text-sm leading-relaxed">
                        Molte minacce digitali puntano sulla paura, come sextortion e phishing. Il nostro copy è progettato per abbassare il battito cardiaco, non per alzarlo. Informiamo senza terrorizzare.
                    </p>
                </div>
            </div>

            <article className="prose prose-slate max-w-none space-y-8 text-secondary leading-relaxed">
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">Il nostro processo di verifica</h2>
                    <p>
                        Ogni modulo formativo attraversa tre fasi di revisione:
                    </p>
                    <ol className="list-decimal pl-5 space-y-2">
                        <li><strong>Accuratezza Tecnica:</strong> Le procedure descritte devono essere realmente efficaci contro le minacce dichiarate.</li>
                        <li><strong>Accessibilità Linguistica:</strong> Il testo viene testato per essere comprensibile da un pubblico non specialista (ragazzi e genitori).</li>
                        <li><strong>Orientamento all'Azione:</strong> Ogni lezione deve rispondere alla domanda: "Cosa devo fare adesso?".</li>
                    </ol>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">Aggiornamenti</h2>
                    <p>
                        Il mondo digitale cambia ogni mese. Revisioniamo ciclicamente i nostri moduli per assicurarci che gli screenshot (ove presenti) e le procedure siano ancora validi per le ultime versioni dei software e dei social media più diffusi.
                    </p>
                </section>
            </article>
        </Container>
    )
}
