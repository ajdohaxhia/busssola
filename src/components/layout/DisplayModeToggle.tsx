'use client'

import { useEffect, useState } from 'react'
import { Presentation } from 'lucide-react'
import { applyDisplayMode, readDisplayMode, type DisplayMode } from '@/lib/display-mode'

export function DisplayModeToggle() {
  const [mode, setMode] = useState<DisplayMode>('standard')

  useEffect(() => {
    setMode(readDisplayMode())
  }, [])

  const toggle = () => {
    const next: DisplayMode = mode === 'lim' ? 'standard' : 'lim'
    applyDisplayMode(next)
    setMode(next)
  }

  const isLim = mode === 'lim'
  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={isLim}
      className="inline-flex min-h-12 items-center gap-3 rounded-xl border-2 border-foreground px-6 py-3 text-base font-semibold text-foreground hover:bg-surface-hover"
    >
      <Presentation className="h-5 w-5" aria-hidden="true" />
      {isLim ? 'Esci dalla vista LIM' : 'Vista LIM per la proiezione'}
    </button>
  )
}
