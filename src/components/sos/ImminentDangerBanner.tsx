import { Phone, ShieldAlert } from 'lucide-react'

export function ImminentDangerBanner({ compact = false }: { compact?: boolean }) {
    return (
        <aside
            role="alert"
            aria-live="assertive"
            className={compact
                ? 'rounded-2xl border-2 border-sos bg-sos text-white p-4 flex flex-col sm:flex-row sm:items-center gap-4'
                : 'rounded-3xl border-2 border-sos bg-sos text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 shadow-none'
            }
        >
            <div className="flex items-start gap-4 flex-1">
                <ShieldAlert className="w-8 h-8 shrink-0" aria-hidden />
                <div className="space-y-2">
                    <p className="text-xl md:text-3xl font-display font-semibold leading-tight">
                        Sei in pericolo adesso? Chiama il 112.
                    </p>
                    <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-2xl">
                        Se c&apos;è violenza, una minaccia fisica, un reato in corso o qualcuno è in pericolo, l&apos;unica azione da fare è chiamare il Numero Unico Emergenza. Busssola non è un servizio di emergenza e non sostituisce Carabinieri o Polizia.
                    </p>
                </div>
            </div>
            <a
                href="tel:112"
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white text-sos font-semibold px-8 py-4 text-lg shrink-0 hover:bg-sos-bg"
            >
                <Phone className="w-5 h-5" />
                Chiama 112
            </a>
        </aside>
    )
}

export function PhysicalDangerCallout() {
    return (
        <p className="text-sm text-sos font-medium border border-sos/30 bg-sos-bg rounded-xl px-4 py-3">
            Se sei in pericolo fisico o vieni minacciato di persona, chiudi questa guida e chiama il 112.
        </p>
    )
}
