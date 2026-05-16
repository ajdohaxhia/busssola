'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

type FaqItem = { q: string; a: string }

export function FaqAccordionClient({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {faqs.map((faq, i) => (
        <div key={i} className="border-2 border-border rounded-[2rem] overflow-hidden bg-surface transition-all hover:border-primary/20 hover:shadow-lg group">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between p-8 text-left hover:bg-surface-muted transition-colors focus:outline-none focus:bg-primary/5"
            aria-expanded={openIndex === i}
            aria-controls={`faq-answer-${i}`}
          >
            <span className={cn(
                "font-display font-black pr-8 leading-tight text-lg transition-colors",
                openIndex === i ? "text-primary" : "text-foreground group-hover:text-primary"
            )}>
                {faq.q}
            </span>
            <div className={cn(
                "shrink-0 w-10 h-10 rounded-xl border-2 flex items-center justify-center transition-all shadow-inner",
                openIndex === i ? "bg-primary border-primary" : "bg-background border-border group-hover:border-primary/40"
            )}>
              {openIndex === i ? <Minus size={18} className="text-white" strokeWidth={3} /> : <Plus size={18} className="text-secondary" strokeWidth={3} />}
            </div>
          </button>
          
          <div 
            id={`faq-answer-${i}`}
            className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                openIndex === i ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
            )}
          >
            <div className="px-8 pb-8 pt-0 text-secondary leading-relaxed border-t-2 border-border/40 bg-surface-muted/20 text-lg font-medium">
              <div className="pt-6">
                {faq.a}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
