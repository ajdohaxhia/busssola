import { PREDATORI_LESSONS } from './lessons/predatori'
import { PRIVACY_LESSONS } from './lessons/privacy'
import { PHISHING_LESSONS, BULLISMO_LESSONS } from './lessons/phishing_bullismo'
import { SOCIAL_GDPR_LESSONS } from './lessons/social_gdpr_more'
import { EXTRA_SOCIAL_GDPR_SCHOOL_GAMING } from './lessons/extra_lessons'
import { FINAL_MODULES_LESSONS } from './lessons/final_modules'

export interface Lesson {
    id: string
    title: string
    content: string
    tips: string[]
}

export interface GameQuestion {
    id: string
    text: string
    options: string[]
    correct: number
    explanation: string
}

export interface Game {
    id: string
    title: string
    description: string
    type: 'classifier' | 'chatbot' | 'analyzer' | 'builder' | 'detector' | 'recognizer' | 'exercise'
    questions?: GameQuestion[]
}

export interface Module {
    id: string
    title: string
    description: string
    duration: string
    difficulty: 'Base' | 'Intermedia' | 'Avanzata'
    icon: string
    color: string
    lessons: Lesson[]
    games: Game[]
    tips: string[]
}

// Helper to split extra lessons by module
const getExtraByModule = (moduleId: string) => {
    return EXTRA_SOCIAL_GDPR_SCHOOL_GAMING.filter((l: Lesson) => l.id.startsWith(moduleId))
}

export const MODULES_DATA: Module[] = [
    {
        id: 'predatori-online',
        title: 'Predatori Online',
        description: 'Grooming, sextortion, catfish detection',
        duration: '2-3 ore',
        difficulty: 'Intermedia',
        icon: '🚨',
        color: 'from-red-900',
        lessons: PREDATORI_LESSONS,
        games: [
            {
                id: 'grooming-chatbot',
                title: 'Riconosci il Groomer',
                description: 'Conversazione simulata con un groomer. Scegli le risposte corrette.',
                type: 'chatbot',
            }
        ],
        tips: PREDATORI_LESSONS.flatMap((l: Lesson) => l.tips).slice(0, 15)
    },
    {
        id: 'privacy-tecnica',
        title: 'Privacy Tecnica',
        description: 'Fingerprinting, tracking, browser hardening',
        duration: '3-4 ore',
        difficulty: 'Avanzata',
        icon: '🔒',
        color: 'from-blue-900',
        lessons: PRIVACY_LESSONS,
        games: [
            {
                id: 'privacy-audit',
                title: 'Hardware Audit',
                description: 'Controlla quali sensori sono attivi sul tuo dispositivo.',
                type: 'analyzer'
            }
        ],
        tips: PRIVACY_LESSONS.flatMap((l: Lesson) => l.tips).slice(0, 15)
    },
    {
        id: 'phishing-malware',
        title: 'Phishing & Malware',
        description: 'Riconoscere truffe, ransomware e scam',
        duration: '2-3 ore',
        difficulty: 'Intermedia',
        icon: '🎣',
        color: 'from-orange-900',
        lessons: PHISHING_LESSONS,
        games: [
            {
                id: 'phishing-detector',
                title: 'Email Investigator',
                description: 'Smaschera le email di phishing prima che facciano danni.',
                type: 'detector',
                questions: [
                    { id: '1', text: 'Email da "Poste Italiane" con link a "poste-it-sicuro.com". Cosa fai?', options: ['Clicco', 'Segnalo', 'Puro fake'], correct: 2, explanation: 'Il vero dominio è poste.it' },
                    { id: '2', text: 'Vedi un popup "Il tuo PC è infetto!". Cosa fai?', options: ['Chiamo il numero', 'Chiudo il browser', 'Aggiorno'], correct: 1, explanation: 'È un popup truffa.' },
                    { id: '3', text: 'Amazon ti regala un iPhone se rispondi a un sondaggio via SMS.', options: ['Vero', 'Phishing', 'Forse'], correct: 1, explanation: 'Amazon non regala iPhone via SMS.' },
                ]
            }
        ],
        tips: PHISHING_LESSONS.flatMap((l: Lesson) => l.tips).slice(0, 15)
    },
    {
        id: 'cyberbullismo',
        title: 'Cyberbullismo',
        description: 'Hate speech, stalking e supporto psicologico',
        duration: '2.5 ore',
        difficulty: 'Intermedia',
        icon: '💔',
        color: 'from-pink-900',
        lessons: BULLISMO_LESSONS,
        games: [
            {
                id: 'bullismo-logic',
                title: 'Dossier dei Reati',
                description: 'Identifica quali comportamenti online violano la legge.',
                type: 'analyzer'
            }
        ],
        tips: BULLISMO_LESSONS.flatMap((l: Lesson) => l.tips).slice(0, 15)
    },
    {
        id: 'social-addiction',
        title: 'Social Media Addiction',
        description: 'Dark patterns, dopamina e digital detox',
        duration: '2 ore',
        difficulty: 'Base',
        icon: '📱',
        color: 'from-violet-900',
        lessons: [...SOCIAL_GDPR_LESSONS.filter((l: Lesson) => l.id.startsWith('5')), ...EXTRA_SOCIAL_GDPR_SCHOOL_GAMING.filter((l: Lesson) => l.id.startsWith('5'))],
        games: [
            {
                id: 'addiction-tracker',
                title: 'Mood Tracker',
                description: 'Bilancia ore di schermo e barre di energia mentale.',
                type: 'exercise'
            }
        ],
        tips: SOCIAL_GDPR_LESSONS.flatMap((l: Lesson) => l.tips).slice(0, 15)
    },
    {
        id: 'gdpr-dati',
        title: 'GDPR & Dati Personali',
        description: 'Termini di servizio e i tuoi diritti legali',
        duration: '2 ore',
        difficulty: 'Intermedia',
        icon: '📋',
        color: 'from-blue-700',
        lessons: [...SOCIAL_GDPR_LESSONS.filter((l: Lesson) => l.id.startsWith('6')), ...EXTRA_SOCIAL_GDPR_SCHOOL_GAMING.filter((l: Lesson) => l.id.startsWith('6'))],
        games: [
            {
                id: 'gdpr-audit',
                title: 'Data Hunter',
                description: 'Scopri quanti dati un\'app puo estrarre dal tuo telefono.',
                type: 'analyzer'
            }
        ],
        tips: SOCIAL_GDPR_LESSONS.flatMap((l: Lesson) => l.tips).slice(0, 15)
    },
    {
        id: 'scuola-online',
        title: 'Scuola Online',
        description: 'Cyber-hygiene in classe e bullismo tra banchi digitali',
        duration: '1.5 ore',
        difficulty: 'Base',
        icon: '🎓',
        color: 'from-green-900',
        lessons: [...SOCIAL_GDPR_LESSONS.filter((l: Lesson) => l.id.startsWith('7')), ...EXTRA_SOCIAL_GDPR_SCHOOL_GAMING.filter((l: Lesson) => l.id.startsWith('7'))],
        games: [
            {
                id: 'school-defender',
                title: 'Classroom Guardian',
                description: 'Identifica i rischi di sicurezza in una classe virtuale.',
                type: 'detector'
            }
        ],
        tips: SOCIAL_GDPR_LESSONS.flatMap((l: Lesson) => l.tips).slice(0, 10)
    },
    {
        id: 'gaming-communities',
        title: 'Gaming Communities',
        description: 'Tossicità, truffe in-game e protezione IP',
        duration: '2 ore',
        difficulty: 'Intermedia',
        icon: '🎮',
        color: 'from-indigo-900',
        lessons: [...SOCIAL_GDPR_LESSONS.filter((l: Lesson) => l.id.startsWith('8')), ...EXTRA_SOCIAL_GDPR_SCHOOL_GAMING.filter((l: Lesson) => l.id.startsWith('8'))],
        games: [
            {
                id: 'game-secure',
                title: 'Secure Gamer',
                description: 'Proteggi il tuo account da un tentativo di furto skin.',
                type: 'recognizer'
            }
        ],
        tips: SOCIAL_GDPR_LESSONS.flatMap((l: Lesson) => l.tips).slice(0, 10)
    },
    {
        id: 'ai-deepfake',
        title: 'AI & Deepfake',
        description: 'Riconoscere immagini e video sintetici',
        duration: '2 ore',
        difficulty: 'Avanzata',
        icon: '🤖',
        color: 'from-cyan-900',
        lessons: FINAL_MODULES_LESSONS.filter((l: Lesson) => l.id.startsWith('9')),
        games: [
            {
                id: 'ai-detector',
                title: 'Deepfake Hunter',
                description: 'Distingui tra volti reali e volti generati dall\'IA.',
                type: 'detector'
            }
        ],
        tips: FINAL_MODULES_LESSONS.filter((l: Lesson) => l.id.startsWith('9')).flatMap((l: Lesson) => l.tips)
    },
    {
        id: 'finanze-crypto',
        title: 'Finanze & Crypto Scam',
        description: 'Trading, loot boxes e schemi Ponzi',
        duration: '2 ore',
        difficulty: 'Avanzata',
        icon: '💰',
        color: 'from-amber-900',
        lessons: FINAL_MODULES_LESSONS.filter((l: Lesson) => l.id.startsWith('10')),
        games: [
            {
                id: 'scam-recognizer',
                title: 'Broker o Truffatore?',
                description: 'Analizza le promesse di un influencer finanziario.',
                type: 'recognizer'
            }
        ],
        tips: FINAL_MODULES_LESSONS.filter((l: Lesson) => l.id.startsWith('10')).flatMap((l: Lesson) => l.tips)
    },
    {
        id: 'sexting-legal',
        title: 'Sexting & Legal Risks',
        description: 'Consenso, revenge porn e conseguenze penali',
        duration: '2 ore',
        difficulty: 'Avanzata',
        icon: '⚖️',
        color: 'from-red-700',
        lessons: FINAL_MODULES_LESSONS.filter((l: Lesson) => l.id.startsWith('11')),
        games: [
            {
                id: 'legal-advisor',
                title: 'Il Tuo Avvocato',
                description: 'Decidi come agire legalmente in scenari critici.',
                type: 'analyzer'
            }
        ],
        tips: FINAL_MODULES_LESSONS.filter((l: Lesson) => l.id.startsWith('11')).flatMap((l: Lesson) => l.tips)
    },
    {
        id: 'diritti-digitali',
        title: 'Diritti Digitali',
        description: 'Net Neutrality, censura e attivismo',
        duration: '1.5 ore',
        difficulty: 'Base',
        icon: '✊',
        color: 'from-orange-700',
        lessons: FINAL_MODULES_LESSONS.filter((l: Lesson) => l.id.startsWith('12')),
        games: [
            {
                id: 'activism-game',
                title: 'Digital Activist',
                description: 'Scegli le strategie migliori per difendere un diritto online.',
                type: 'builder'
            }
        ],
        tips: FINAL_MODULES_LESSONS.filter((l: Lesson) => l.id.startsWith('12')).flatMap((l: Lesson) => l.tips)
    },
    {
        id: 'salute-mentale',
        title: 'Salute Mentale',
        description: 'Benessere psicologico e equilibrio digitale',
        duration: '2 ore',
        difficulty: 'Base',
        icon: '🧠',
        color: 'from-teal-900',
        lessons: FINAL_MODULES_LESSONS.filter((l: Lesson) => l.id.startsWith('13')),
        games: [
            {
                id: 'mood-balance',
                title: 'Mindful Tracker',
                description: 'Bilancia tempo schermi e barra dell\'energia mentale.',
                type: 'exercise'
            }
        ],
        tips: FINAL_MODULES_LESSONS.filter((l: Lesson) => l.id.startsWith('13')).flatMap((l: Lesson) => l.tips)
    }
];
