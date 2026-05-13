export const CATEGORIES = [
    { id: 'first-aid', title: 'Primo soccorso digitale', icon: 'ShieldAlert', description: 'Azioni immediate per emergenze in corso.' },
    { id: 'accounts', title: 'Account & Sicurezza', icon: 'Key', description: 'Protezione accessi, 2FA e recupero profili.' },
    { id: 'scams', title: 'Truffe & Phishing', icon: 'AlertTriangle', description: 'Riconoscere esche e manipolazioni online.' },
    { id: 'sextortion', title: 'Sextortion & Ricatti', icon: 'CameraOff', description: 'Gestione di ricatti sessuali e immagini intime.' },
    { id: 'grooming', title: 'Grooming & Minori', icon: 'Users', description: 'Prevenzione adescamento e sicurezza ragazzi.' },
    { id: 'stalking', title: 'Stalking & Doxxing', icon: 'EyeOff', description: 'Difesa da persecuzioni e diffusione dati.' },
    { id: 'privacy', title: 'Privacy & Smartphone', icon: 'Smartphone', description: 'Configurazione device e protezione identità.' },
    { id: 'school', title: 'Scuola & Famiglia', icon: 'GraduationCap', description: 'Cyberbullismo e protocolli educativi.' },
] as const;

export type CategoryId = typeof CATEGORIES[number]['id'];

export const TIERS = {
    ingenuo: { label: 'Ingenuo', minModules: 0, color: 'text-gray-400' },
    consapevole: { label: 'Consapevole', minModules: 2, color: 'text-neon-yellow' },
    informato: { label: 'Informato', minModules: 4, color: 'text-neon-orange' },
    esperto: { label: 'Esperto', minModules: 8, color: 'text-neon-pink' },
    guardian: { label: 'Guardian Digitale', minModules: 12, color: 'text-neon-mint' }
};
