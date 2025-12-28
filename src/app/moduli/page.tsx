'use client'

import { motion } from 'framer-motion'
import { ALL_MODULES } from '@/data/modules/index'
import Link from 'next/link'
import * as Icons from 'lucide-react'
import { cn } from '@/lib/utils'
import { useGameStore } from '@/store/useGameStore'
import { Module } from '@/types'

export default function ModulesPage() {
    const { modules: progress } = useGameStore() as { modules: Record<string, any> }

    return (
        <div className="space-y-12">
            <header className="max-w-2xl">
                <h1 className="text-4xl font-bold mb-4">Esplora i Moduli</h1>
                <p className="text-white/60 text-lg">
                    Un percorso strutturato in 18 tappe per dominare la tua sicurezza digitale.
                    Ogni modulo contiene lezioni teoriche, esercizi pratici e sfide interattive.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {ALL_MODULES.map((module: Module, index: number) => {
                    const IconComponent = (Icons as any)[module.icon] || Icons.HelpCircle
                    const moduleProgress = progress[module.id] || { completed: false, xp: 0 }

                    return (
                        <motion.div
                            key={module.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <Link
                                href={`/moduli/${module.id}`}
                                className="group block relative glass-card rounded-[2rem] p-8 border-white/5 overflow-hidden"
                            >
                                {/* Background Accent */}
                                <div className={cn(
                                    "absolute -right-12 -top-12 w-40 h-40 blur-[80px] opacity-20 transition-opacity group-hover:opacity-40",
                                    module.themeColor === 'accent-purple' ? 'bg-accent-purple' :
                                        module.themeColor === 'accent-blue' ? 'bg-accent-blue' : 'bg-accent-cyan'
                                )} />

                                <div className="relative z-10">
                                    <div className={cn(
                                        "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-transform group-hover:scale-110",
                                        module.themeColor === 'accent-purple' ? 'bg-accent-purple text-dark-900' :
                                            module.themeColor === 'accent-blue' ? 'bg-accent-blue text-dark-900' : 'bg-accent-cyan text-dark-900'
                                    )}>
                                        <IconComponent className="w-7 h-7" />
                                    </div>

                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Modulo {module.number}</span>
                                        <div className="w-1 h-1 rounded-full bg-white/20" />
                                        <span className={cn(
                                            "text-[10px] font-bold uppercase tracking-widest",
                                            module.difficulty === 'base' ? 'text-green-400' :
                                                module.difficulty === 'intermedia' ? 'text-amber-400' : 'text-red-400'
                                        )}>
                                            {module.difficulty}
                                        </span>
                                    </div>

                                    <h2 className="text-2xl font-bold mb-3 group-hover:text-accent-cyan transition-colors">{module.title}</h2>
                                    <p className="text-white/60 text-sm mb-6 line-clamp-2 leading-relaxed italic">&quot;{module.subtitle}&quot;</p>

                                    <div className="flex items-center justify-between mt-auto">
                                        <div className="flex items-center gap-2 text-xs font-bold">
                                            <Icons.BookOpen className="w-4 h-4 text-white/40" />
                                            <span>{module.lessons.length} Lezioni</span>
                                        </div>

                                        {moduleProgress.completed ? (
                                            <div className="flex items-center gap-1 text-accent-cyan text-xs font-bold">
                                                <Icons.CheckCircle2 className="w-4 h-4" />
                                                Completato
                                            </div>
                                        ) : (
                                            <div className="w-24 h-1.5 bg-white/5 rounded-full overflow-hidden">
                                                <div className="w-1/3 h-full bg-accent-cyan/50" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}
