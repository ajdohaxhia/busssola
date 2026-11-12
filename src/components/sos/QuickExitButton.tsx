'use client'

import { LogOut } from 'lucide-react'
import { QUICK_EXIT_NOTE, quickExit } from '@/lib/quick-exit'

export function QuickExitButton() {
  return (
    <button
      type="button"
      onClick={quickExit}
      title={QUICK_EXIT_NOTE}
      aria-label={`Uscita rapida. ${QUICK_EXIT_NOTE}`}
      className="fixed bottom-4 left-4 z-50 inline-flex min-h-12 min-w-12 items-center gap-2 rounded-full border-2 border-foreground bg-background px-5 py-3 text-base font-semibold text-foreground shadow-lg hover:bg-surface-hover focus-visible:outline-2 focus-visible:outline-offset-2 print:hidden"
    >
      <LogOut className="h-5 w-5" aria-hidden="true" />
      Uscita rapida
    </button>
  )
}
