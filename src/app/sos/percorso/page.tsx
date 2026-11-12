'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Phone, ShieldAlert } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import {
  GUIDED_START,
  getGuidedNode,
  getGuidedOutcome,
  type GuidedOutcome,
} from '@/data/sos-guided'

export default function SosPercorsoPage() {
  // Storico delle scelte in memoria: nulla viene salvato in localStorage (masterplan §12).
  const [history, setHistory] = useState<string[]>([GUIDED_START])
  const currentId = history[history.length - 1]
  const node = getGuidedNode(currentId)
  const outcome = getGuidedOutcome(currentId)

  const choose = (next: string) => setHistory((h) => [...h, next])
  const back = () => setHistory((h) => (h.length > 1 ? h.slice(0, -1) : h))
  const restart = () => setHistory([GUIDED_START])

  return (
    <Container size="lg" className="py-8 min-h-screen space-y-8">
      <div className="flex items-center justify-between gap-4">
        <Link href="/sos" className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-foreground">
          <ArrowLeft className="w-4 h-4" /> Centro SOS
        </Link>
        <p className="text-xs uppercase tracking-widest text-sos font-semibold">Percorso guidato</p>
      </div>

      <div className="rounded-2xl border border-sos bg-sos-bg p-4 text-sm text-foreground">
        <strong>In revisione.</strong> Questo percorso non è ancora stato validato da revisori nominati. Se c’è pericolo per una persona, chiama il 112.
      </div>

      {node && (
        <section className="space-y-4 max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-display font-semibold text-foreground">{node.question}</h1>
          <div className="grid gap-3">
            {node.options.map((opt) => (
              <button
                key={opt.label}
                type="button"
                onClick={() => choose(opt.next)}
                className="text-left p-5 rounded-2xl border-2 border-border bg-card hover:border-foreground font-semibold"
              >
                {opt.label}
              </button>
            ))}
          </div>
        </section>
      )}

      {outcome && <OutcomeView outcome={outcome} />}

      <div className="flex flex-wrap gap-3">
        {history.length > 1 && (
          <Button variant="outline" onClick={back}>Indietro</Button>
        )}
        {history.length > 1 && (
          <Button variant="ghost" onClick={restart}>Ricomincia</Button>
        )}
      </div>
    </Container>
  )
}

function OutcomeView({ outcome }: { outcome: GuidedOutcome }) {
  return (
    <section className="space-y-6 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-display font-semibold text-foreground">{outcome.title}</h1>

      {outcome.controlloDomestico && (
        <Card className="border-sos bg-sos-bg p-5">
          <p className="font-semibold text-foreground">
            Prima di cambiare password o resettare il telefono, parla con il 1522 o con un centro antiviolenza. Alcune azioni possono allertare la persona che ti controlla.
          </p>
        </Card>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        <Card className="p-5 space-y-2">
          <h2 className="font-semibold text-foreground">Priorità di sicurezza</h2>
          <ul className="list-disc pl-5 text-secondary space-y-1">{outcome.priorita.map((x) => <li key={x}>{x}</li>)}</ul>
        </Card>
        <Card className="p-5 space-y-2">
          <h2 className="font-semibold text-foreground">Prime azioni</h2>
          <ul className="list-disc pl-5 text-secondary space-y-1">{outcome.primeAzioni.map((x) => <li key={x}>{x}</li>)}</ul>
        </Card>
        <Card className="p-5 space-y-2">
          <h2 className="font-semibold text-foreground">Da evitare</h2>
          <ul className="list-disc pl-5 text-secondary space-y-1">{outcome.evitare.map((x) => <li key={x}>{x}</li>)}</ul>
        </Card>
        <Card className="p-5 space-y-2">
          <h2 className="font-semibold text-foreground">Informazioni utili da conservare, se sicuro</h2>
          <ul className="list-disc pl-5 text-secondary space-y-1">{outcome.prove.map((x) => <li key={x}>{x}</li>)}</ul>
        </Card>
      </div>

      <Card className="p-5 space-y-3">
        <h2 className="font-semibold text-foreground">Chi contattare</h2>
        <div className="flex flex-wrap gap-3">
          {outcome.servizi.map((s) => (
            <a key={s.label} href={s.href} className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 font-semibold">
              {s.href.startsWith('tel:') ? <Phone className="w-4 h-4" /> : <ShieldAlert className="w-4 h-4" />}
              {s.label}
            </a>
          ))}
        </div>
      </Card>

      <Card className="p-5 space-y-2">
        <h2 className="font-semibold text-foreground">Fonti</h2>
        <ul className="space-y-1 text-sm">
          {outcome.fonti.map((f) => (
            <li key={f.href}><a className="underline" href={f.href}>{f.label}</a></li>
          ))}
        </ul>
        <p className="text-sm text-secondary">
          Ultima verifica: {outcome.ultimaVerifica ?? 'non ancora registrata da un revisore'}.
        </p>
      </Card>
    </section>
  )
}
