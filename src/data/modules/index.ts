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
import { modulo_11_documenti_identita_avanzata } from './modulo-11-documenti-identita-avanzata';
import { modulo_12_lavoro_diritti } from './modulo-12-lavoro-diritti';
import { modulo_13_casa_residenza } from './modulo-13-casa-residenza';
import { modulo_14_soldi_banche_truffe } from './modulo-14-soldi-banche-truffe';
import { modulo_15_sicurezza_avanzata } from './modulo-15-sicurezza-avanzata';
import { modulo_16_famiglia_minori } from './modulo-16-famiglia-minori';
import { modulo_17_immigrazione } from './modulo-17-immigrazione';
import { modulo_18_consumatori } from './modulo-18-consumatori';
import { modulo_19_mobilita } from './modulo-19-mobilita';
import { modulo_20_sanita_territoriale } from './modulo-20-sanita-territoriale';
import { modulo_21_anziani_caregiver } from './modulo-21-anziani-caregiver';
import { modulo_22_universita_giovani } from './modulo-22-universita-giovani';
import { modulo_99_kit_checklist } from './modulo-99-kit-checklist';

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
    modulo_11_documenti_identita_avanzata,
    modulo_12_lavoro_diritti,
    modulo_13_casa_residenza,
    modulo_14_soldi_banche_truffe,
    modulo_15_sicurezza_avanzata,
    modulo_16_famiglia_minori,
    modulo_17_immigrazione,
    modulo_18_consumatori,
    modulo_19_mobilita,
    modulo_20_sanita_territoriale,
    modulo_21_anziani_caregiver,
    modulo_22_universita_giovani,
    modulo_99_kit_checklist,
];

export function getModuleById(id: string) {
    return ALL_MODULES.find(m => m.id === id);
}
