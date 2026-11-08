'use client'

import { useState, useMemo } from 'react'
import {
    Info,
} from 'lucide-react'

const REGIONAL_RATES: Record<string, { name: string; rate: number }> = {
    lombardia: { name: 'Lombardia', rate: 0.014 },
    lazio: { name: 'Lazio', rate: 0.021 },
    veneto: { name: 'Veneto', rate: 0.015 },
    piemonte: { name: 'Piemonte', rate: 0.021 },
    emilia: { name: 'Emilia-Romagna', rate: 0.018 },
    campania: { name: 'Campania', rate: 0.021 },
    toscana: { name: 'Toscana', rate: 0.016 },
    sicilia: { name: 'Sicilia', rate: 0.017 },
    puglia: { name: 'Puglia', rate: 0.018 },
    liguria: { name: 'Liguria', rate: 0.017 },
    marche: { name: 'Marche', rate: 0.017 },
    friuli: { name: 'Friuli-Venezia Giulia', rate: 0.014 },
    abruzzo: { name: 'Abruzzo', rate: 0.017 },
    trentino: { name: 'Trentino-Alto Adige', rate: 0.013 },
    umbria: { name: 'Umbria', rate: 0.017 },
    calabria: { name: 'Calabria', rate: 0.021 },
    sardegna: { name: 'Sardegna', rate: 0.016 },
    molise: { name: 'Molise', rate: 0.021 },
    basilicata: { name: 'Basilicata', rate: 0.016 },
    aosta: { name: 'Valle d’Aosta', rate: 0.012 },
}

export function StipendioNettoClient() {
    const [ral, setRal] = useState<number>(30000)
    const [months, setMonths] = useState<number>(13)
    const [contractType, setContractType] = useState<'standard' | 'apprendistato'>('standard')
    const [selectedRegion, setSelectedRegion] = useState<string>('lombardia')
    const [hasDependentSpouse, setHasDependentSpouse] = useState<boolean>(false)

    const calculation = useMemo(() => {
        // 1. Contributi previdenziali IVS a carico del lavoratore
        const ivsRate = contractType === 'apprendistato' ? 0.0584 : 0.0919
        const ivsContributions = ral * ivsRate

        // 2. Imponibile Fiscale IRPEF
        const taxableIncome = Math.max(0, ral - ivsContributions)

        // 3. IRPEF Lorda calcolata sui 3 scaglioni vigenti:
        // - fino a 28.000€: 23%
        // - da 28.001€ a 50.000€: 35%
        // - oltre 50.000€: 43%
        let grossIrpef = 0
        if (taxableIncome <= 28000) {
            grossIrpef = taxableIncome * 0.23
        } else if (taxableIncome <= 50000) {
            grossIrpef = 28000 * 0.23 + (taxableIncome - 28000) * 0.35
        } else {
            grossIrpef = 28000 * 0.23 + (50000 - 28000) * 0.35 + (taxableIncome - 50000) * 0.43
        }

        // 4. Detrazione da lavoro dipendente (art. 13 TUIR)
        let workDeduction = 0
        if (taxableIncome <= 15000) {
            workDeduction = 1955
        } else if (taxableIncome <= 28000) {
            workDeduction = 1910 + 1190 * ((28000 - taxableIncome) / 13000)
        } else if (taxableIncome <= 50000) {
            workDeduction = 1910 * ((50000 - taxableIncome) / 22000)
        } else {
            workDeduction = 0
        }

        // 5. Detrazione coniuge a carico (art. 12 TUIR)
        let spouseDeduction = 0
        if (hasDependentSpouse) {
            if (taxableIncome <= 15000) {
                spouseDeduction = 800 - 110 * (taxableIncome / 15000)
            } else if (taxableIncome <= 40000) {
                spouseDeduction = 690
            } else if (taxableIncome <= 80000) {
                spouseDeduction = 690 * ((80000 - taxableIncome) / 40000)
            }
        }

        const totalDeductions = workDeduction + spouseDeduction

        // 6. IRPEF Netta
        const netIrpef = Math.max(0, grossIrpef - totalDeductions)

        // 7. Addizionali regionali e comunali
        const regRate = REGIONAL_RATES[selectedRegion]?.rate || 0.017
        const regionalTax = taxableIncome * regRate
        const municipalTax = taxableIncome * 0.008 // Stima media aliquota comunale 0,8%
        const totalAddizionali = regionalTax + municipalTax

        // 8. Netto Annuo e Netto Mensile
        const netAnnual = Math.max(0, taxableIncome - netIrpef - totalAddizionali)
        const netMonthly = netAnnual / months

        // 9. Costo aziendale indicativo (RAL + contributi c/azienda ~28% + TFR 7.41% + INAIL ~2%)
        const companyCost = ral * 1.34

        // Percentuali per grafico di distribuzione
        const netPercent = (netAnnual / ral) * 100
        const ivsPercent = (ivsContributions / ral) * 100
        const taxesPercent = ((netIrpef + totalAddizionali) / ral) * 100

        return {
            ivsContributions,
            taxableIncome,
            grossIrpef,
            workDeduction,
            spouseDeduction,
            totalDeductions,
            netIrpef,
            regionalTax,
            municipalTax,
            totalAddizionali,
            netAnnual,
            netMonthly,
            companyCost,
            netPercent,
            ivsPercent,
            taxesPercent,
        }
    }, [ral, months, contractType, selectedRegion, hasDependentSpouse])

    const formatCur = (val: number) => {
        return new Intl.NumberFormat('it-IT', {
            style: 'currency',
            currency: 'EUR',
            maximumFractionDigits: 0,
        }).format(val)
    }

    const formatCurDec = (val: number) => {
        return new Intl.NumberFormat('it-IT', {
            style: 'currency',
            currency: 'EUR',
            maximumFractionDigits: 2,
        }).format(val)
    }

    return (
        <div className="space-y-10">
            {/* Input Form Panel */}
            <div className="bg-surface border border-border rounded-xl p-6 md:p-8 space-y-6 shadow-sm">
                <div className="border-b border-border/50 pb-4">
                    <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground">
                        Parametri di calcolo dello stipendio
                    </h2>
                    <p className="text-xs md:text-sm text-secondary mt-1">
                        Regola la RAL e le impostazioni per visualizzare immediatamente la busta paga netta stimata.
                    </p>
                </div>

                <div className="space-y-4">
                    {/* RAL Input + Slider */}
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <label htmlFor="ral-input" className="text-xs md:text-sm font-semibold text-foreground">
                                Retribuzione Annua Lorda (RAL)
                            </label>
                            <div className="flex items-center gap-1 bg-surface-muted px-3 py-1 rounded-lg border border-border">
                                <span className="text-sm md:text-base font-bold text-primary font-mono">
                                    {formatCur(ral)}
                                </span>
                            </div>
                        </div>

                        <input
                            id="ral-slider"
                            type="range"
                            min={10000}
                            max={120000}
                            step={1000}
                            value={ral}
                            onChange={(e) => setRal(Number(e.target.value))}
                            className="w-full h-2 bg-surface-muted rounded-lg appearance-none cursor-pointer accent-primary"
                        />
                        <div className="flex justify-between text-[11px] text-muted mt-1 font-mono">
                            <span>10.000 €</span>
                            <span>30.000 €</span>
                            <span>60.000 €</span>
                            <span>90.000 €</span>
                            <span>120.000 €</span>
                        </div>
                    </div>

                    {/* Quick RAL buttons */}
                    <div className="flex flex-wrap gap-2 text-xs">
                        <span className="text-muted self-center text-[11px]">Esempi frequenti:</span>
                        {[22000, 25000, 28000, 32000, 35000, 45000].map((v) => (
                            <button
                                key={v}
                                type="button"
                                onClick={() => setRal(v)}
                                className={`px-2.5 py-1 rounded-md border text-xs font-medium transition-all ${
                                    ral === v
                                        ? 'bg-primary text-primary-foreground border-primary font-semibold'
                                        : 'bg-surface hover:bg-surface-muted border-border text-foreground'
                                }`}
                            >
                                {v / 1000}k €
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3 border-t border-border/50">
                        {/* Mensilità */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-foreground block">
                                Numero Mensilità
                            </label>
                            <div className="flex gap-2">
                                {[12, 13, 14].map((m) => (
                                    <button
                                        key={m}
                                        type="button"
                                        onClick={() => setMonths(m)}
                                        className={`flex-1 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                                            months === m
                                                ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                                                : 'bg-surface hover:bg-surface-muted border-border text-foreground'
                                        }`}
                                    >
                                        {m} {m === 12 ? '' : m === 13 ? '(+13a)' : '(+14a)'}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Tipo Contratto */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-foreground block">
                                Inquadramento Lavorativo
                            </label>
                            <div className="flex gap-2">
                                <button
                                    type="button"
                                    onClick={() => setContractType('standard')}
                                    className={`flex-1 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                                        contractType === 'standard'
                                            ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                                            : 'bg-surface hover:bg-surface-muted border-border text-foreground'
                                    }`}
                                >
                                    Standard (IVS 9,19%)
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setContractType('apprendistato')}
                                    className={`flex-1 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                                        contractType === 'apprendistato'
                                            ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                                            : 'bg-surface hover:bg-surface-muted border-border text-foreground'
                                    }`}
                                >
                                    Apprendista (5,84%)
                                </button>
                            </div>
                        </div>

                        {/* Regione */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-foreground block">
                                Regione di residenza
                            </label>
                            <select
                                value={selectedRegion}
                                onChange={(e) => setSelectedRegion(e.target.value)}
                                className="w-full px-3 py-1.5 text-xs bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                                {Object.entries(REGIONAL_RATES).map(([key, reg]) => (
                                    <option key={key} value={key}>
                                        {reg.name} (addizionale ~{(reg.rate * 100).toFixed(2)}%)
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Familiari a carico */}
                    <div className="pt-2">
                        <label className="flex items-center gap-2 p-2.5 rounded-lg border border-border bg-surface hover:bg-surface-muted cursor-pointer text-xs">
                            <input
                                type="checkbox"
                                checked={hasDependentSpouse}
                                onChange={(e) => setHasDependentSpouse(e.target.checked)}
                                className="rounded border-border text-primary focus:ring-primary"
                            />
                            <span>
                                Coniuge a carico (reddito annuo inferiore a 2.840,51€ ex art. 12 TUIR)
                            </span>
                        </label>
                    </div>
                </div>
            </div>

            {/* Results Display Hero */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-surface border-2 border-primary/60 rounded-2xl p-6 md:p-8 space-y-3 shadow-md relative overflow-hidden">
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded text-[11px] font-semibold bg-primary/10 text-primary">
                        Su {months} mensilità
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-muted">
                        Stipendio Netto Mensile Stimato
                    </span>
                    <div className="text-4xl md:text-5xl font-display font-bold text-foreground">
                        {formatCur(calculation.netMonthly)}
                        <span className="text-lg md:text-xl text-muted font-normal"> / mese</span>
                    </div>
                    <p className="text-xs text-secondary leading-relaxed">
                        Importo medio stimato per ciascun cedolino ordinario. La tredicesima (ed eventuale quattordicesima) ha un importo netto affine, ma privo di detrazioni da lavoro dipendente mensili.
                    </p>
                </div>

                <div className="bg-surface border border-border rounded-2xl p-6 md:p-8 space-y-3 shadow-sm">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted">
                        Reddito Netto Annuo Totale
                    </span>
                    <div className="text-4xl md:text-5xl font-display font-bold text-foreground">
                        {formatCur(calculation.netAnnual)}
                        <span className="text-lg md:text-xl text-muted font-normal"> / anno</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-secondary pt-1">
                        <div>
                            <span>Pressione fiscale reale: </span>
                            <strong className="text-foreground font-semibold">
                                {((1 - calculation.netAnnual / ral) * 100).toFixed(1)}%
                            </strong>
                        </div>
                        <div>
                            <span>Quota netta: </span>
                            <strong className="text-emerald-600 dark:text-emerald-400 font-semibold">
                                {calculation.netPercent.toFixed(1)}%
                            </strong>
                        </div>
                    </div>
                </div>
            </div>

            {/* Breakdown Visual Bar */}
            <div className="bg-surface border border-border rounded-xl p-6 space-y-3 shadow-sm">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
                    Composizione e ripartizione della tua RAL di {formatCur(ral)}
                </h3>
                <div className="w-full h-5 bg-surface-muted rounded-full overflow-hidden flex">
                    <div
                        style={{ width: `${calculation.netPercent}%` }}
                        className="bg-emerald-500 h-full transition-all duration-300"
                        title={`Stipendio Netto: ${formatCur(calculation.netAnnual)} (${calculation.netPercent.toFixed(1)}%)`}
                    />
                    <div
                        style={{ width: `${calculation.ivsPercent}%` }}
                        className="bg-blue-500 h-full transition-all duration-300"
                        title={`Contributi IVS Pensione: ${formatCur(calculation.ivsContributions)} (${calculation.ivsPercent.toFixed(1)}%)`}
                    />
                    <div
                        style={{ width: `${calculation.taxesPercent}%` }}
                        className="bg-amber-500 h-full transition-all duration-300"
                        title={`Imposte IRPEF + Addizionali: ${formatCur(calculation.netIrpef + calculation.totalAddizionali)} (${calculation.taxesPercent.toFixed(1)}%)`}
                    />
                </div>
                <div className="flex flex-wrap gap-4 text-xs pt-1">
                    <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-emerald-500" />
                        <span className="text-secondary">
                            Netto in busta: <strong>{formatCur(calculation.netAnnual)}</strong> ({calculation.netPercent.toFixed(1)}%)
                        </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-blue-500" />
                        <span className="text-secondary">
                            Contributi INPS / IVS: <strong>{formatCur(calculation.ivsContributions)}</strong> ({calculation.ivsPercent.toFixed(1)}%)
                        </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-amber-500" />
                        <span className="text-secondary">
                            IRPEF e Addizionali: <strong>{formatCur(calculation.netIrpef + calculation.totalAddizionali)}</strong> ({calculation.taxesPercent.toFixed(1)}%)
                        </span>
                    </div>
                </div>
            </div>

            {/* Detailed Accounting Table */}
            <div className="overflow-x-auto border border-border rounded-xl bg-surface shadow-sm">
                <table className="w-full text-left text-xs md:text-sm border-collapse">
                    <thead>
                        <tr className="border-b border-border bg-surface-muted/60 text-xs font-semibold text-foreground uppercase tracking-wider">
                            <th scope="col" className="p-4">Voce della Busta Paga</th>
                            <th scope="col" className="p-4 w-40 text-right">Importo Annuo</th>
                            <th scope="col" className="p-4 hidden md:table-cell">Riferimento Normativo e Note</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border/60">
                        <tr className="hover:bg-surface-muted/20">
                            <td className="p-4 font-semibold text-foreground">Retribuzione Annua Lorda (RAL)</td>
                            <td className="p-4 text-right font-mono font-semibold">{formatCurDec(ral)}</td>
                            <td className="p-4 text-secondary text-xs hidden md:table-cell">Base contrattuale annua pattuita con il datore di lavoro</td>
                        </tr>
                        <tr className="hover:bg-surface-muted/20 text-red-600 dark:text-red-400">
                            <td className="p-4 font-semibold">- Contributi Previdenziali IVS</td>
                            <td className="p-4 text-right font-mono font-semibold">-{formatCurDec(calculation.ivsContributions)}</td>
                            <td className="p-4 text-secondary text-xs hidden md:table-cell">Aliquota 9,19% (5,84% apprendisti) versata a fini pensionistici INPS</td>
                        </tr>
                        <tr className="hover:bg-surface-muted/20 bg-surface-muted/30">
                            <td className="p-4 font-semibold text-foreground">= Imponibile Fiscale IRPEF</td>
                            <td className="p-4 text-right font-mono font-semibold text-primary">{formatCurDec(calculation.taxableIncome)}</td>
                            <td className="p-4 text-secondary text-xs hidden md:table-cell">Reddito su cui vengono calcolate le aliquote IRPEF a scaglioni</td>
                        </tr>
                        <tr className="hover:bg-surface-muted/20 text-muted">
                            <td className="p-4">IRPEF Lorda (Scaglioni 23% / 35% / 43%)</td>
                            <td className="p-4 text-right font-mono">{formatCurDec(calculation.grossIrpef)}</td>
                            <td className="p-4 text-secondary text-xs hidden md:table-cell">Imposta calcolata al lordo delle detrazioni fiscali</td>
                        </tr>
                        <tr className="hover:bg-surface-muted/20 text-emerald-600 dark:text-emerald-400">
                            <td className="p-4 font-semibold">+ Detrazioni Lavoro Dipendente</td>
                            <td className="p-4 text-right font-mono font-semibold">+{formatCurDec(calculation.workDeduction)}</td>
                            <td className="p-4 text-secondary text-xs hidden md:table-cell">Art. 13 TUIR: importo decrescente fino ad azzerarsi a 50.000€</td>
                        </tr>
                        {hasDependentSpouse && (
                            <tr className="hover:bg-surface-muted/20 text-emerald-600 dark:text-emerald-400">
                                <td className="p-4 font-semibold">+ Detrazione Coniuge a Carico</td>
                                <td className="p-4 text-right font-mono font-semibold">+{formatCurDec(calculation.spouseDeduction)}</td>
                                <td className="p-4 text-secondary text-xs hidden md:table-cell">Art. 12 TUIR per coniuge con reddito personale entro 2.840,51€</td>
                            </tr>
                        )}
                        <tr className="hover:bg-surface-muted/20 text-red-600 dark:text-red-400">
                            <td className="p-4 font-semibold">- IRPEF Netta Effettiva</td>
                            <td className="p-4 text-right font-mono font-semibold">-{formatCurDec(calculation.netIrpef)}</td>
                            <td className="p-4 text-secondary text-xs hidden md:table-cell">Imposta netta effettiva trattenuta mensilmente in busta paga</td>
                        </tr>
                        <tr className="hover:bg-surface-muted/20 text-red-600 dark:text-red-400">
                            <td className="p-4 font-semibold">- Addizionali Regionale e Comunale</td>
                            <td className="p-4 text-right font-mono font-semibold">-{formatCurDec(calculation.totalAddizionali)}</td>
                            <td className="p-4 text-secondary text-xs hidden md:table-cell">Addizionale Regionale ({REGIONAL_RATES[selectedRegion]?.name}) + Addizionale Comunale (~0,8%)</td>
                        </tr>
                        <tr className="hover:bg-surface-muted/40 bg-primary/10 text-primary font-bold text-base">
                            <td className="p-4">= Stipendio Netto Annuo</td>
                            <td className="p-4 text-right font-mono">{formatCurDec(calculation.netAnnual)}</td>
                            <td className="p-4 text-secondary text-xs hidden md:table-cell">Totale effettivamente percepito dal lavoratore nell’anno solare</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Note on Children and Assegno Unico */}
            <div className="p-4 rounded-xl border border-blue-500/20 bg-blue-500/10 text-xs text-blue-950 dark:text-blue-100 flex items-start gap-2.5">
                <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                    <strong className="font-semibold text-blue-900 dark:text-blue-200">
                        Nota sui figli a carico e Assegno Unico:
                    </strong>
                    <p className="text-blue-900/80 dark:text-blue-200/80 leading-relaxed">
                        Dal 1° marzo 2022 le detrazioni fiscali IRPEF per i figli a carico fino a 21 anni sono state sostituite dall&apos;<strong>Assegno Unico e Universale</strong> erogato direttamente dall&apos;INPS sul conto corrente e non tramite la busta paga del datore di lavoro. Per questo motivo non compaiono come detrazione fiscale nel cedolino.
                    </p>
                </div>
            </div>

            {/* Educational Disclaimer */}
            <div className="p-4 rounded-xl border border-border/70 bg-surface-muted text-xs text-secondary space-y-1.5">
                <strong className="text-foreground font-semibold">Nota di trasparenza metodologica:</strong>
                <p className="leading-relaxed">
                    Questo simulatore applica rigorosamente le aliquote IRPEF a 3 scaglioni (23%, 35%, 43%) e le formule dell&apos;art. 13 TUIR. Trattandosi di una stima a scopo educativo, non tiene conto di specificità individuali come TFR a tassazione separata, indennità di trasferta, fringe benefit o aliquote comunali differenziate per singolo CAP.
                </p>
            </div>
        </div>
    )
}
