export type Difficulty = 'base' | 'intermedia' | 'avanzata' | 'medio' | 'avanzato';

export interface Source {
  title: string;
  organization: string;
  url: string;
  type: 'official' | 'institutional' | 'platform' | 'nonprofit' | 'expert';
  usedFor: string;
  lastCheckedAt: string; // YYYY-MM-DD
}

export type CategoryID = 
  | 'documenti' 
  | 'lavoro' 
  | 'casa' 
  | 'soldi' 
  | 'bonus' 
  | 'sanita' 
  | 'famiglia' 
  | 'scuola' 
  | 'sicurezza' 
  | 'truffe' 
  | 'privacy' 
  | 'emergenze' 
  | 'immigrazione' 
  | 'consumatori' 
  | 'mobilita' 
  | 'universita' 
  | 'anziani' 
  | 'disabilita' 
  | 'casa-digitale';

export interface OfficialLinkV2 {
  sourceId: string; // Reference to OFFICIAL_SOURCES
  label?: string;
  ente?: string;
  url?: string;
  useWhen: string;
  beforeOpening: string[];
  warning?: string;
}

/**
 * Lesson (Scheda Pratica o Guida)
 * The atomic unit of content in Busssola.
 */
export interface Lesson {
  id: string;
  slug?: string;
  title: string;
  category: string;
  audience: ('adults' | 'minors' | 'parents' | 'teachers' | 'victims' | 'prevention' | 'school' | 'cittadini' | 'lavoratori' | 'famiglie' | 'studenti' | 'avanzata' | 'stranieri' | 'anziani' | 'disabili' | 'caregiver')[];
  level: Difficulty;
  estimatedMinutes: number;
  estimatedCosts?: string;
  summary: string; // Breve descrizione
  status: 'published' | 'draft' | 'needs_sources' | 'needs_review';
  emergencyLevel?: 'low' | 'medium' | 'high' | 'sos';
  tags?: string[];
  
  // Synthesis & Context
  synthesis?: string; // Sintesi operativa (5 righe)
  scenario?: string; // Cosa sta succedendo / Contesto
  question?: string; // La domanda a cui risponde
  
  // Legacy / Risk-specific fields
  whatIsHappening?: string; 
  preserveEvidence?: string[];
  warningSigns?: string[]; // Sintomi o segnali (per SOS)
  
  // Actionable Content
  whenToDo?: string; // Quando serve
  prerequisites?: string[]; // Prerequisiti / Prima di iniziare
  doNow?: string[]; // Cosa fare subito / Passo dopo passo
  dontDo?: string[]; // Cosa NON fare
  whatToPrepare?: string[]; // Documenti o cose da preparare / Cosa ti serve
  whatYouNeed?: string[]; // Legacy
  steps?: string[]; // Passaggi procedurali
  commonErrors?: string[]; // Errori comuni
  ifYouHaveProblems?: string[]; // Se hai problemi / Quando chiedere aiuto
  
  // Support & Resources
  askHelpWhen?: string[]; // Quando chiedere aiuto
  whoCanHelp?: string[]; // Enti o figure che possono aiutare
  officialLinks?: string[]; // Legacy string links
  officialLinksV2?: OfficialLinkV2[]; // New detailed links referencing registry
  checklist: string[]; // Checklist finale
  
  // Metadata & Verification
  sources: Source[];
  lastReviewedAt: string; // YYYY-MM-DD
  qualityGatePassed: boolean;
  relatedLessons?: string[];
  relatedGlossaryTerms?: string[];
  mainEntity?: string; // Ente principale di riferimento
  whereToDo?: string; // Dove si fa (online, ufficio, ecc)
  timeToComplete?: string; // Tempi indicativi (es. "10 minuti", "3 giorni")
  practicalDisclaimer?: string; // Disclaimer pratico
}

/**
 * Module (Modulo o Area Tematica)
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
    category?: CategoryID;
    progress?: number;
    lessonCount: number;
    featuredType?: 'start' | 'curated' | 'situational' | 'none';
    lastUpdated?: string;
    mainEntity?: string;
    tags?: string[];
    topProcedures?: string[];
    relatedChecklists?: string[];
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
    type: 'onboarding' | 'security' | 'relational' | 'emergency' | 'audience' | 'citizen' | 'worker' | 'parent' | 'student' | 'stranger' | 'caregiver';
    level: Difficulty;
    goals?: string[];
    steps?: { title: string; description: string; guideId: string }[];
}

/**
 * LifeHack (Trucco Civico)
 * Legal shortcuts and practical tips for citizens.
 */
export interface LifeHack {
    title: string;
    slug: string;
    category: CategoryID;
    target: ('adults' | 'minors' | 'parents' | 'teachers' | 'victims' | 'prevention' | 'school' | 'cittadini' | 'lavoratori' | 'famiglie' | 'studenti' | 'stranieri' | 'anziani' | 'disabili' | 'caregiver')[];
    difficulty: 'facile' | 'media' | 'avanzata';
    time: string;
    benefit: string;
    summary: string;
    whyUseful: string;
    steps: string[];
    whatYouNeed: string[];
    officialLinks: string[]; // Reference to OFFICIAL_SOURCES IDs
    commonErrors: string[];
    limitations: string[];
    relatedGuides?: string[]; // Reference to Lesson slugs
    relatedChecklists?: string[]; // Reference to checklist titles
    sources: Source[];
    lastReviewedAt: string; // YYYY-MM-DD
    badges: ('Risparmia tempo' | 'Evita errore' | 'Privacy' | 'Soldi' | 'Documenti' | 'Sicurezza' | 'Scuola' | 'Casa' | 'Lavoro' | 'Urgente')[];
}
