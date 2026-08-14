'use client'

import { useEffect, useState } from 'react'
import {
    AlertTriangle, ArrowRight, CheckCircle2, Clock, Copy, Database,
    ExternalLink, Info, Phone, Printer, ShieldAlert, XCircle,
} from 'lucide-react'
import Link from 'next/link'
import { toast } from 'sonner'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ImminentDangerBanner, PhysicalDangerCallout } from '@/components/sos/ImminentDangerBanner'
import { SOS_CASES, type SosCase } from '@/data/sos-cases'
import { cn } from '@/lib/utils'

export default function SOSPage() {
    const [selected, setSelected] = useState<SosCase | null>(null)

    useEffect(() => {
        const applyHash = () => {
            const hash = window.location.hash.replace('#', '')
            if (!hash) {
                setSelected(null)
                return
            }
            const found = SOS_CASES.find((s) => s.id === hash)
            if (found) setSelected(found)
        }
        applyHash()
        window.addEventListener('hashchange', applyHash)
        return () => window.removeEventListener('hashchange', applyHash)
    }, [])

    const openCase = (item: SosCase) => {
        setSelected(item)
        window.location.hash = item.id
    }

    const closeCase = () => {
        setSelected(null)
        window.history.pushState(null, '', '/sos')
    }

    const physical = SOS_CASES.filter((c) => c.kind === 'physical')
    const mixed = SOS_CASES.filter((c) => c.kind === 'mixed')
    const digital = SOS_CASES.filter((c) => c.kind === 'digital')

    return (
        <Container size="lg" className="py-8 min-h-screen space-y-10">
            <ImminentDangerBanner />

            <header className="space-y-4 max-w-3xl print:hidden">
                <p className="text-xs font-semibold uppercase tracking-widest text-sos">Centro SOS</p>
                <h1 className="text-4xl md:text-6xl font-display font-semibold tracking-tight text-foreground">
                    Prima le forze dell&apos;ordine. Poi i protocolli.
                </h1>
                <p className="text-lg text-secondary leading-relaxed">
                    Busssola non è Polizia, Carabinieri o Pronto Soccorso. Se c&apos;è pericolo per una persona, l&apos;unica cosa da fare è chiamare il 112. I protocolli sotto servono solo quando non c&apos;è un&apos;emergenza in corso.
                </p>
            </header>

            {!selected ? (
                <div className="space-y-12 print:hidden">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-display font-semibold">Pericolo per l&apos;incolumità</h2>
                        <p className="text-secondary">Nessuna guida: solo 112.</p>
                        <div className="grid md:grid-cols-3 gap-4">
                            {physical.map((item) => (
                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => openCase(item)}
                                    className="text-left p-6 rounded-2xl border-2 border-sos bg-sos-bg hover:bg-sos/10"
                                >
                                    <ShieldAlert className="w-6 h-6 text-sos mb-3" />
                                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                                    <p className="text-sm text-secondary mt-2">{item.summary}</p>
                                    <span className="mt-4 inline-flex items-center gap-2 text-sos font-semibold text-sm">
                                        Chiama 112 <Phone className="w-4 h-4" />
                                    </span>
                                </button>
                            ))}
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-display font-semibold">Urgenze miste</h2>
                        <p className="text-secondary">Se diventa fisico, chiudi e chiama il 112. Altrimenti segui il protocollo.</p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {mixed.map((item) => (
                                <CaseCard key={item.id} item={item} onOpen={openCase} />
                            ))}
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-display font-semibold">Emergenze digitali</h2>
                        <p className="text-secondary">Protocolli operativi. Restano subordinati al 112 se c&apos;è pericolo fisico.</p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {digital.map((item) => (
                                <CaseCard key={item.id} item={item} onOpen={openCase} />
                            ))}
                        </div>
                    </section>
                </div>
            ) : (
                <CaseDetail item={selected} onBack={closeCase} />
            )}
        </Container>
    )
}

function CaseCard({ item, onOpen }: { item: SosCase; onOpen: (item: SosCase) => void }) {
    return (
        <button
            type="button"
            onClick={() => onOpen(item)}
            className="text-left p-6 rounded-2xl border border-border bg-surface hover:border-sos/40"
        >
            <h3 className="font-semibold text-foreground">{item.title}</h3>
            <p className="text-sm text-secondary mt-2 line-clamp-3">{item.summary}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Apri protocollo <ArrowRight className="w-4 h-4" />
            </span>
        </button>
    )
}

function CaseDetail({ item, onBack }: { item: SosCase; onBack: () => void }) {
    const isPhysical = item.kind === 'physical'

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between print:hidden">
                <button type="button" onClick={onBack} className="text-sm font-semibold text-primary">
                    ← Tutti i casi SOS
                </button>
                <Button onClick={() => window.print()} variant="outline" size="sm">
                    <Printer className="w-4 h-4 mr-2" /> Stampa
                </Button>
            </div>

            <Card className={cn('p-8 md:p-10 space-y-8', isPhysical && 'border-2 border-sos')}>
                <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-widest text-sos">
                        {isPhysical ? 'Solo forze dell’ordine' : 'Protocollo SOS'}
                    </p>
                    <h2 className="text-3xl md:text-4xl font-display font-semibold">{item.title}</h2>
                    <p className="text-secondary text-lg">{item.summary}</p>
                </div>

                {isPhysical ? (
                    <div className="space-y-4">
                        <a
                            href="tel:112"
                            className="flex items-center justify-center gap-3 w-full py-5 rounded-2xl bg-sos text-white text-xl font-semibold"
                        >
                            <Phone className="w-6 h-6" /> Chiama 112
                        </a>
                        <p className="text-sm text-secondary">
                            Non ci sono altre azioni primarie. Non aprire guide, modelli o checklist finché non sei al sicuro.
                        </p>
                    </div>
                ) : (
                    <>
                        <PhysicalDangerCallout />
                        <a
                            href={item.primaryAction.href}
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-sos text-white font-semibold px-6 py-3"
                        >
                            <Phone className="w-4 h-4" /> {item.primaryAction.label}
                        </a>
                    </>
                )}

                {!isPhysical && (
                    <div className="grid md:grid-cols-2 gap-6">
                        <ProtocolList title="Primi minuti" icon={Clock} tone="success" items={item.first10Min} />
                        <ProtocolList title="Cosa non fare" icon={XCircle} tone="danger" items={item.doNot} />
                        <ProtocolList title="Poi" icon={CheckCircle2} tone="info" items={item.doNow} />
                        <ProtocolList title="Salva le prove" icon={Database} tone="warning" items={item.saveEvidence} />
                    </div>
                )}

                {isPhysical && (
                    <ProtocolList title="Se l’operatore te lo chiede" icon={Clock} tone="danger" items={item.first10Min} />
                )}

                <section className="space-y-3">
                    <h3 className="font-semibold flex items-center gap-2"><Phone className="w-4 h-4" /> Chi contattare</h3>
                    <ul className="space-y-2">
                        {item.whoToContact.map((c) => (
                            <li key={c} className="text-secondary">{c}</li>
                        ))}
                    </ul>
                    <p className="text-sm bg-sos-bg border border-sos/20 rounded-xl p-4">
                        <strong>Quando il 112:</strong> {item.whenToCall112}
                    </p>
                </section>

                <section className="space-y-2 text-sm">
                    <h3 className="font-semibold">Fonti ufficiali</h3>
                    <ul className="space-y-1">
                        {item.sources.map((s) => (
                            <li key={s.url}>
                                {s.url.startsWith('tel:') ? (
                                    <a href={s.url} className="text-primary underline">{s.title} — {s.organization}</a>
                                ) : (
                                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-primary underline inline-flex items-center gap-1">
                                        {s.title} — {s.organization} <ExternalLink className="w-3 h-3" />
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </section>

                {!isPhysical && (
                    <div className="flex flex-wrap gap-3 pt-4 border-t border-border print:hidden">
                        <Button asChild variant="outline">
                            <Link href={item.moduleLink}>Guida collegata</Link>
                        </Button>
                        <Button
                            variant="ghost"
                            onClick={() => {
                                navigator.clipboard.writeText(`${item.title}: ${item.whenToCall112}`)
                                toast.success('Promemoria copiato')
                            }}
                        >
                            <Copy className="w-4 h-4 mr-2" /> Copia quando chiamare il 112
                        </Button>
                    </div>
                )}

                <p className="text-xs text-muted flex items-start gap-2">
                    <Info className="w-4 h-4 shrink-0 mt-0.5" />
                    Busssola è informativo. Non sostituisce forze dell&apos;ordine, 112, 118, 1522 o 114.
                </p>
            </Card>
        </div>
    )
}

function ProtocolList({
    title,
    icon: Icon,
    items,
    tone,
}: {
    title: string
    icon: typeof Clock
    items: string[]
    tone: 'success' | 'danger' | 'info' | 'warning'
}) {
    const tones = {
        success: 'bg-success-bg border-success/20',
        danger: 'bg-sos-bg border-sos/20',
        info: 'bg-info-bg border-info/20',
        warning: 'bg-warning-bg border-warning/20',
    }
    return (
        <section className="space-y-3">
            <h3 className="font-semibold flex items-center gap-2">
                <Icon className="w-4 h-4" /> {title}
            </h3>
            <ul className="space-y-2">
                {items.map((step) => (
                    <li key={step} className={cn('p-3 rounded-xl border text-sm text-secondary', tones[tone])}>
                        {step}
                    </li>
                ))}
            </ul>
        </section>
    )
}
