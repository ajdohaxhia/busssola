import { modulo_01_primo_soccorso } from './modulo-01-primo-soccorso';
import { modulo_01b_primo_soccorso } from './modulo-01b-primo-soccorso';
import { modulo_02_account_security } from './modulo-02-account-security';
import { modulo_02b_account_security } from './modulo-02b-account-security';
import { modulo_03_truffe_phishing } from './modulo-03-truffe-phishing';
import { modulo_03b_truffe_phishing } from './modulo-03b-truffe-phishing';
import { modulo_04_sextortion_ricatti } from './modulo-04-sextortion-ricatti';
import { modulo_04b_sextortion_ricatti } from './modulo-04b-sextortion-ricatti';
import { modulo_05_grooming_minori } from './modulo-05-grooming-minori';
import { modulo_05b_grooming_minori } from './modulo-05b-grooming-minori';
import { modulo_06_stalking_doxxing } from './modulo-06-stalking-doxxing';
import { modulo_06b_stalking_doxxing } from './modulo-06b-stalking-doxxing';
import { modulo_07_privacy_smartphone } from './modulo-07-privacy-smartphone';
import { modulo_07b_privacy_smartphone } from './modulo-07b-privacy-smartphone';
import { modulo_08_scuola_famiglia } from './modulo-08-scuola-famiglia';
import { modulo_08b_scuola_famiglia } from './modulo-08b-scuola-famiglia';
import { modulo_09_documenti_identita } from './modulo-09-documenti-identita';
import { modulo_10_lavoro_disoccupazione } from './modulo-10-lavoro-disoccupazione';

export const ALL_MODULES = [
    modulo_01_primo_soccorso,
    modulo_01b_primo_soccorso,
    modulo_02_account_security,
    modulo_02b_account_security,
    modulo_03_truffe_phishing,
    modulo_03b_truffe_phishing,
    modulo_04_sextortion_ricatti,
    modulo_04b_sextortion_ricatti,
    modulo_05_grooming_minori,
    modulo_05b_grooming_minori,
    modulo_06_stalking_doxxing,
    modulo_06b_stalking_doxxing,
    modulo_07_privacy_smartphone,
    modulo_07b_privacy_smartphone,
    modulo_08_scuola_famiglia,
    modulo_08b_scuola_famiglia,
    modulo_09_documenti_identita,
    modulo_10_lavoro_disoccupazione,
];

export function getModuleById(id: string) {
    return ALL_MODULES.find(m => m.id === id);
}
