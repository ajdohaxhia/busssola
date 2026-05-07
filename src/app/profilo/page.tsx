'use client'

import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Download, RotateCcw, ShieldCheck, Upload, UserRound, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { useGameStore } from '@/store/useGameStore'

export default function ProfilePage() {
    const { modules, userId, createdAt, ensureUserId, exportProgress, importProgress, resetProgress } = useGameStore()
    const [importText, setImportText] = useState('')
    const [showImport, setShowImport] = useState(false)

    useEffect(() => {
        ensureUserId()
    }, [ensureUserId])

    const completedModulesCount = useMemo(
        () => Object.values(modules).filter((moduleProgress) => moduleProgress.completed).length,
        [modules]
    )

    const totalLessonsRead = useMemo(
        () => Object.values(modules).reduce((acc, moduleProgress) => acc + moduleProgress.lessonsViewed.length, 0),
        [modules]
    )

    const createdLabel = createdAt
        ? new Intl.DateTimeFormat('it-IT', { day: '2-digit', month: 'long', year: 'numeric' }).format(new Date(createdAt))
        : 'Profilo locale'

    const handleExport = () => {
        const data = exportProgress()
        const blob = new Blob([data], { type: 'application/json' })
        const url = URL.createObjectURL(blob)
        const anchor = document.createElement('a')
        anchor.href = url
        anchor.download = `bussola-backup-${new Date().toISOString().split('T')[0]}.json`
        anchor.click()
        anchor.remove()
        URL.revokeObjectURL(url)
    }

    const handleImport = () => {
        if (!importText.trim()) return

        importProgress(importText)
        setShowImport(false)
        window.location.reload()
    }

    const handleReset = () => {
        const confirmed = confirm('Questo cancellerà definitivamente tutti i progressi salvati su questo dispositivo. Continuare?')
        if (confirmed) resetProgress()
    }

    return (
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-16 space-y-10 pb-32">
            <header className="space-y-4 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    Progressi salvati solo sul dispositivo
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-foreground">
                    Profilo
                </h1>
                <p className="text-lg text-secondary leading-relaxed">
                    Gestisci i tuoi progressi locali, crea un backup e ripristina un percorso da un altro dispositivo.
                </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2 p-6 md:p-8 border border-border bg-surface space-y-8">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary border border-primary/10 flex items-center justify-center shrink-0">
                            <UserRound className="w-8 h-8" />
                        </div>
                        <div className="min-w-0 space-y-1">
                            <p className="text-sm font-semibold uppercase tracking-wider text-secondary">ID profilo locale</p>
                            <p className="font-mono text-sm text-foreground truncate">
                                {userId || 'Generazione in corso'}
                            </p>
                            <p className="text-sm text-muted">{createdLabel}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="rounded-2xl border border-border bg-surface-muted p-6">
                            <p className="text-sm font-semibold text-secondary">Moduli completati</p>
                            <p className="mt-3 text-4xl font-display font-semibold text-foreground">{completedModulesCount}</p>
                        </div>
                        <div className="rounded-2xl border border-border bg-surface-muted p-6">
                            <p className="text-sm font-semibold text-secondary">Lezioni lette</p>
                            <p className="mt-3 text-4xl font-display font-semibold text-foreground">{totalLessonsRead}</p>
                        </div>
                    </div>
                </Card>

                <Card className="p-6 md:p-8 border border-border bg-surface space-y-6">
                    <div className="space-y-2">
                        <h2 className="text-xl font-display font-semibold text-foreground">Dati e backup</h2>
                        <p className="text-sm text-secondary leading-relaxed">
                            Busssola non usa account: esporta un file JSON se vuoi conservare o spostare i progressi.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <Button onClick={handleExport} className="w-full justify-center rounded-xl">
                            <Download className="w-4 h-4 mr-2" />
                            Backup JSON
                        </Button>
                        <Button onClick={() => setShowImport(true)} variant="outline" className="w-full justify-center rounded-xl">
                            <Upload className="w-4 h-4 mr-2" />
                            Importa backup
                        </Button>
                        <Button onClick={handleReset} variant="ghost" className="w-full justify-center rounded-xl text-sos hover:text-sos hover:bg-sos/10">
                            <RotateCcw className="w-4 h-4 mr-2" />
                            Reset progressi
                        </Button>
                    </div>
                </Card>
            </div>

            <AnimatePresence>
                {showImport && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/40 backdrop-blur-sm p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.96, opacity: 0, y: 12 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.96, opacity: 0, y: 12 }}
                            className="w-full max-w-xl rounded-2xl border border-border bg-surface shadow-lg p-6 md:p-8 space-y-6"
                        >
                            <div className="flex items-start justify-between gap-6">
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-display font-semibold text-foreground">Importa progressi</h2>
                                    <p className="text-sm text-secondary leading-relaxed">
                                        Incolla il contenuto del backup JSON esportato da Busssola.
                                    </p>
                                </div>
                                <Button size="icon" variant="ghost" onClick={() => setShowImport(false)} aria-label="Chiudi importazione">
                                    <X className="w-5 h-5" />
                                </Button>
                            </div>

                            <textarea
                                className="w-full h-56 bg-surface-muted border border-border rounded-xl p-4 font-mono text-xs text-foreground focus:border-primary focus:ring-1 focus:ring-primary/20 outline-none resize-none"
                                placeholder="Incolla qui il JSON del backup"
                                value={importText}
                                onChange={(event) => setImportText(event.target.value)}
                            />

                            <div className="flex flex-col sm:flex-row gap-3">
                                <Button onClick={handleImport} disabled={!importText.trim()} className="flex-1 rounded-xl">
                                    Importa
                                </Button>
                                <Button onClick={() => setShowImport(false)} variant="outline" className="flex-1 rounded-xl">
                                    Annulla
                                </Button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
