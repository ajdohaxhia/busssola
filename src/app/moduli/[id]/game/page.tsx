'use client'

import { useParams, useRouter } from 'next/navigation'
import { ScenarioEngine } from '@/components/games/ScenarioEngine'
import { getModuleById } from '@/data/modules/index'
import { ChevronLeft } from 'lucide-react'

export default function GamePage() {
    const { id } = useParams()
    const router = useRouter()
    const module = getModuleById(id as string)

    if (!module) return <div>Modulo non trovato</div>

    return (
        <div className="max-w-4xl mx-auto p-6 md:p-12 space-y-12">
            <button
                onClick={() => router.back()}
                className="flex items-center gap-2 text-white/40 hover:text-white transition-colors group"
            >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10">
                    <ChevronLeft className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest">Torna al Modulo</span>
            </button>

            <header className="text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase">
                    Training <span className="blue-glow text-white">Interattivo</span>
                </h1>
                <p className="text-blue-200/60 font-medium max-w-2xl mx-auto">
                    Metti alla prova le tue capacità di decisione in scenari simulati ad alto rischio.
                </p>
            </header>

            <ScenarioEngine moduleId={id as string} />
        </div>
    )
}
