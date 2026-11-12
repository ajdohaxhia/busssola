'use client'

import { useEffect, useState } from 'react'
import type { Lesson } from '@/types'

// Vista classe / LIM (masterplan §9). Una idea per schermata, testi grandi,
// spiegazioni rivelate dal docente, nessun timer, nessun suono, nessun dato salvato.
// Lo stato vive solo in questo componente e si azzera all'uscita.

type Screen = {
  kind: string
  title: string
  body?: string
  items?: string[]
  reveal?: boolean
}

export function buildClassScreens(lesson: Lesson): Screen[] {
  const screens: Screen[] = []
  screens.push({ kind: 'Situazione', title: lesson.title, body: lesson.scenario || lesson.summary })
  if (lesson.question) screens.push({ kind: 'Consegna', title: 'Domanda per la classe', body: lesson.question })
  if (lesson.whatIsHappening) {
    screens.push({ kind: 'Spiegazione', title: 'Cosa succede davvero', body: lesson.whatIsHappening, reveal: true })
  }
  const steps = lesson.steps || lesson.doNow || []
  if (steps.length) screens.push({ kind: 'Azioni', title: 'Cosa fare', items: steps })
  const checklist = lesson.checklist || []
  if (checklist.length) screens.push({ kind: 'Riepilogo', title: 'Da ricordare', items: checklist })
  return screens
}

export function LimPresenter({
  lesson,
  moduleTitle,
  onExit,
}: {
  lesson: Lesson
  moduleTitle: string
  onExit: () => void
}) {
  const screens = buildClassScreens(lesson)
  const [index, setIndex] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const screen = screens[index]
  const last = index === screens.length - 1

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onExit()
      if (e.key === 'ArrowRight' && !last) setIndex((i) => i + 1)
      if (e.key === 'ArrowLeft' && index > 0) setIndex((i) => i - 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, last, onExit])

  useEffect(() => setRevealed(false), [index])

  const showBody = screen.body && (!screen.reveal || revealed)

  return (
    <div role="dialog" aria-modal="true" aria-label="Vista classe" className="fixed inset-0 z-[60] overflow-y-auto bg-background text-foreground">
      <div className="mx-auto flex min-h-full max-w-5xl flex-col gap-8 p-6 md:p-12">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xl">
          <p className="font-semibold">
            {moduleTitle} · Schermata {index + 1} di {screens.length}
          </p>
          <button
            type="button"
            onClick={onExit}
            className="min-h-14 rounded-xl border-2 border-foreground px-6 py-3 text-xl font-semibold hover:bg-surface-hover"
          >
            Termina attività
          </button>
        </div>

        <p className="text-lg font-semibold uppercase tracking-widest text-secondary">{screen.kind}</p>
        <h2 className="text-4xl font-display font-semibold leading-tight md:text-6xl">{screen.title}</h2>

        {screen.body && !screen.reveal && (
          <p className="text-3xl leading-relaxed md:text-4xl">{screen.body}</p>
        )}

        {screen.reveal && !revealed && (
          <button
            type="button"
            onClick={() => setRevealed(true)}
            className="min-h-16 self-start rounded-xl border-2 border-foreground px-8 py-4 text-2xl font-semibold hover:bg-surface-hover"
          >
            Mostra spiegazione
          </button>
        )}
        {screen.reveal && showBody && (
          <p className="text-3xl leading-relaxed md:text-4xl">{screen.body}</p>
        )}

        {screen.items && (
          <ol className="list-decimal space-y-4 pl-8 text-3xl leading-relaxed md:text-4xl">
            {screen.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        )}

        <div className="mt-auto flex flex-wrap justify-between gap-4 pt-8">
          <button
            type="button"
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            disabled={index === 0}
            className="min-h-16 rounded-xl border-2 border-foreground px-8 py-4 text-2xl font-semibold disabled:opacity-40"
          >
            Indietro
          </button>
          {!last ? (
            <button
              type="button"
              onClick={() => setIndex((i) => i + 1)}
              className="min-h-16 rounded-xl bg-foreground px-8 py-4 text-2xl font-semibold text-background"
            >
              Avanti
            </button>
          ) : (
            <button
              type="button"
              onClick={onExit}
              className="min-h-16 rounded-xl bg-foreground px-8 py-4 text-2xl font-semibold text-background"
            >
              Fine attività
            </button>
          )}
        </div>
        <p className="text-base text-secondary">
          Le spiegazioni si mostrano quando il docente lo decide. Il pulsante “Termina attività” azzera lo stato di questa vista.
        </p>
      </div>
    </div>
  )
}
