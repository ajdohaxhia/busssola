export type Difficulty = 'base' | 'intermedia' | 'avanzata' | 'medio' | 'avanzato';

export interface Source {
  title: string;
  organization: string;
  url: string;
  type: 'official' | 'institutional' | 'platform' | 'nonprofit' | 'expert';
  usedFor: string;
  lastCheckedAt: string; // YYYY-MM-DD
}

/**
 * Lesson (Lezione o Scheda Pratica)
 * The atomic unit of content in Busssola.
 */
export interface Lesson {
  id: string;
  slug?: string;
  title: string;
  category: string;
  audience: ('adults' | 'minors' | 'parents' | 'teachers' | 'victims' | 'prevention' | 'school' | 'cittadini' | 'lavoratori' | 'famiglie' | 'studenti' | 'avanzata')[];
  level: Difficulty;
  estimatedMinutes: number;
  estimatedCosts?: string;
  summary: string; // Breve descrizione
  status: 'published' | 'draft' | 'needs_sources' | 'needs_review';
  emergencyLevel?: 'low' | 'medium' | 'high' | 'sos';
  tags?: string[];
  
  // Synthesis & Context
  synthesis?: string; // Sintesi operativa
  scenario?: string; // Cosa sta succedendo / Contesto
  question?: string; // La domanda a cui risponde
  
  // Legacy / Risk-specific fields
  whatIsHappening?: string; 
  preserveEvidence?: string[];
  warningSigns?: string[]; // Sintomi o segnali (per SOS)
  
  // Actionable Content
  whenToDo?: string; // Quando serve
  doNow: string[]; // Cosa fare subito
  dontDo: string[]; // Cosa NON fare
  whatToPrepare?: string[]; // Documenti o cose da preparare
  whatYouNeed?: string[]; // Legacy
  steps?: string[]; // Passaggi procedurali
  commonErrors?: string[]; // Errori comuni
  
  // Support & Resources
  askHelpWhen?: string[]; // Quando chiedere aiuto
  whoCanHelp?: string[]; // Enti o figure che possono aiutare
  officialLinks?: string[]; // Link diretti agli enti
  checklist: string[]; // Checklist finale
  
  // Metadata & Verification
  sources: Source[];
  lastReviewedAt: string; // YYYY-MM-DD
  qualityGatePassed: boolean;
  relatedLessons?: string[];
  mainEntity?: string; // Ente principale di riferimento
  whereToDo?: string; // Dove si fa (online, ufficio, ecc)
}

/**
 * Module (Modulo)
 * A collection of lessons on a macro-topic.
 */
export interface ModuleMetadata {
    id: string;
    number: number;
    title: string;
    subtitle?: string;
    description: string;
    difficulty: Difficulty;
    themeColor?: string;
    icon?: string;
    category?: 'documenti' | 'lavoro' | 'casa' | 'soldi' | 'sicurezza' | 'famiglia' | 'scuola' | 'diritti-digitali' | 'emergenze' | 'documenti-identita' | 'lavoro-disoccupazione';
    progress?: number;
    lessonCount: number;
    featuredType?: 'start' | 'curated' | 'situational' | 'none';
    lastUpdated?: string;
    mainEntity?: string;
    tags?: string[];
}

export interface Module extends Omit<ModuleMetadata, 'lessonCount' | 'number' | 'difficulty'> {
    number?: number;
    difficulty?: Difficulty;
    durationHours?: number;
    lessons: Lesson[];
}

/**
 * LearningPath (Percorso)
 * A curated sequence of modules for specific user situations.
 */
export interface LearningPath {
    id: string;
    title: string;
    description: string;
    audience: string;
    moduleIds: string[];
    estimatedDuration: string;
    cta: string;
    relatedPathIds: string[];
    type: 'onboarding' | 'security' | 'relational' | 'emergency' | 'audience' | 'citizen' | 'worker' | 'parent' | 'student';
    level: Difficulty;
}
