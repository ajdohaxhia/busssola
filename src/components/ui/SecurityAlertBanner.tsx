import Link from 'next/link'
import { AlertTriangle, ArrowRight, ShieldCheck, Smartphone, Car, Bot } from 'lucide-react'

interface SecurityAlertBannerProps {
    variant?: 'home' | 'sos'
}

export function SecurityAlertBanner({ variant = 'home' }: SecurityAlertBannerProps) {
    return (
        <aside
            role="region"
            aria-label="Allerte di sicurezza informatica e truffe in corso"
            className="rounded-3xl border-2 border-amber-500/40 bg-gradient-to-br from-amber-500/10 via-surface to-amber-500/5 p-6 md:p-8 space-y-6 shadow-sm"
        >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-2xl bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                        <AlertTriangle className="w-6 h-6 animate-pulse" aria-hidden />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300">
                                Allerta attiva · Autunno 2026
                            </span>
                            <span className="text-xs text-muted">Fonti: Polizia Postale & CERT-AgID</span>
                        </div>
                        <h2 className="text-xl md:text-2xl font-display font-bold text-foreground tracking-tight mt-0.5">
                            Campagne di frode e sicurezza in corso in Italia
                        </h2>
                    </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 shrink-0">
                    <Link
                        href="/moduli/modulo-03-truffe-phishing"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-foreground text-background text-xs md:text-sm font-bold shadow hover:bg-foreground/90 transition-all"
                    >
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        Guida anti-truffa e phishing ↗
                    </Link>
                    <Link
                        href="/novita"
                        className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-primary hover:underline"
                    >
                        Tutti i bollettini 2026 <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Alert 1 */}
                <Link
                    href="/novita/whatsapp-furto-account-falsi-concorsi-2026"
                    className="p-4 rounded-2xl border border-border/80 bg-surface/80 hover:border-amber-500/60 hover:shadow-md transition-all group flex flex-col justify-between space-y-3"
                >
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs font-semibold text-amber-600 dark:text-amber-400">
                            <Smartphone className="w-4 h-4" />
                            <span>WhatsApp · Furto Account</span>
                        </div>
                        <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors leading-snug">
                            Truffa dei falsi concorsi ("La ballerina")
                        </h3>
                        <p className="text-xs text-secondary leading-relaxed line-clamp-3">
                            Messaggi da contatti rubati chiedono voti per un concorso. Mai cedere il codice a 6 cifre via SMS. Attiva subito la verifica a due fattori.
                        </p>
                    </div>
                    <span className="text-[11px] font-bold text-primary inline-flex items-center gap-1 pt-2 border-t border-border/40">
                        Cosa fare e contromisure <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                    </span>
                </Link>

                {/* Alert 2 */}
                <Link
                    href="/novita/phishing-bollo-auto-aci-2026"
                    className="p-4 rounded-2xl border border-border/80 bg-surface/80 hover:border-amber-500/60 hover:shadow-md transition-all group flex flex-col justify-between space-y-3"
                >
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs font-semibold text-amber-600 dark:text-amber-400">
                            <Car className="w-4 h-4" />
                            <span>Smishing · Tassa Automobilistica</span>
                        </div>
                        <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors leading-snug">
                            Finti SMS ACI per presunto mancato pagamento
                        </h3>
                        <p className="text-xs text-secondary leading-relaxed line-clamp-3">
                            Link a portali civetta che chiedono dati della carta. Verifica il bollo solo su portale ufficiale aci.it o nell'area personale su App IO.
                        </p>
                    </div>
                    <span className="text-[11px] font-bold text-primary inline-flex items-center gap-1 pt-2 border-t border-border/40">
                        Come verificare in sicurezza <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                    </span>
                </Link>

                {/* Alert 3 */}
                <Link
                    href="/novita/siti-clone-ia-truffe-online-2026"
                    className="p-4 rounded-2xl border border-border/80 bg-surface/80 hover:border-amber-500/60 hover:shadow-md transition-all group flex flex-col justify-between space-y-3"
                >
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs font-semibold text-amber-600 dark:text-amber-400">
                            <Bot className="w-4 h-4" />
                            <span>Intelligenza Artificiale · Voice Cloning</span>
                        </div>
                        <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors leading-snug">
                            Siti clone perfetti e audio deepfake
                        </h3>
                        <p className="text-xs text-secondary leading-relaxed line-clamp-3">
                            I modelli IA generano siti bancari privi di errori e clonano voci di parenti/colleghi. Istituisci una parola d'ordine familiare.
                        </p>
                    </div>
                    <span className="text-[11px] font-bold text-primary inline-flex items-center gap-1 pt-2 border-t border-border/40">
                        Protocollo di difesa <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                    </span>
                </Link>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-amber-500/20 text-xs text-secondary">
                <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Tutti i contenuti sono verificati con riferimenti diretti ai bollettini delle autorità</span>
                </div>
                {variant === 'home' ? (
                    <Link href="/sos" className="font-semibold text-sos hover:underline inline-flex items-center gap-1">
                        Sei già caduto in una truffa? Apri il Centro SOS →
                    </Link>
                ) : (
                    <Link href="/tips" className="font-semibold text-primary hover:underline inline-flex items-center gap-1">
                        Consulta tutti i trucchi civici e le buone pratiche →
                    </Link>
                )}
            </div>
        </aside>
    )
}
