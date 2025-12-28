'use client'

import { useEffect } from 'react'
import { useGameStore } from '@/store/useGameStore'

export function ThemeManager() {
    const { theme } = useGameStore()

    useEffect(() => {
        const root = window.document.documentElement
        if (theme === 'dark') {
            root.classList.add('dark')
            root.classList.remove('light')
        } else {
            root.classList.add('light')
            root.classList.remove('dark')
        }
    }, [theme])

    return null
}
