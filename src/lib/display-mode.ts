// Vista di visualizzazione: standard (mobile e desktop) o LIM (proiezione in aula).
// È una preferenza grafica, separata dai progressi di apprendimento (masterplan §12).
// Non registra nulla sull'utente: solo il tipo di schermo scelto.
export type DisplayMode = 'standard' | 'lim'

const KEY = 'bussola-display'

export function readDisplayMode(): DisplayMode {
  try {
    return window.localStorage.getItem(KEY) === 'lim' ? 'lim' : 'standard'
  } catch {
    return 'standard'
  }
}

export function applyDisplayMode(mode: DisplayMode): void {
  document.documentElement.dataset.display = mode
  try {
    window.localStorage.setItem(KEY, mode)
  } catch {
    // archiviazione bloccata: la vista resta attiva solo in questa pagina
  }
}
