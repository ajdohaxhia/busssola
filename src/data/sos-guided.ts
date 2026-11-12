// Percorso guidato del Centro SOS (masterplan §6).
// Solo scelte a risposta chiusa: nessun testo libero.
// STATO: contenuto da revisione. Non pubblicare modifiche senza revisori nominati.

export type GuidedOutcome = {
  id: string
  title: string
  // Se true, la scheda evita le azioni che possono allertare chi controlla
  // (cambio password, ripristino di fabbrica, raccolta di prove sul dispositivo)
  // finché la persona non ha parlato con il 1522 o un centro antiviolenza.
  controlloDomestico: boolean
  priorita: string[]
  primeAzioni: string[]
  evitare: string[]
  prove: string[]
  servizi: { label: string; href: string }[]
  fonti: { label: string; href: string }[]
  ultimaVerifica: string | null
}

export type GuidedNode = {
  id: string
  question: string
  options: { label: string; next: string }[] // next: id di un nodo o di un esito
}

export const GUIDED_START = 'inizio'

export const GUIDED_NODES: GuidedNode[] = [
  {
    id: 'inizio',
    question: 'Che cosa sta succedendo?',
    options: [
      { label: 'Qualcuno sembra sapere sempre dove sono o cosa scrivo', next: 'controllo' },
      { label: 'Qualcuno mi ricatta con immagini intime', next: 'esito-ricatto' },
      { label: 'Qualcuno pubblica o minaccia di pubblicare foto o dati', next: 'esito-diffusione' },
      { label: 'Ho paura di una persona con cui vivo o che conosco bene', next: 'esito-relazione' },
    ],
  },
  {
    id: 'controllo',
    question: 'Chi potrebbe avere accesso al tuo telefono o ai tuoi account?',
    options: [
      { label: 'Una persona che conosco e che potrebbe conoscere le mie password', next: 'esito-relazione' },
      { label: 'Non so chi, o è una persona che non conosco', next: 'esito-account' },
    ],
  },
]

export const GUIDED_OUTCOMES: GuidedOutcome[] = [
  {
    id: 'esito-relazione',
    title: 'Controllo da una persona vicina',
    controlloDomestico: true,
    priorita: [
      'Se ti senti in pericolo adesso, chiama il 112.',
      'Il 1522 è gratuito, attivo 24 ore su 24, anche via chat, e indirizza ai centri antiviolenza.',
    ],
    primeAzioni: [
      'Parla con il 1522 o con un centro antiviolenza prima di cambiare password o resettare il telefono.',
      'Se puoi, usa un dispositivo che la persona non controlla.',
    ],
    evitare: [
      'Non cambiare password, non resettare il telefono e non rimuovere app finché non hai parlato con un centro.',
      'Non dire alla persona che hai scoperto il controllo, se temi una reazione.',
    ],
    prove: [
      'Annota date e fatti senza salvarli sul dispositivo condiviso, se possibile.',
    ],
    servizi: [
      { label: '1522 — antiviolenza e stalking', href: 'tel:1522' },
      { label: '112 — se c’è pericolo', href: 'tel:112' },
    ],
    fonti: [
      { label: 'Numero Antiviolenza 1522 (Dipartimento Pari Opportunità)', href: 'https://www.pariopportunita.gov.it/it/numeri-utili/1522-numero-antiviolenza-e-antistalking/' },
    ],
    ultimaVerifica: null,
  },
  {
    id: 'esito-ricatto',
    title: 'Ricatto con immagini intime',
    controlloDomestico: false,
    priorita: [
      'Non pagare. Pagare non ferma il ricatto.',
      'Se c’è una minaccia fisica, chiama il 112.',
    ],
    primeAzioni: [
      'Interrompi ogni comunicazione con chi ricatta.',
      'Conserva le chat e il profilo prima di bloccare.',
    ],
    evitare: ['Non inviare altre immagini.', 'Non cancellare le chat prima di averne salvato copia.'],
    prove: ['URL del profilo, username esatto, richieste di pagamento.'],
    servizi: [{ label: 'Polizia Postale', href: 'https://www.commissariatodips.it/' }],
    fonti: [{ label: 'Commissariato di PS online', href: 'https://www.commissariatodips.it/' }],
    ultimaVerifica: null,
  },
  {
    id: 'esito-diffusione',
    title: 'Diffusione di foto o dati',
    controlloDomestico: false,
    priorita: ['Se la diffusione è accompagnata da minacce di persona, chiama il 112.'],
    primeAzioni: [
      'Salva l’URL e uno screenshot con data prima che il contenuto venga rimosso.',
      'Segnala il contenuto alla piattaforma e alla Polizia Postale.',
    ],
    evitare: ['Non condividere di nuovo il link, nemmeno per “mostrarlo”.'],
    prove: ['URL completi, account che ha pubblicato, data di pubblicazione.'],
    servizi: [{ label: 'Polizia Postale', href: 'https://www.commissariatodips.it/' }, { label: 'Garante Privacy', href: 'https://www.garanteprivacy.it/' }],
    fonti: [{ label: 'Garante per la protezione dei dati personali', href: 'https://www.garanteprivacy.it/' }],
    ultimaVerifica: null,
  },
  {
    id: 'esito-account',
    title: 'Account o dispositivo compromessi',
    controlloDomestico: false,
    priorita: ['Se qualcuno ti minaccia di persona, chiama il 112.'],
    primeAzioni: [
      'Cambia la password dell’email da un dispositivo sicuro.',
      'Controlla le sessioni attive e i dispositivi collegati.',
    ],
    evitare: ['Non pagare per “recuperare” l’account.', 'Non inserire codici ricevuti via messaggio a chi te li chiede.'],
    prove: ['Email di avviso ricevute, orari di accesso sospetti.'],
    servizi: [{ label: 'Polizia Postale', href: 'https://www.commissariatodips.it/' }],
    fonti: [{ label: 'Commissariato di PS online', href: 'https://www.commissariatodips.it/' }],
    ultimaVerifica: null,
  },
]

export function getGuidedNode(id: string): GuidedNode | undefined {
  return GUIDED_NODES.find((n) => n.id === id)
}

export function getGuidedOutcome(id: string): GuidedOutcome | undefined {
  return GUIDED_OUTCOMES.find((o) => o.id === id)
}
