'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import {
    Gift,
    ArrowRight,
    RotateCcw,
    Printer,
    ExternalLink,
    Info,
    Users,
} from 'lucide-react'
import { BENEFITS_CATALOG } from '@/data/tools/benefitsData'

type EmploymentType = 'dipendente' | 'autonomo' | 'disoccupato' | 'pensionato' | 'studente'

export function TrovaBonusClient() {
    const [familyMembers, setFamilyMembers] = useState<number>(3)
    const [hasMinorChildren, setHasMinorChildren] = useState<boolean>(true)
    const [hasDependentChildrenUnder21, setHasDependentChildrenUnder21] = useState<boolean>(false)
    const [hasChildrenUnder3, setHasChildrenUnder3] = useState<boolean>(false)
    const [hasAge18, setHasAge18] = useState<boolean>(false)
    const [hasDisability, setHasDisability] = useState<boolean>(false)
    const [hasRent, setHasRent] = useState<boolean>(false)
    const [isSingleParent, setIsSingleParent] = useState<boolean>(false)
    const [iseeRange, setIseeRange] = useState<string>('under_15k')
    const [employmentType, setEmploymentType] = useState<EmploymentType>('dipendente')

    const matchedBenefits = useMemo(() => {
        // Parse ISEE upper bound
        let iseeValue: number = 999999
        if (iseeRange === 'under_9k') iseeValue = 9530
        else if (iseeRange === 'under_15k') iseeValue = 15000
        else if (iseeRange === 'under_20k') iseeValue = 20000
        else if (iseeRange === 'under_35k') iseeValue = 35000
        else if (iseeRange === 'under_40k') iseeValue = 40000
        else if (iseeRange === 'over_40k') iseeValue = 999999
        else if (iseeRange === 'no_isee') iseeValue = -1 // Unknown

        return BENEFITS_CATALOG.filter((item) => {
            // Check children requirements
            if (item.minChildren && item.minChildren > 0) {
                const hasAnyChild = hasMinorChildren || hasDependentChildrenUnder21 || hasChildrenUnder3
                if (!hasAnyChild) return false
            }

            // Check toddler for asilo nido
            if (item.requiresUnder3 && !hasChildrenUnder3) {
                return false
            }

            // Check 18 year old
            if (item.requiresAge18 && !hasAge18) {
                return false
            }

            // Check disability
            if (item.requiresDisability && !hasDisability) {
                return false
            }

            // Check rent
            if (item.requiresRent && !hasRent) {
                return false
            }

            // Check single parent
            if (item.requiresSingleParent && !isSingleParent) {
                return false
            }

            // Check ISEE threshold if known
            if (iseeValue !== -1 && item.maxIsee && item.maxIsee > 0) {
                // Special rule for bonus sociale: 20k threshold if 4+ members
                if (item.id === 'bonus-sociale-bollette' && familyMembers >= 4) {
                    if (iseeValue > 20000) return false
                } else if (iseeValue > item.maxIsee) {
                    return false
                }
            }

            // Check employment type if specific
            if (item.eligibleEmployment && item.eligibleEmployment.length > 0) {
                if (!item.eligibleEmployment.includes(employmentType)) {
                    return false
                }
            }

            // Carta Dedicata a Te requires at least 3 members
            if (item.id === 'carta-dedicata-a-te' && familyMembers < 3) {
                return false
            }

            return true
        })
    }, [
        familyMembers,
        hasMinorChildren,
        hasDependentChildrenUnder21,
        hasChildrenUnder3,
        hasAge18,
        hasDisability,
        hasRent,
        isSingleParent,
        iseeRange,
        employmentType,
    ])

    const resetForm = () => {
        setFamilyMembers(3)
        setHasMinorChildren(true)
        setHasDependentChildrenUnder21(false)
        setHasChildrenUnder3(false)
        setHasAge18(false)
        setHasDisability(false)
        setHasRent(false)
        setIsSingleParent(false)
        setIseeRange('under_15k')
        setEmploymentType('dipendente')
    }

    return (
        <div className="space-y-10">
            {/* Form Section */}
            <div className="bg-surface border border-border rounded-xl p-6 md:p-8 space-y-6 shadow-sm">
                <div className="border-b border-border/50 pb-4">
                    <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground">
                        Imposta la situazione del tuo nucleo familiare
                    </h2>
                    <p className="text-xs md:text-sm text-secondary mt-1">
                        Modifica le opzioni per vedere in tempo reale quali sostegni pubblici potrebbero spettarti.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Componenti familiari */}
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                            <Users className="w-4 h-4 text-primary" />
                            Numero di componenti nel nucleo anagrafico
                        </label>
                        <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((num) => (
                                <button
                                    key={num}
                                    type="button"
                                    onClick={() => setFamilyMembers(num)}
                                    className={`flex-1 py-2 text-xs font-semibold rounded-lg border transition-all ${
                                        familyMembers === num
                                            ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                                            : 'bg-surface hover:bg-surface-muted border-border text-foreground'
                                    }`}
                                >
                                    {num === 5 ? '5+' : num}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Fascia ISEE */}
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-foreground block">
                            Fascia ISEE ordinario presunta
                        </label>
                        <select
                            value={iseeRange}
                            onChange={(e) => setIseeRange(e.target.value)}
                            className="w-full px-3 py-2 text-xs md:text-sm bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                            <option value="under_9k">Fino a 9.530€ (Disagio economico acuto)</option>
                            <option value="under_15k">Tra 9.531€ e 15.000€ (Soglia Carta Dedicata a Te)</option>
                            <option value="under_20k">Tra 15.001€ e 20.000€</option>
                            <option value="under_35k">Tra 20.001€ e 35.000€</option>
                            <option value="under_40k">Tra 35.001€ e 40.000€ (Soglia Bonus Asilo Nido)</option>
                            <option value="over_40k">Oltre 40.000€</option>
                            <option value="no_isee">Non possiedo l&apos;ISEE / Non lo so</option>
                        </select>
                    </div>

                    {/* Situazione lavorativa */}
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-foreground block">
                            Situazione lavorativa prevalente
                        </label>
                        <select
                            value={employmentType}
                            onChange={(e) => setEmploymentType(e.target.value as EmploymentType)}
                            className="w-full px-3 py-2 text-xs md:text-sm bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                            <option value="dipendente">Lavoratore Dipendente (Pubblico o Privato)</option>
                            <option value="autonomo">Lavoratore Autonomo / Partita IVA / Professionista</option>
                            <option value="disoccupato">Inoccupato o Disoccupato (in cerca di lavoro)</option>
                            <option value="pensionato">Pensionato / Titolare di trattamento INPS</option>
                            <option value="studente">Studente a carico</option>
                        </select>
                    </div>

                    {/* Figli e Minori */}
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-foreground block">
                            Presenza di figli a carico
                        </label>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                            <label className="flex items-center gap-2 p-2 rounded-lg border border-border bg-surface hover:bg-surface-muted cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={hasMinorChildren}
                                    onChange={(e) => setHasMinorChildren(e.target.checked)}
                                    className="rounded border-border text-primary focus:ring-primary"
                                />
                                <span>Figli minori (0-17 anni)</span>
                            </label>

                            <label className="flex items-center gap-2 p-2 rounded-lg border border-border bg-surface hover:bg-surface-muted cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={hasChildrenUnder3}
                                    onChange={(e) => setHasChildrenUnder3(e.target.checked)}
                                    className="rounded border-border text-primary focus:ring-primary"
                                />
                                <span>Figli 0-3 anni (Nido)</span>
                            </label>

                            <label className="flex items-center gap-2 p-2 rounded-lg border border-border bg-surface hover:bg-surface-muted cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={hasDependentChildrenUnder21}
                                    onChange={(e) => setHasDependentChildrenUnder21(e.target.checked)}
                                    className="rounded border-border text-primary focus:ring-primary"
                                />
                                <span>Figli 18-21 studenti</span>
                            </label>

                            <label className="flex items-center gap-2 p-2 rounded-lg border border-border bg-surface hover:bg-surface-muted cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={hasAge18}
                                    onChange={(e) => setHasAge18(e.target.checked)}
                                    className="rounded border-border text-primary focus:ring-primary"
                                />
                                <span>Diciottenni (18 anni)</span>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Condizioni aggiuntive */}
                <div className="border-t border-border/50 pt-4 space-y-2">
                    <span className="text-xs font-semibold text-foreground block">
                        Condizioni particolari del nucleo
                    </span>
                    <div className="flex flex-wrap gap-3 text-xs">
                        <label className="flex items-center gap-2 p-2.5 rounded-lg border border-border bg-surface hover:bg-surface-muted cursor-pointer">
                            <input
                                type="checkbox"
                                checked={hasRent}
                                onChange={(e) => setHasRent(e.target.checked)}
                                className="rounded border-border text-primary focus:ring-primary"
                            />
                            <span>Abitazione principale in affitto con contratto registrato</span>
                        </label>

                        <label className="flex items-center gap-2 p-2.5 rounded-lg border border-border bg-surface hover:bg-surface-muted cursor-pointer">
                            <input
                                type="checkbox"
                                checked={hasDisability}
                                onChange={(e) => setHasDisability(e.target.checked)}
                                className="rounded border-border text-primary focus:ring-primary"
                            />
                            <span>Presenza di invalidità civile o riconoscimento Legge 104</span>
                        </label>

                        <label className="flex items-center gap-2 p-2.5 rounded-lg border border-border bg-surface hover:bg-surface-muted cursor-pointer">
                            <input
                                type="checkbox"
                                checked={isSingleParent}
                                onChange={(e) => setIsSingleParent(e.target.checked)}
                                className="rounded border-border text-primary focus:ring-primary"
                            />
                            <span>Genitore unico / nucleo monogenitoriale</span>
                        </label>
                    </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                    <button
                        type="button"
                        onClick={resetForm}
                        className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-foreground transition-colors"
                    >
                        <RotateCcw className="w-3.5 h-3.5" />
                        Reimposta criteri
                    </button>
                    <button
                        type="button"
                        onClick={() => window.print()}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-surface-muted hover:bg-surface text-xs font-semibold text-secondary hover:text-foreground transition-all"
                    >
                        <Printer className="w-3.5 h-3.5" />
                        Stampa o Salva PDF
                    </button>
                </div>
            </div>

            {/* Results Section */}
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground">
                            Agevolazioni compatibili con il tuo profilo: {matchedBenefits.length}
                        </h3>
                        <p className="text-xs text-muted mt-0.5">
                            Risultati orientativi ordinati per pertinenza rispetto ai criteri selezionati.
                        </p>
                    </div>
                </div>

                {matchedBenefits.length === 0 ? (
                    <div className="p-8 text-center bg-surface border border-dashed border-border rounded-xl space-y-3">
                        <Gift className="w-10 h-10 text-muted mx-auto" />
                        <h4 className="font-semibold text-foreground">Nessun beneficio specifico trovato con questi filtri</h4>
                        <p className="text-xs text-secondary max-w-md mx-auto">
                            Prova a modificare la fascia ISEE o a selezionare condizioni come la presenza di minori, contratto di locazione o disabilità.
                        </p>
                    </div>
                ) : (
                    <div className="grid gap-6">
                        {matchedBenefits.map((b) => (
                            <article
                                key={b.id}
                                className="bg-surface border border-border rounded-xl p-6 md:p-8 space-y-4 hover:border-primary/60 transition-all shadow-sm"
                            >
                                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/50 pb-3">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-surface-muted text-secondary border border-border">
                                            {b.officialEntity}
                                        </span>
                                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                                            {b.badge}
                                        </span>
                                    </div>
                                    <span className="text-xs text-muted font-mono">{b.applicabilityYear}</span>
                                </div>

                                <div>
                                    <h4 className="text-xl font-display font-semibold text-foreground mb-1">
                                        {b.title}
                                    </h4>
                                    <p className="text-xs md:text-sm text-secondary leading-relaxed">
                                        {b.summary}
                                    </p>
                                </div>

                                {/* Benefit Amount Box */}
                                <div className="p-3.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs">
                                    <strong className="text-emerald-950 dark:text-emerald-200 block mb-0.5">
                                        Stima del beneficio economico:
                                    </strong>
                                    <span className="text-emerald-900/90 dark:text-emerald-300 font-medium">
                                        {b.amountEstimate}
                                    </span>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs bg-surface-muted p-4 rounded-lg border border-border/40">
                                    <div className="space-y-1">
                                        <strong className="text-foreground block font-semibold">
                                            Perché potrebbe spettarti:
                                        </strong>
                                        <p className="text-secondary leading-relaxed">{b.whyApplies}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <strong className="text-foreground block font-semibold">
                                            Cosa devi verificare:
                                        </strong>
                                        <p className="text-secondary leading-relaxed">{b.missingCheck}</p>
                                    </div>
                                </div>

                                <div className="pt-3 border-t border-border/40 flex flex-wrap items-center justify-between gap-3 text-xs">
                                    <Link
                                        href={b.guideUrl}
                                        className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
                                    >
                                        Leggi la guida pratica su Busssola
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                    <a
                                        href={b.officialUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-muted hover:text-foreground transition-colors"
                                    >
                                        Portale ufficiale {b.officialEntity}
                                        <ExternalLink className="w-3 h-3" />
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </div>

            {/* Orientation Disclaimer */}
            <div className="p-5 rounded-xl border border-border/70 bg-surface-muted text-xs text-secondary space-y-2">
                <div className="flex items-center gap-2 font-semibold text-foreground">
                    <Info className="w-4 h-4 text-primary" />
                    <span>Importante: Natura dello strumento di orientamento</span>
                </div>
                <p className="leading-relaxed">
                    Questo questionario incrocia i criteri normativi ufficiali della legislazione italiana per facilitare la scoperta dei diritti e delle agevolazioni. <strong>Non costituisce una consulenza professionale né un accertamento formale dell’INPS o dei Comuni</strong>. Gli importi definitivi e l’accoglimento delle domande dipendono esclusivamente dalla verifica delle istanze telematiche presentate agli enti preposti corredate da DSU ISEE valida.
                </p>
            </div>
        </div>
    )
}
