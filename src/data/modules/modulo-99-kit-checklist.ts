import { Module } from '@/types';

export const modulo_99_kit_checklist: Module = {
    id: 'modulo-99-kit-checklist',
    lastUpdated: '2026-05-14',
    title: 'Kit e Checklist Operative',
    description: 'Raccolta di liste di controllo e kit di documenti pronti all\'uso per ogni evenienza civica e digitale.',
    category: 'documenti',
    difficulty: 'base',
    icon: 'CheckSquare',
    themeColor: 'accent-primary',
    lessons: [
        {
            id: 'kit-documenti-personali',
            slug: 'kit-documenti-personali',
            title: 'Kit Documenti Personali',
            category: 'documenti',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 5,
            mainEntity: 'Busssola',
            summary: 'Tutto quello che dovresti avere sempre pronto in digitale e cartaceo.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            steps: [
                "Scansiona la Carta d'Identità (fronte/retro)",
                "Scansiona la Tessera Sanitaria",
                "Salva il Codice Fiscale in PDF",
                "Crea una cartella protetta sul cloud o chiavetta USB",
                "Tieni una copia cartacea in un luogo sicuro a casa"
            ],
            checklist: [
                "Carta d'Identità valida",
                "Tessera Sanitaria / TEAM",
                "Patente di guida",
                "Passaporto (se posseduto)",
                "Codici PIN/PUK della CIE",
                "Credenziali SPID (senza password)"
            ],
            sources: [
                {
                    title: 'ANPR - Area Cittadino',
                    organization: 'Ministero dell\'Interno',
                    url: 'https://www.anagrafenazionale.interno.it/',
                    type: 'official',
                    usedFor: 'Documenti digitali e certificati.',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'kit-sicurezza-account',
            slug: 'kit-sicurezza-account',
            title: 'Kit Sicurezza Account',
            category: 'sicurezza',
            audience: ['adults', 'minors'],
            level: 'base',
            estimatedMinutes: 10,
            mainEntity: 'ACN',
            summary: 'Lista di controllo per blindare i tuoi accessi digitali più importanti.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            steps: [
                "Attiva la 2FA (App Authenticator) su Email principale",
                "Attiva la 2FA su Social (Instagram, Facebook, LinkedIn)",
                "Attiva la 2FA su Messaggistica (WhatsApp, Telegram)",
                "Scarica e stampa i Codici di Backup",
                "Verifica i dispositivi collegati"
            ],
            checklist: [
                "Password Manager configurato",
                "Password diverse per ogni sito",
                "2FA attiva ovunque possibile",
                "Codici backup salvati offline",
                "Email di recupero aggiornata"
            ],
            sources: [
                {
                    title: 'Cybersicurezza Nazionale',
                    organization: 'ACN',
                    url: 'https://www.acn.gov.it/',
                    type: 'official',
                    usedFor: 'Linee guida sicurezza.',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        },
        {
            id: 'kit-telefono-rubato',
            slug: 'kit-telefono-rubato-emergenza',
            title: 'Kit Telefono Rubato',
            category: 'emergenze',
            audience: ['adults', 'victims'],
            level: 'base',
            estimatedMinutes: 10,
            mainEntity: 'Polizia Postale',
            emergencyLevel: 'high',
            summary: 'Cosa fare immediatamente se perdi o ti rubano lo smartphone.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-14',
            steps: [
                "Usa 'Trova il mio dispositivo' da un altro PC",
                "Blocca il dispositivo e attiva il 'Wipe' remoto",
                "Chiama l'operatore per bloccare la SIM",
                "Contatta la banca per bloccare app di pagamento",
                "Fai denuncia fornendo il codice IMEI"
            ],
            checklist: [
                "IMEI recuperato",
                "SIM bloccata",
                "Banca avvisata",
                "Password account principale cambiata",
                "Denuncia sporta"
            ],
            sources: [
                {
                    title: 'Commissariato Online',
                    organization: 'Polizia Postale',
                    url: 'https://www.commissariatodips.it/',
                    type: 'official',
                    usedFor: 'Denuncia furto.',
                    lastCheckedAt: '2026-05-14'
                }
            ]
        }
        // ... more kits can be added here
    ]
};
