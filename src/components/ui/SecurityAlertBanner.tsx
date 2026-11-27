import Link from 'next/link'
import { AlertTriangle, ArrowRight, KeyRound, QrCode, ShieldCheck, Terminal } from 'lucide-react'

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
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300">
                                Allerta attiva · 27 Novembre 2026
                            </span>
                            <span className="text-xs text-muted">Fonti: CERT-AgID, Agenzia Entrate & Polizia Postale</span>
                        </div>
                        <h2 className="text-xl md:text-2xl font-display font-bold text-foreground tracking-tight mt-0.5">
                            Campagne di frode e sicurezza in corso in Italia
                        </h2>
                    </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 shrink-0">
                    <Link
                        href="/confronti/truffe-come-riconoscerle"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-foreground text-background text-xs md:text-sm font-bold shadow hover:bg-foreground/90 transition-all"
                    >
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        Matrice truffe & phishing ↗
                    </Link>
                    <Link
                        href="/moduli/modulo-03-truffe-phishing"
                        className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-primary hover:underline"
                    >
                        Guida difesa <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Alert 1 */}
                <Link
                    href="/novita/allerta-phishing-cie-rimborsi-irpef-agenzia-entrate-cert-agid-novembre-2026"
                    className="p-4 rounded-2xl border border-border/80 bg-surface/80 hover:border-amber-500/60 hover:shadow-md transition-all group flex flex-col justify-between space-y-3"
                >
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs font-semibold text-amber-600 dark:text-amber-400">
                            <KeyRound className="w-4 h-4" />
                            <span>Phishing CIE & Rimborsi IRPEF · 26-27 Nov</span>
                        </div>
                        <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors leading-snug">
                            Falsa schermata CIE livello 2 e finti rimborsi su carte
                        </h3>
                        <p className="text-xs text-secondary leading-relaxed line-clamp-3">
                            Avvisi Agenzia delle Entrate e CERT-AgID: siti clone rubano numero CIE e password con pannello live e chiedono CVV carta per falsi rimborsi IRPEF.
                        </p>
                    </div>
                    <span className="text-[11px] font-bold text-primary inline-flex items-center gap-1 pt-2 border-t border-border/40">
                        Cosa fare e verifica domini <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                    </span>
                </Link>

                {/* Alert 2 */}
                <Link
                    href="/novita/allerta-cert-agid-clickfix-cloudflare-infocamere-campagne-novembre-2026"
                    className="p-4 rounded-2xl border border-border/80 bg-surface/80 hover:border-amber-500/60 hover:shadow-md transition-all group flex flex-col justify-between space-y-3"
                >
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs font-semibold text-amber-600 dark:text-amber-400">
                            <Terminal className="w-4 h-4" />
                            <span>ClickFix, InfoCamere & APK · Bollettino CERT-AgID</span>
                        </div>
                        <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors leading-snug">
                            Finti CAPTCHA Cloudflare, InfoCamere e finta App IO
                        </h3>
                        <p className="text-xs text-secondary leading-relaxed line-clamp-3">
                            129 campagne settimanali: popup “ClickFix” chiedono di incollare comandi PowerShell (RAT Olympic), falso portale InfoCamere e falsi .apk Android.
                        </p>
                    </div>
                    <span className="text-[11px] font-bold text-primary inline-flex items-center gap-1 pt-2 border-t border-border/40">
                        Leggi il bollettino e contromisure <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                    </span>
                </Link>

                {/* Alert 3 */}
                <Link
                    href="/novita/allerta-black-friday-polizia-postale-false-pec-rimborsi-irap-agenzia-entrate"
                    className="p-4 rounded-2xl border border-border/80 bg-surface/80 hover:border-amber-500/60 hover:shadow-md transition-all group flex flex-col justify-between space-y-3"
                >
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs font-semibold text-amber-600 dark:text-amber-400">
                            <QrCode className="w-4 h-4" />
                            <span>False PEC IRAP, Black Friday & Quishing</span>
                        </div>
                        <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors leading-snug">
                            False PEC fiscali, store clone e adesivi QR truffa
                        </h3>
                        <p className="text-xs text-secondary leading-relaxed line-clamp-3">
                            Ondate di PEC con finti rimborsi IRAP, negozi clone di fine novembre e adesivi QR manomessi su parcometri e finte multe PagoPA o SEND.
                        </p>
                    </div>
                    <span className="text-[11px] font-bold text-primary inline-flex items-center gap-1 pt-2 border-t border-border/40">
                        Regole anti-frode <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                    </span>
                </Link>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-amber-500/20 text-xs text-secondary">
                <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Tutti i contenuti sono verificati con riferimenti diretti ai bollettini ufficiali delle autorità</span>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                    <Link href="/modelli/segnalazione-truffa-polizia-postale" className="font-semibold text-primary hover:underline">
                        Kit segnalazione truffa
                    </Link>
                    {variant === 'home' ? (
                        <Link href="/sos" className="font-semibold text-sos hover:underline inline-flex items-center gap-1">
                            Sei già caduto in una truffa? Apri il Centro SOS →
                        </Link>
                    ) : (
                        <Link href="/novita" className="font-semibold text-primary hover:underline inline-flex items-center gap-1">
                            Tutti i bollettini e avvisi 2026 →
                        </Link>
                    )}
                </div>
            </div>
        </aside>
    )
}
