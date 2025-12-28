import { PREDATORI_ONLINE_MODULE } from './predatori-online'
import { PRIVACY_TECNICA_MODULE } from './privacy-tecnica'
import { PHISHING_MODULE } from './phishing-social-engineering'
import { CYBERBULLISMO_MODULE } from './cyberbullismo-stalking'
import { SOCIAL_ADDICTION_MODULE } from './social-addiction'
import { GDPR_MODULE } from './gdpr-data-breach'
import { SCUOLA_MODULE } from './scuola-insegnanti'
import { GAMING_MODULE } from './gaming-communities'
import { AI_DEEPFAKE_MODULE } from './ai-deepfake'
import { FINANZE_MODULE } from './finanze-crypto'
import { SEXTING_MODULE } from './sexting-legal'
import { DIRITTI_DIGITALI_MODULE } from './diritti-digitali'
import { SALUTE_MENTALE_MODULE } from './salute-mentale'
import { RELAZIONI_ONLINE_MODULE } from './relazioni-online'

export const MODULES_DATA = [
    PREDATORI_ONLINE_MODULE,
    PRIVACY_TECNICA_MODULE,
    PHISHING_MODULE,
    CYBERBULLISMO_MODULE,
    SOCIAL_ADDICTION_MODULE,
    GDPR_MODULE,
    SCUOLA_MODULE,
    GAMING_MODULE,
    AI_DEEPFAKE_MODULE,
    FINANZE_MODULE,
    SEXTING_MODULE,
    DIRITTI_DIGITALI_MODULE,
    SALUTE_MENTALE_MODULE,
    RELAZIONI_ONLINE_MODULE,
]





export const ALL_MODULES = MODULES_DATA

export function getModuleById(id: string) {
    return ALL_MODULES.find(m => m.id === id)
}
