'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import {
    Info,
    Calendar,
    HelpCircle,
    CheckCircle2,
    Gift,
    FileText,
} from 'lucide-react'

export function TredicesimaClient() {
    // Modalità di inserimento: da stipendio mensile lordo oppure da RAL
    const [inputMode, setInputMode] = useState<'mensile' | 'ral'>('mensile')
    const [monthlyGross, setMonthlyGross] = useState<number>(2000)
    const [ral, setRal] = useState<number>(26000)
    const [monthsWorked, setMonthsWorked] = useState<number>(12)
    const [partTimePercent, setPartTimePercent] = useState<number>(100)
    const [contractType, setContractType] = useState<'standard' | 'apprendistato'>('standard')
    const [incomeBracket, setIncomeBracket] = useState<'low' | 'mid' | 'high'>('low') // low: <=28k, mid: 28k-50k, high: >50k
    const [applyBonusNatale, setApplyBonusNatale] = useState<boolean>(false)

    // Sincronizzazione dinamica o calcolo base
    const effectiveMonthlyGross = useMemo(() => {
        if (inputMode === 'mensile') return monthlyGross
        return Math.round(ral / 13)
    }, [inputMode, monthlyGross, ral])

    const calculation = useMemo(() => {
        // 1. Quota part-time
        const partTimeFactor = partTimePercent / 100

        // 2. Ratei maturati (in dodicesimi)
        const rateiRatio = Math.max(0, Math.min(12, monthsWorked)) / 12

        // 3. Tredicesima Lorda
        const grossTredicesima = effectiveMonthlyGross * partTimeFactor * rateiRatio

        // 4. Contributi IVS a carico del lavoratore (9.19% standard, 5.84% apprendistato)
        const ivsRate = contractType === 'apprendistato' ? 0.0584 : 0.0919
        const ivsContributions = grossTredicesima * ivsRate

        // 5. Imponibile Fiscale IRPEF
        const taxableIncome = Math.max(0, grossTredicesima - ivsContributions)

        // 6. Aliquota IRPEF applicata (aliquota marginale del lavoratore sulla tredicesima)
        // Sulla tredicesima NON si applicano le detrazioni da lavoro dipendente né carichi di famiglia
        let irpefRate = 0.23
        if (incomeBracket === 'mid') irpefRate = 0.35
        if (incomeBracket === 'high') irpefRate = 0.43

        const irpefTax = taxableIncome * irpefRate

        // 7. Stima Addizionali regionali e comunali trattenute (~2.3% medio)
        // Spesso applicate a conguaglio o a rate da inizio anno, stimiamo l'impatto medio
        const addizionaliStima = taxableIncome * 0.02

        // 8. Eventuale Bonus Natale fino a 100€ netti (D.L. 113 e 167/2024)
        // Riproprozionato ai mesi di lavoro dipendente prestati
        const bonusNataleAmount = (applyBonusNatale && incomeBracket === 'low')
            ? Math.round(100 * rateiRatio * 100) / 100
            : 0

        // 9. Netto stimato
        const netBase = Math.max(0, taxableIncome - irpefTax - addizionaliStima)
        const netTotal = netBase + bonusNataleAmount

        // Percentuale netta rispetto al lordo
        const netPercent = grossTredicesima > 0 ? (netTotal / grossTredicesima) * 100 : 0

        return {
            rateiRatio,
            grossTredicesima,
            ivsContributions,
            ivsRate,
            taxableIncome,
            irpefTax,
            irpefRate,
            addizionaliStima,
            bonusNataleAmount,
            netBase,
            netTotal,
            netPercent,
        }
    }, [effectiveMonthlyGross, monthsWorked, partTimePercent, contractType, incomeBracket, applyBonusNatale])

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
            {/* Box Alert: Perché la tredicesima è più bassa */}
            <div className="p-5 rounded-2xl border border-amber-500/30 bg-amber-500/5 text-amber-900 dark:text-amber-200 space-y-2">
                <div className="flex items-center gap-2 font-semibold text-sm md:text-base">
                    <Info className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
                    <span>Perché la tredicesima netta risulta più bassa di uno stipendio normale?</span>
                </div>
                <p className="text-xs md:text-sm text-secondary leading-relaxed">
                    Sulla tredicesima mensilità <strong>non si applicano le detrazioni da lavoro dipendente né quelle per familiari a carico</strong> (artt. 12 e 13 del TUIR), in quanto tali agevolazioni annuali vengono già interamente ripartite e fruite sulle 12 buste paga ordinarie. L’IRPEF viene quindi trattenuta integralmente con l’aliquota marginale, riducendo la percentuale netta percepita in busta paga.
                </p>
            </div>

            {/* Input Form Panel */}
            <div className="bg-surface border border-border rounded-2xl p-6 md:p-8 space-y-6 shadow-sm">
                <div className="border-b border-border/50 pb-4 flex flex-wrap items-center justify-between gap-3">
                    <div>
                        <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground">
                            Parametri di calcolo della tredicesima
                        </h2>
                        <p className="text-xs md:text-sm text-secondary mt-1">
                            Inserisci la retribuzione mensile o la RAL e i mesi effettivi di servizio nell’anno.
                        </p>
                    </div>

                    {/* Toggle Modalità */}
                    <div className="flex rounded-lg border border-border p-1 bg-surface-muted text-xs font-medium">
                        <button
                            type="button"
                            onClick={() => setInputMode('mensile')}
                            className={`px-3 py-1 rounded-md transition-all ${
                                inputMode === 'mensile'
                                    ? 'bg-primary text-primary-foreground font-semibold shadow-sm'
                                    : 'text-secondary hover:text-foreground'
                            }`}
                        >
                            Da Stipendio Mensile
                        </button>
                        <button
                            type="button"
                            onClick={() => setInputMode('ral')}
                            className={`px-3 py-1 rounded-md transition-all ${
                                inputMode === 'ral'
                                    ? 'bg-primary text-primary-foreground font-semibold shadow-sm'
                                    : 'text-secondary hover:text-foreground'
                            }`}
                        >
                            Da RAL Annua
                        </button>
                    </div>
                </div>

                <div className="space-y-6">
                    {/* Valore di Retribuzione (Mensile o RAL) */}
                    {inputMode === 'mensile' ? (
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <label htmlFor="monthly-input" className="text-xs md:text-sm font-semibold text-foreground">
                                    Retribuzione Lorda Mensile (da busta paga)
                                </label>
                                <div className="flex items-center gap-1 bg-surface-muted px-3 py-1 rounded-lg border border-border">
                                    <span className="text-sm md:text-base font-bold text-primary font-mono">
                                        {formatCur(monthlyGross)}
                                    </span>
                                </div>
                            </div>
                            <input
                                id="monthly-slider"
                                type="range"
                                min={800}
                                max={6000}
                                step={50}
                                value={monthlyGross}
                                onChange={(e) => setMonthlyGross(Number(e.target.value))}
                                className="w-full h-2 bg-surface-muted rounded-lg appearance-none cursor-pointer accent-primary"
                            />
                            <div className="flex justify-between text-[11px] text-muted mt-1 font-mono">
                                <span>800 €</span>
                                <span>1.500 €</span>
                                <span>2.500 €</span>
                                <span>4.000 €</span>
                                <span>6.000 €</span>
                            </div>

                            {/* Preset veloci */}
                            <div className="flex flex-wrap gap-2 text-xs mt-3">
                                <span className="text-muted self-center text-[11px]">Esempi tipici:</span>
                                {[1200, 1500, 1800, 2100, 2500, 3000].map((v) => (
                                    <button
                                        key={v}
                                        type="button"
                                        onClick={() => setMonthlyGross(v)}
                                        className={`px-2.5 py-1 rounded-md border text-xs font-medium transition-all ${
                                            monthlyGross === v
                                                ? 'bg-primary text-primary-foreground border-primary font-semibold'
                                                : 'bg-surface hover:bg-surface-muted border-border text-foreground'
                                        }`}
                                    >
                                        {v} €
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <label htmlFor="ral-input" className="text-xs md:text-sm font-semibold text-foreground">
                                    Retribuzione Annua Lorda (RAL)
                                </label>
                                <div className="flex items-center gap-1 bg-surface-muted px-3 py-1 rounded-lg border border-border">
                                    <span className="text-sm md:text-base font-bold text-primary font-mono">
                                        {formatCur(ral)}
                                    </span>
                                    <span className="text-xs text-muted">
                                        (~{formatCur(Math.round(ral / 13))}/m)
                                    </span>
                                </div>
                            </div>
                            <input
                                id="ral-slider"
                                type="range"
                                min={10000}
                                max={80000}
                                step={1000}
                                value={ral}
                                onChange={(e) => setRal(Number(e.target.value))}
                                className="w-full h-2 bg-surface-muted rounded-lg appearance-none cursor-pointer accent-primary"
                            />
                            <div className="flex justify-between text-[11px] text-muted mt-1 font-mono">
                                <span>10.000 €</span>
                                <span>25.000 €</span>
                                <span>40.000 €</span>
                                <span>60.000 €</span>
                                <span>80.000 €</span>
                            </div>
                        </div>
                    )}

                    {/* Mesi Lavorati nell'anno */}
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <div>
                                <label className="text-xs md:text-sm font-semibold text-foreground block">
                                    Mesi lavorati nell’anno solare (Ratei maturati)
                                </label>
                                <span className="text-[11px] text-muted">
                                    Un mese si considera intero se lavorato per almeno 15 giorni di calendario.
                                </span>
                            </div>
                            <div className="flex items-center gap-1 bg-surface-muted px-3 py-1 rounded-lg border border-border">
                                <span className="text-sm md:text-base font-bold text-primary font-mono">
                                    {monthsWorked} / 12
                                </span>
                                <span className="text-xs text-muted">({((monthsWorked / 12) * 100).toFixed(0)}%)</span>
                            </div>
                        </div>
                        <div className="flex gap-1.5 flex-wrap">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((m) => (
                                <button
                                    key={m}
                                    type="button"
                                    onClick={() => setMonthsWorked(m)}
                                    className={`flex-1 min-w-[36px] py-2 text-xs font-semibold rounded-lg border transition-all text-center ${
                                        monthsWorked === m
                                            ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                                            : 'bg-surface hover:bg-surface-muted border-border text-foreground'
                                    }`}
                                >
                                    {m}m
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Part-time, Contratto e Fascia Reddito */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3 border-t border-border/50">
                        {/* Percentuale Orario / Part-time */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-foreground block">
                                Orario di lavoro ({partTimePercent}%)
                            </label>
                            <select
                                value={partTimePercent}
                                onChange={(e) => setPartTimePercent(Number(e.target.value))}
                                className="w-full px-3 py-2 text-xs bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                                <option value={100}>Full-time (100%)</option>
                                <option value={80}>Part-time 80% (32 ore)</option>
                                <option value={75}>Part-time 75% (30 ore)</option>
                                <option value={60}>Part-time 60% (24 ore)</option>
                                <option value={50}>Part-time 50% (20 ore)</option>
                                <option value={40}>Part-time 40% (16 ore)</option>
                            </select>
                        </div>

                        {/* Tipo Inquadramento */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-foreground block">
                                Inquadramento contributivo
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
                                    Standard (9,19%)
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

                        {/* Fascia Reddito Complessivo per Aliquota IRPEF */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-foreground block">
                                Reddito annuo complessivo (IRPEF)
                            </label>
                            <select
                                value={incomeBracket}
                                onChange={(e) => setIncomeBracket(e.target.value as 'low' | 'mid' | 'high')}
                                className="w-full px-3 py-2 text-xs bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                                <option value="low">Fino a 28.000 € (Aliquota 23%)</option>
                                <option value="mid">Da 28.001 a 50.000 € (Aliquota 35%)</option>
                                <option value="high">Oltre 50.000 € (Aliquota 43%)</option>
                            </select>
                        </div>
                    </div>

                    {/* Checkbox Bonus Natale 100€ */}
                    <div className="pt-2">
                        <label className={`flex items-start gap-3 p-3.5 rounded-xl border transition-all cursor-pointer ${
                            applyBonusNatale
                                ? 'border-emerald-500/50 bg-emerald-500/5'
                                : 'border-border bg-surface hover:bg-surface-muted'
                        }`}>
                            <input
                                type="checkbox"
                                checked={applyBonusNatale}
                                onChange={(e) => setApplyBonusNatale(e.target.checked)}
                                className="mt-0.5 rounded border-border text-primary focus:ring-primary"
                            />
                            <div className="space-y-0.5 text-xs">
                                <span className="font-semibold text-foreground flex items-center gap-1.5">
                                    <Gift className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                                    Aggiungi Bonus Natale fino a 100 € (D.L. 113/2024 e D.L. 167/2024)
                                </span>
                                <p className="text-secondary leading-relaxed">
                                    Spetta a lavoratori dipendenti con reddito annuo complessivo non superiore a 28.000 €, capienza IRPEF lorda e almeno un figlio a carico (anche per genitori single o conviventi). Viene erogato con la tredicesima o recuperato a conguaglio nel Modello 730.
                                </p>
                            </div>
                        </label>
                    </div>
                </div>
            </div>

            {/* Results Display Hero */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-surface border-2 border-primary/60 rounded-2xl p-6 md:p-8 space-y-3 shadow-md relative overflow-hidden">
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded text-[11px] font-semibold bg-primary/10 text-primary">
                        {monthsWorked}/12 Ratei maturati
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-muted">
                        Tredicesima Netta Stimata in Tasca
                    </span>
                    <div className="text-4xl md:text-5xl font-display font-bold text-foreground">
                        {formatCurDec(calculation.netTotal)}
                    </div>
                    {calculation.bonusNataleAmount > 0 && (
                        <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            Include +{formatCurDec(calculation.bonusNataleAmount)} di Bonus Natale una tantum
                        </p>
                    )}
                    <p className="text-xs text-secondary leading-relaxed">
                        Importo effettivo netto stimato per il cedolino di dicembre. Il netto corrisponde a circa il{' '}
                        <strong>{calculation.netPercent.toFixed(1)}%</strong> della tredicesima lorda.
                    </p>
                </div>

                <div className="bg-surface border border-border rounded-2xl p-6 md:p-8 space-y-3 shadow-sm">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted">
                        Tredicesima Lorda Maturata
                    </span>
                    <div className="text-4xl md:text-5xl font-display font-bold text-foreground">
                        {formatCurDec(calculation.grossTredicesima)}
                    </div>
                    <div className="space-y-1 text-xs text-secondary pt-1 border-t border-border/40">
                        <div className="flex justify-between py-0.5">
                            <span>Retribuzione base considerata:</span>
                            <span className="font-mono text-foreground font-medium">{formatCur(effectiveMonthlyGross)}</span>
                        </div>
                        <div className="flex justify-between py-0.5">
                            <span>Percentuale orario applicata:</span>
                            <span className="font-mono text-foreground font-medium">{partTimePercent}%</span>
                        </div>
                        <div className="flex justify-between py-0.5">
                            <span>Quota mesi lavorati:</span>
                            <span className="font-mono text-foreground font-medium">{monthsWorked} su 12</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dettaglio Contabile e Ritenute */}
            <div className="bg-surface border border-border rounded-2xl p-6 md:p-8 space-y-5 shadow-sm">
                <div className="border-b border-border/50 pb-3 flex items-center justify-between">
                    <h3 className="text-lg md:text-xl font-display font-semibold text-foreground flex items-center gap-2">
                        <FileText className="w-5 h-5 text-primary" />
                        Dettaglio analitico delle voci in cedolino
                    </h3>
                    <span className="text-xs text-muted font-mono">Simulazione trasparente</span>
                </div>

                <div className="divide-y divide-border/40 text-xs md:text-sm">
                    <div className="py-2.5 flex items-center justify-between">
                        <div>
                            <strong className="text-foreground font-medium">Tredicesima Lorda</strong>
                            <p className="text-[11px] text-muted">Retribuzione mensile × ratei maturati × quota part-time</p>
                        </div>
                        <span className="font-mono font-bold text-foreground text-sm">
                            +{formatCurDec(calculation.grossTredicesima)}
                        </span>
                    </div>

                    <div className="py-2.5 flex items-center justify-between">
                        <div>
                            <span className="text-secondary">Contributi Previdenziali IVS INPS ({contractType === 'apprendistato' ? '5,84%' : '9,19%'})</span>
                            <p className="text-[11px] text-muted">A carico del lavoratore, deducibili dalla base imponibile fiscale</p>
                        </div>
                        <span className="font-mono text-amber-600 dark:text-amber-400 font-medium">
                            -{formatCurDec(calculation.ivsContributions)}
                        </span>
                    </div>

                    <div className="py-2.5 flex items-center justify-between bg-surface-muted/30 px-2 rounded">
                        <div>
                            <span className="font-semibold text-foreground">Imponibile Fiscale IRPEF</span>
                            <p className="text-[11px] text-muted">Lordo meno contributi previdenziali</p>
                        </div>
                        <span className="font-mono font-semibold text-foreground">
                            {formatCurDec(calculation.taxableIncome)}
                        </span>
                    </div>

                    <div className="py-2.5 flex items-center justify-between">
                        <div>
                            <span className="text-secondary">Ritenuta IRPEF ({Math.round(calculation.irpefRate * 100)}%)</span>
                            <p className="text-[11px] text-muted">Aliquota marginale calcolata senza detrazioni per lavoro dipendente</p>
                        </div>
                        <span className="font-mono text-red-600 dark:text-red-400 font-medium">
                            -{formatCurDec(calculation.irpefTax)}
                        </span>
                    </div>

                    <div className="py-2.5 flex items-center justify-between">
                        <div>
                            <span className="text-secondary">Addizionali Regionali e Comunali stimate (~2%)</span>
                            <p className="text-[11px] text-muted">Applicate a conguaglio di fine anno a seconda della residenza</p>
                        </div>
                        <span className="font-mono text-red-600 dark:text-red-400 font-medium">
                            -{formatCurDec(calculation.addizionaliStima)}
                        </span>
                    </div>

                    {calculation.bonusNataleAmount > 0 && (
                        <div className="py-2.5 flex items-center justify-between bg-emerald-500/5 px-2 rounded">
                            <div>
                                <span className="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                                    <Gift className="w-3.5 h-3.5" />
                                    Bonus Natale (D.L. 113/2024 e D.L. 167/2024)
                                </span>
                                <p className="text-[11px] text-muted">Indennità una tantum esente o netta per dipendenti con figli</p>
                            </div>
                            <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">
                                +{formatCurDec(calculation.bonusNataleAmount)}
                            </span>
                        </div>
                    )}

                    <div className="pt-3 pb-1 flex items-center justify-between text-sm md:text-base">
                        <strong className="text-foreground font-display font-semibold">Netto Effettivo da Percepire</strong>
                        <span className="font-mono font-bold text-primary text-base md:text-lg">
                            {formatCurDec(calculation.netTotal)}
                        </span>
                    </div>
                </div>
            </div>

            {/* Quando arriva la tredicesima */}
            <div className="bg-surface border border-border rounded-2xl p-6 md:p-8 space-y-4 shadow-sm">
                <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <h3 className="text-lg md:text-xl font-display font-semibold text-foreground">
                        Quando viene pagata la tredicesima? Le scadenze per settore
                    </h3>
                </div>
                <p className="text-xs md:text-sm text-secondary leading-relaxed">
                    A differenza delle mensilità ordinarie, la tredicesima non ha una data unica per tutti i lavoratori italiani, ma viene fissata dai singoli Contratti Collettivi Nazionali di Lavoro (CCNL) e dalle prassi aziendali, comunque sempre prima delle festività natalizie:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-xl border border-border bg-surface-muted/40 space-y-1.5">
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">Settore Pubblico e Scuola (NoiPA)</span>
                        <h4 className="font-semibold text-foreground text-sm">Entro il 14–16 Dicembre</h4>
                        <p className="text-xs text-secondary leading-relaxed">
                            Per docenti, personale ATA, dipendenti dei Ministeri e Forze dell’Ordine, l’emissione speciale di NoiPA accredita stipendio di dicembre e tredicesima insieme a metà mese.
                        </p>
                    </div>

                    <div className="p-4 rounded-xl border border-border bg-surface-muted/40 space-y-1.5">
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">CCNL Commercio e Terziario</span>
                        <h4 className="font-semibold text-foreground text-sm">Entro la vigilia di Natale (24 Dicembre)</h4>
                        <p className="text-xs text-secondary leading-relaxed">
                            L’art. 208 del CCNL Terziario stabilisce che la tredicesima debba essere corrisposta dall’azienda entro la ricorrenza del Santo Natale.
                        </p>
                    </div>

                    <div className="p-4 rounded-xl border border-border bg-surface-muted/40 space-y-1.5">
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">CCNL Metalmeccanici</span>
                        <h4 className="font-semibold text-foreground text-sm">Di norma entro il 20–22 Dicembre</h4>
                        <p className="text-xs text-secondary leading-relaxed">
                            Il contratto prevede la liquidazione in occasione della vigilia di Natale, solitamente accreditata con l’ultima paga prima della chiusura natalizia.
                        </p>
                    </div>

                    <div className="p-4 rounded-xl border border-border bg-surface-muted/40 space-y-1.5">
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">Pensionati INPS</span>
                        <h4 className="font-semibold text-foreground text-sm">1° giorno bancabile di Dicembre</h4>
                        <p className="text-xs text-secondary leading-relaxed">
                            Per tutti i pensionati la tredicesima è accreditata automaticamente d’ufficio con la prima rata di pensione del mese di dicembre (inclusa eventuale maggiorazione o quattordicesima se spettante).
                        </p>
                    </div>
                </div>
            </div>

            {/* Cosa succede se... */}
            <div className="bg-surface border border-border rounded-2xl p-6 md:p-8 space-y-4 shadow-sm">
                <div className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-primary" />
                    <h3 className="text-lg md:text-xl font-display font-semibold text-foreground">
                        Cosa succede se... casi particolari ed eccezioni
                    </h3>
                </div>

                <div className="space-y-3 text-xs md:text-sm text-secondary">
                    <div className="p-3.5 rounded-xl border border-border/60 bg-surface">
                        <strong className="text-foreground font-semibold block mb-1">
                            Se hai iniziato a lavorare durante l’anno o hai cambiato datore di lavoro?
                        </strong>
                        <p className="leading-relaxed">
                            Ogni mese in cui hai prestato servizio per almeno 15 giorni dà diritto a 1 rateo di tredicesima (1/12). Se hai cambiato azienda, il precedente datore ti ha già liquidato i ratei maturati nel Trattamento di Fine Rapporto (TFR) e nelle competenze di chiusura; il nuovo datore liquiderà a dicembre solo i mesi lavorati presso di lui.
                        </p>
                    </div>

                    <div className="p-3.5 rounded-xl border border-border/60 bg-surface">
                        <strong className="text-foreground font-semibold block mb-1">
                            Se sei stato in malattia, infortunio o maternità obbligatoria?
                        </strong>
                        <p className="leading-relaxed">
                            I periodi di congedo di maternità o paternità obbligatoria, la malattia e l’infortunio sul lavoro <strong>maturano regolarmente il rateo di tredicesima</strong>. La quota a carico degli enti previdenziali (INPS o INAIL) viene anticipata o integrata dal datore di lavoro in busta paga.
                        </p>
                    </div>

                    <div className="p-3.5 rounded-xl border border-border/60 bg-surface">
                        <strong className="text-foreground font-semibold block mb-1">
                            Se sei stato in congedo parentale facoltativo, aspettativa non retribuita o sciopero?
                        </strong>
                        <p className="leading-relaxed">
                            I periodi di aspettativa non retribuita, i permessi non retribuiti, le ore di sciopero e il congedo parentale facoltativo (salvo specifiche clausole di miglior favore previste dal CCNL) <strong>non maturano ratei di tredicesima</strong>.
                        </p>
                    </div>

                    <div className="p-3.5 rounded-xl border border-border/60 bg-surface">
                        <strong className="text-foreground font-semibold block mb-1">
                            Se sei in Cassa Integrazione Guadagni (CIG)?
                        </strong>
                        <p className="leading-relaxed">
                            In caso di Cassa Integrazione a zero ore, la tredicesima viene erogata direttamente dall’INPS nell’ambito del trattamento di integrazione salariale (entro i massimali di legge). In caso di CIG a orario ridotto, il datore paga i ratei per le ore lavorate e l’INPS integra la quota per le ore di sospensione.
                        </p>
                    </div>
                </div>
            </div>

            {/* Collegamenti ad altre guide */}
            <div className="p-5 rounded-2xl border border-border bg-surface-muted/30 flex flex-wrap items-center justify-between gap-4">
                <div className="space-y-1">
                    <h4 className="font-semibold text-foreground text-sm">Vuoi calcolare l’intero stipendio annuale?</h4>
                    <p className="text-xs text-secondary">
                        Utilizza il nostro simulatore completo per calcolare la RAL, le detrazioni IRPEF e il netto mese per mese.
                    </p>
                </div>
                <div className="flex gap-2">
                    <Link
                        href="/tool/calcolo-stipendio-netto"
                        className="px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-xs hover:bg-primary/90 transition-all shadow-sm"
                    >
                        Simulatore Stipendio Netto →
                    </Link>
                    <Link
                        href="/novita/bonus-natale-100-euro-guida-modulo-noipa-2026"
                        className="px-4 py-2 rounded-xl border border-border bg-surface hover:bg-surface-muted text-foreground font-semibold text-xs transition-all"
                    >
                        Guida Bonus Natale 100€ →
                    </Link>
                </div>
            </div>
        </div>
    )
}
