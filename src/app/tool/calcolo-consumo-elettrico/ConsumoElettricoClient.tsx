'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import {
    Coins,
    Lightbulb,
    RotateCcw,
    CheckCircle2,
} from 'lucide-react'
import { APPLIANCES_LIST, type ApplianceItem } from '@/data/tools/appliancesData'

export function ConsumoElettricoClient() {
    const [kwhPrice, setKwhPrice] = useState<number>(0.25) // 0.25 €/kWh baseline ARERA
    const [selectedAppliances, setSelectedAppliances] = useState<Record<string, { active: boolean; hoursOrCycles: number }>>(() => {
        const initial: Record<string, { active: boolean; hoursOrCycles: number }> = {}
        APPLIANCES_LIST.forEach((app) => {
            initial[app.id] = {
                active: ['condizionatore', 'lavatrice', 'frigorifero', 'lavastoviglie'].includes(app.id),
                hoursOrCycles: app.defaultHoursOrCyclesDaily,
            }
        })
        return initial
    })

    const toggleAppliance = (id: string) => {
        setSelectedAppliances((prev) => ({
            ...prev,
            [id]: {
                ...prev[id],
                active: !prev[id]?.active,
            },
        }))
    }

    const setUsage = (id: string, val: number) => {
        setSelectedAppliances((prev) => ({
            ...prev,
            [id]: {
                ...prev[id],
                hoursOrCycles: val,
            },
        }))
    }

    const stats = useMemo(() => {
        let totalDailyKwh = 0
        const itemsBreakdown: Array<{
            item: ApplianceItem
            dailyKwh: number
            monthlyKwh: number
            annualKwh: number
            monthlyCost: number
            annualCost: number
        }> = []

        APPLIANCES_LIST.forEach((item) => {
            const state = selectedAppliances[item.id]
            if (state?.active) {
                // average wattage in kW
                const kw = item.averageWattage / 1000
                const dailyKwh = kw * state.hoursOrCycles
                const monthlyKwh = dailyKwh * 30
                const annualKwh = dailyKwh * 365
                const monthlyCost = monthlyKwh * kwhPrice
                const annualCost = annualKwh * kwhPrice

                totalDailyKwh += dailyKwh
                itemsBreakdown.push({
                    item,
                    dailyKwh,
                    monthlyKwh,
                    annualKwh,
                    monthlyCost,
                    annualCost,
                })
            }
        })

        const totalMonthlyKwh = totalDailyKwh * 30
        const totalAnnualKwh = totalDailyKwh * 365
        const totalMonthlyCost = totalMonthlyKwh * kwhPrice
        const totalAnnualCost = totalAnnualKwh * kwhPrice

        // Sort items by cost descending
        itemsBreakdown.sort((a, b) => b.annualCost - a.annualCost)

        return {
            totalDailyKwh,
            totalMonthlyKwh,
            totalAnnualKwh,
            totalMonthlyCost,
            totalAnnualCost,
            itemsBreakdown,
        }
    }, [selectedAppliances, kwhPrice])

    const resetDefaults = () => {
        setKwhPrice(0.25)
        const initial: Record<string, { active: boolean; hoursOrCycles: number }> = {}
        APPLIANCES_LIST.forEach((app) => {
            initial[app.id] = {
                active: ['condizionatore', 'lavatrice', 'frigorifero', 'lavastoviglie'].includes(app.id),
                hoursOrCycles: app.defaultHoursOrCyclesDaily,
            }
        })
        setSelectedAppliances(initial)
    }

    const formatCur = (v: number) => {
        return new Intl.NumberFormat('it-IT', {
            style: 'currency',
            currency: 'EUR',
            maximumFractionDigits: 2,
        }).format(v)
    }

    return (
        <div className="space-y-10">
            {/* Tariff Configuration Card */}
            <div className="bg-surface border border-border rounded-xl p-6 md:p-8 space-y-4 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/50 pb-4">
                    <div>
                        <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground">
                            Tariffa Energetica e Costo della Materia Prima
                        </h2>
                        <p className="text-xs md:text-sm text-secondary mt-1">
                            Il costo medio al kWh in bolletta (inclusi oneri di rete e accise) si attesta tipicamente tra 0,22€ e 0,30€/kWh.
                        </p>
                    </div>

                    <div className="flex items-center gap-2 bg-surface-muted px-4 py-2 rounded-xl border border-border shrink-0">
                        <Coins className="w-5 h-5 text-primary" />
                        <div className="text-right">
                            <span className="text-[11px] text-muted block uppercase font-semibold">Costo applicato</span>
                            <span className="text-lg font-bold font-mono text-foreground">
                                {kwhPrice.toFixed(2)} € / kWh
                            </span>
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold text-foreground">
                        <span>Regola il costo per kilowattora (€/kWh)</span>
                        <span className="font-mono">{kwhPrice.toFixed(2)} €</span>
                    </div>
                    <input
                        type="range"
                        min={0.15}
                        max={0.50}
                        step={0.01}
                        value={kwhPrice}
                        onChange={(e) => setKwhPrice(Number(e.target.value))}
                        className="w-full h-2 bg-surface-muted rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex justify-between text-[11px] text-muted font-mono">
                        <span>0,15 € (Offerte convenienti)</span>
                        <span>0,25 € (Media ARERA)</span>
                        <span>0,35 €</span>
                        <span>0,50 € (Mercato tutelato di picco)</span>
                    </div>
                </div>
            </div>

            {/* Total Results Summary Hero */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-surface border-2 border-primary/60 rounded-2xl p-6 md:p-8 space-y-3 shadow-md relative">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted">
                        Spesa Energetica Mensile Stimata
                    </span>
                    <div className="text-4xl md:text-5xl font-display font-bold text-foreground">
                        {formatCur(stats.totalMonthlyCost)}
                        <span className="text-lg md:text-xl text-muted font-normal"> / mese</span>
                    </div>
                    <p className="text-xs text-secondary leading-relaxed">
                        Pari a un consumo di <strong>{stats.totalMonthlyKwh.toFixed(1)} kWh</strong> al mese per gli elettrodomestici selezionati.
                    </p>
                </div>

                <div className="bg-surface border border-border rounded-2xl p-6 md:p-8 space-y-3 shadow-sm">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted">
                        Spesa Elettrica Totale Annuale
                    </span>
                    <div className="text-4xl md:text-5xl font-display font-bold text-foreground">
                        {formatCur(stats.totalAnnualCost)}
                        <span className="text-lg md:text-xl text-muted font-normal"> / anno</span>
                    </div>
                    <p className="text-xs text-secondary leading-relaxed">
                        Consumo complessivo stimato in <strong>{stats.totalAnnualKwh.toFixed(0)} kWh</strong> all’anno.
                    </p>
                </div>
            </div>

            {/* Appliances Selector List */}
            <div className="bg-surface border border-border rounded-xl p-6 md:p-8 space-y-6 shadow-sm">
                <div className="flex items-center justify-between border-b border-border/50 pb-4">
                    <div>
                        <h3 className="text-xl font-display font-semibold text-foreground">
                            Seleziona i tuoi elettrodomestici e il loro utilizzo
                        </h3>
                        <p className="text-xs text-secondary mt-0.5">
                            Attiva o disattiva i dispositivi presenti in casa e modifica le ore d’uso giornaliere o i cicli settimanali.
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={resetDefaults}
                        className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-foreground transition-colors"
                    >
                        <RotateCcw className="w-3.5 h-3.5" />
                        Reimposta
                    </button>
                </div>

                <div className="grid gap-4">
                    {APPLIANCES_LIST.map((app) => {
                        const isSelected = selectedAppliances[app.id]?.active ?? false
                        const currentUsage = selectedAppliances[app.id]?.hoursOrCycles ?? app.defaultHoursOrCyclesDaily
                        const currentCostYear = (app.averageWattage / 1000) * currentUsage * 365 * kwhPrice

                        return (
                            <div
                                key={app.id}
                                className={`p-4 md:p-5 rounded-xl border transition-all ${
                                    isSelected
                                        ? 'bg-surface border-primary/50 shadow-sm'
                                        : 'bg-surface-muted/40 border-border opacity-70 hover:opacity-100'
                                }`}
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div className="flex items-start gap-3">
                                        <input
                                            type="checkbox"
                                            id={`app-${app.id}`}
                                            checked={isSelected}
                                            onChange={() => toggleAppliance(app.id)}
                                            className="w-5 h-5 rounded border-border text-primary focus:ring-primary mt-0.5 cursor-pointer"
                                        />
                                        <div>
                                            <label
                                                htmlFor={`app-${app.id}`}
                                                className="font-display font-semibold text-sm md:text-base text-foreground cursor-pointer block"
                                            >
                                                {app.name}
                                            </label>
                                            <span className="text-xs text-muted">
                                                Potenza media assorbita: ~{app.averageWattage} Watt ({app.unitType})
                                            </span>
                                        </div>
                                    </div>

                                    {isSelected && (
                                        <div className="flex items-center gap-4 pl-8 md:pl-0">
                                            <div className="space-y-1">
                                                <div className="flex justify-between text-xs text-secondary gap-2">
                                                    <span>Uso giornaliero:</span>
                                                    <strong className="text-foreground font-mono">
                                                        {currentUsage} {app.unitType === 'ore' ? 'ore/giorno' : 'cicli/giorno'}
                                                    </strong>
                                                </div>
                                                <input
                                                    type="range"
                                                    min={app.unitType === 'ore' ? 0.5 : 0.2}
                                                    max={app.unitType === 'ore' ? 24 : 4}
                                                    step={app.unitType === 'ore' ? 0.5 : 0.2}
                                                    value={currentUsage}
                                                    onChange={(e) => setUsage(app.id, Number(e.target.value))}
                                                    className="w-36 md:w-44 h-1.5 bg-surface-muted rounded-lg appearance-none cursor-pointer accent-primary"
                                                />
                                            </div>

                                            <div className="text-right min-w-24">
                                                <span className="text-[11px] text-muted block">Spesa annua</span>
                                                <span className="text-sm font-bold text-primary font-mono">
                                                    {formatCur(currentCostYear)}
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {isSelected && (
                                    <div className="mt-3 pt-3 border-t border-border/40 text-xs text-secondary flex items-start gap-2 pl-8 md:pl-0">
                                        <Lightbulb className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                                        <span>
                                            <strong className="text-foreground font-semibold">Consiglio ENEA: </strong>
                                            {app.efficiencyTip}
                                        </span>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Ranking of Top Consumers */}
            <div className="bg-surface border border-border rounded-xl p-6 md:p-8 space-y-4 shadow-sm">
                <h3 className="text-lg font-display font-semibold text-foreground">
                    Classifica dei tuoi elettrodomestici più costosi
                </h3>
                <div className="space-y-3">
                    {stats.itemsBreakdown.map((row, idx) => (
                        <div
                            key={row.item.id}
                            className="p-3.5 rounded-lg bg-surface-muted border border-border/40 flex items-center justify-between text-xs"
                        >
                            <div className="flex items-center gap-3">
                                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-xs">
                                    {idx + 1}
                                </span>
                                <div>
                                    <strong className="text-foreground block font-semibold">{row.item.name}</strong>
                                    <span className="text-muted">
                                        {row.annualKwh.toFixed(0)} kWh/anno ({((row.annualCost / (stats.totalAnnualCost || 1)) * 100).toFixed(1)}% del totale)
                                    </span>
                                </div>
                            </div>
                            <div className="text-right">
                                <strong className="text-foreground font-mono font-bold block">{formatCur(row.monthlyCost)} / mese</strong>
                                <span className="text-muted">{formatCur(row.annualCost)} / anno</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Energy Saving Guide Link */}
            <div className="p-4 rounded-xl border border-border/60 bg-surface-muted flex items-center justify-between flex-wrap gap-3 text-xs text-secondary">
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Dati e consumi medi allineati alle pubblicazioni dell&apos;ENEA e dell&apos;Autorità di Regolazione per Energia Reti e Ambiente (ARERA).</span>
                </div>
                <Link href="/moduli/modulo-24-casa-digitale" className="font-semibold text-primary hover:underline">
                    Guida al risparmio energetico e domotica ↗
                </Link>
            </div>
        </div>
    )
}
