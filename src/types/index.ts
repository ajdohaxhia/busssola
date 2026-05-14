export type Difficulty = 'base' | 'intermedia' | 'avanzata';

export interface Source {
  title: string;
  organization: string;
  url: string;
  type: 'official' | 'institutional' | 'platform' | 'nonprofit' | 'expert';
  usedFor: string;
  lastCheckedAt: string; // YYYY-MM-DD
}

export interface Lesson {
  id: string;
  slug?: string;
  title: string;
  category: string;
  audience: ('adults' | 'minors' | 'parents' | 'teachers' | 'victims' | 'prevention' | 'school' | 'cittadini' | 'lavoratori' | 'famiglie')[];
  level: 'base' | 'medio' | 'avanzato';
  estimatedMinutes: number;
  estimatedCosts?: string;
  summary: string;
  status: 'published' | 'draft' | 'needs_sources' | 'needs_review';
  emergencyLevel?: 'low' | 'medium' | 'high';
  tags?: string[];
  
  // Civic-specific fields (optional)
  mainEntity?: string;
  whenToDo?: string;
  whatYouNeed?: string[];
  whereToDo?: string;
  steps?: string[];
  commonErrors?: string[];
  officialLinks?: string[];
  
  // Existing risk-specific fields
  scenario: string;
  question: string;
  whatIsHappening: string;
  warningSigns: string[];
  doNow: string[];
  dontDo: string[];
  preserveEvidence: string[];
  askHelpWhen: string[];
  whoCanHelp: string[];
  checklist: string[];
  
  sources: Source[];
  lastReviewedAt: string; // YYYY-MM-DD
  qualityGatePassed: boolean;
  relatedLessons?: string[];
}

export interface ModuleMetadata {
    id: string;
    number: number;
    title: string;
    subtitle?: string;
    description: string;
    difficulty: Difficulty;
    themeColor?: string;
    icon?: string;
    category?: string;
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

export interface LearningPath {
    id: string;
    title: string;
    description: string;
    audience: string;
    moduleIds: string[];
    estimatedDuration: string;
    cta: string;
    relatedPathIds: string[];
    type: 'onboarding' | 'security' | 'relational' | 'emergency' | 'audience';
    level: Difficulty;
}
