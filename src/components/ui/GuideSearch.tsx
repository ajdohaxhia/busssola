'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function GuideSearch({ initialQuery = '', variant = 'hero' }: { initialQuery?: string; variant?: 'hero' | 'bar' }) {
    const router = useRouter()
    const [q, setQ] = useState(initialQuery)

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        const query = q.trim()
        router.push(query ? `/moduli/?q=${encodeURIComponent(query)}` : '/moduli/')
    }

    return (
        <form onSubmit={onSubmit} className="relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
            <input
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="SPID, 730, ISEE, NASpI, passaporto…"
                className={variant === 'hero'
                    ? 'w-full h-16 pl-14 pr-32 rounded-2xl border border-border bg-surface text-base'
                    : 'w-full h-12 pl-12 pr-24 rounded-xl border border-border bg-surface'
                }
                aria-label="Cerca una guida"
            />
            <Button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl">
                Cerca
            </Button>
        </form>
    )
}
