'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { cn } from '@/lib/utils'

interface BreadcrumbItem {
    label: string
    href: string
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[]
    className?: string
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
    return (
        <nav aria-label="Breadcrumb" className={cn("flex items-center text-xs font-bold uppercase tracking-widest text-secondary/60", className)}>
            <ol className="flex items-center gap-2 list-none p-0 m-0" itemScope itemType="https://schema.org/BreadcrumbList">
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                    <Link href="/" itemProp="item" className="hover:text-primary transition-colors flex items-center gap-1">
                        <Home className="w-3 h-3" aria-hidden="true" />
                        <span itemProp="name" className="sr-only">Home</span>
                    </Link>
                    <meta itemProp="position" content="1" />
                </li>
                {items.map((item, index) => (
                    <li key={item.href} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="flex items-center gap-2">
                        <ChevronRight className="w-3 h-3 text-secondary/30" aria-hidden="true" />
                        {index === items.length - 1 ? (
                            <span className="text-foreground truncate max-w-[200px] sm:max-w-md" aria-current="page" itemProp="name">
                                {item.label}
                            </span>
                        ) : (
                            <Link href={item.href} itemProp="item" className="hover:text-primary transition-colors">
                                <span itemProp="name">{item.label}</span>
                            </Link>
                        )}
                        <meta itemProp="position" content={String(index + 2)} />
                    </li>
                ))}
            </ol>
        </nav>
    )
}
