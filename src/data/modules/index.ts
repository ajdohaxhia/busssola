import { PREDATORI_ONLINE_MODULE } from './predatori-online'
import { PRIVACY_TECNICA_MODULE } from './privacy-tecnica'
import { PHISHING_MODULE } from './phishing-social-engineering'
import { CYBERBULLISMO_MODULE } from './cyberbullismo-stalking'
import { SOCIAL_ADDICTION_MODULE } from './social-addiction'
import { GDPR_MODULE } from './gdpr-data-breach'
import { SCUOLA_MODULE } from './scuola-insegnanti'

export const MODULES_DATA = [
    PREDATORI_ONLINE_MODULE,
    PRIVACY_TECNICA_MODULE,
    PHISHING_MODULE,
    CYBERBULLISMO_MODULE,
    SOCIAL_ADDICTION_MODULE,
    GDPR_MODULE,
    SCUOLA_MODULE,
]

export const ALL_MODULES = MODULES_DATA

export function getModuleById(id: string) {
    return ALL_MODULES.find(m => m.id === id)
}
