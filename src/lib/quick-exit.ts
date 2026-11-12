// Destinazione dell'uscita rapida (masterplan §6, §9.4).
// Pagina neutra, scelta dal team: non deve rivelare il tema del sito.
// Per cambiarla, modificare solo questa costante.
export const QUICK_EXIT_URL = 'https://www.google.com/'

export const QUICK_EXIT_NOTE =
  'Cambia pagina. Non cancella la cronologia del browser, la cache o le tracce di rete.'

export function quickExit(): void {
  try {
    // replace: la pagina attuale non resta nella cronologia di questa scheda.
    window.location.replace(QUICK_EXIT_URL)
  } catch {
    window.location.href = QUICK_EXIT_URL
  }
}
