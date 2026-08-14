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
import { modulo_23_bonus_isee } from './modulo-23-bonus-isee';
import { modulo_24_casa_digitale } from './modulo-24-casa-digitale';
import { modulo_25_fisco_cittadini } from './modulo-25-fisco-cittadini';
import { modulo_26_poste_pagamenti } from './modulo-26-poste-pagamenti';
import { modulo_27_pensioni_previdenza } from './modulo-27-pensioni-previdenza';
import { modulo_28_cartelle_riscossione } from './modulo-28-cartelle-riscossione';
import { modulo_29_partita_iva_forfettario } from './modulo-29-partita-iva-forfettario';
import { modulo_30_catasto_imu_successioni } from './modulo-30-catasto-imu-successioni';
import { modulo_31_disabilita_legge_104 } from './modulo-31-disabilita-legge-104';
import { modulo_32_famiglia_avanzata } from './modulo-32-famiglia-avanzata';
import { modulo_33_concorsi_pa } from './modulo-33-concorsi-pa';
import { modulo_34_aire_esteri } from './modulo-34-aire-esteri';
import { modulo_35_giustizia_cittadino } from './modulo-35-giustizia-cittadino';
import { modulo_36_animali_affezione } from './modulo-36-animali-affezione';
import { modulo_37_impresa_camerale } from './modulo-37-impresa-camerale';
import { modulo_99_kit_checklist } from './modulo-99-kit-checklist';
import { cambio_residenza } from './casa/cambio-residenza';
import { cie_richiesta } from './documenti/cie-richiesta';
import { telefono_rubato } from './emergenze/telefono-rubato';
import { busta_paga } from './soldi/busta-paga';
import { phishing_bancario } from './truffe/phishing-bancario';

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
    modulo_23_bonus_isee,
    modulo_24_casa_digitale,
    modulo_25_fisco_cittadini,
    modulo_26_poste_pagamenti,
    modulo_27_pensioni_previdenza,
    modulo_28_cartelle_riscossione,
    modulo_29_partita_iva_forfettario,
    modulo_30_catasto_imu_successioni,
    modulo_31_disabilita_legge_104,
    modulo_32_famiglia_avanzata,
    modulo_33_concorsi_pa,
    modulo_34_aire_esteri,
    modulo_35_giustizia_cittadino,
    modulo_36_animali_affezione,
    modulo_37_impresa_camerale,
    modulo_99_kit_checklist,
    cambio_residenza,
    cie_richiesta,
    telefono_rubato,
    busta_paga,
    phishing_bancario,
];

export function getModuleById(id: string) {
    return ALL_MODULES.find(m => m.id === id);
}
