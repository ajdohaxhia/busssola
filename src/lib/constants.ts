export const MODULES = [
    {
        id: 'm1-predatori',
        title: '1. Predatori Online',
        description: 'Grooming, Sextortion e Catfish',
        icon: 'UserX',
        difficulty: 'Intermedia'
    },
    {
        id: 'm2-privacy',
        title: '2. Privacy Tecnica',
        description: 'DNS, VPN, EXIF e Metadata',
        icon: 'ShieldCheck',
        difficulty: 'Avanzata'
    },
    {
        id: 'm3-phishing',
        title: '3. Phishing & Malware',
        description: 'Riconoscere truffe e virus',
        icon: 'AlertTriangle',
        difficulty: 'Intermedia'
    },
    {
        id: 'm4-cyberbullismo',
        title: '4. Cyberbullismo',
        description: 'Difesa da Stalking e Doxxing',
        icon: 'MessageSquareX',
        difficulty: 'Intermedia'
    },
    {
        id: 'm5-addiction',
        title: '5. Social Addiction',
        description: 'Dark Patterns e Dopamina',
        icon: 'Smartphone',
        difficulty: 'Base'
    },
    {
        id: 'm6-gdpr',
        title: '6. Dati Personali',
        description: 'I tuoi diritti GDPR',
        icon: 'FileText',
        difficulty: 'Intermedia'
    },
    {
        id: 'm7-scuola',
        title: '7. Scuola Online',
        description: 'Privacy in DAD e Meet',
        icon: 'GraduationCap',
        difficulty: 'Base'
    },
    {
        id: 'm8-gaming',
        title: '8. Gaming Safe',
        description: 'Community tossiche e Chat',
        icon: 'Gamepad2',
        difficulty: 'Base'
    },
    {
        id: 'm9-ai-deepfake',
        title: '9. AI & Deepfake',
        description: ' Realtà vs Sintetico',
        icon: 'Bot',
        difficulty: 'Intermedia'
    },
    {
        id: 'm10-finance',
        title: '10. Finanze & Crypto',
        description: 'Scam, Ponzi e Rug Pull',
        icon: 'Bitcoin',
        difficulty: 'Avanzata'
    },
    {
        id: 'm11-sexting',
        title: '11. Sexting & Legge',
        description: 'Rischi legali e Consenso',
        icon: 'Camera',
        difficulty: 'Intermedia'
    },
    {
        id: 'm12-rights',
        title: '12. Diritti Digitali',
        description: 'Censura e Sorveglianza',
        icon: 'Globe',
        difficulty: 'Intermedia'
    }
] as const;

export const TIERS = {
    ingenuo: { label: 'Ingenuo', minModules: 0, color: 'text-gray-400' },
    consapevole: { label: 'Consapevole', minModules: 2, color: 'text-neon-yellow' },
    informato: { label: 'Informato', minModules: 4, color: 'text-neon-orange' },
    esperto: { label: 'Esperto', minModules: 8, color: 'text-neon-pink' },
    guardian: { label: 'Guardian Digitale', minModules: 12, color: 'text-neon-mint' }
};
