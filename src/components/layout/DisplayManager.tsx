'use client'

import { useEffect } from 'react'
import { applyDisplayMode, readDisplayMode } from '@/lib/display-mode'

export function DisplayManager() {
  useEffect(() => {
    applyDisplayMode(readDisplayMode())
  }, [])
  return null
}
