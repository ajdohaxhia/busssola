import { modulo_02_privacy_digitale } from './modulo-02-privacy-digitale';
import { modulo_03_password } from './modulo-03-password';
import { modulo_04_email } from './modulo-04-email';
import { modulo_05_smartphone } from './modulo-05-smartphone';
import { modulo_06_computer } from './modulo-06-computer';
import { modulo_07_app_permessi } from './modulo-07-app-permessi';
import { modulo_08_social_media } from './modulo-08-social-media';
import { modulo_09_chat } from './modulo-09-chat';
import { MODULO_1 } from './modulo-1-orientarsi';
import { modulo_10_gaming } from './modulo-10-gaming';
import { modulo_11_livestream } from './modulo-11-livestream';
import { modulo_12_foto_video } from './modulo-12-foto-video';
import { modulo_13_grooming } from './modulo-13-grooming';
import { modulo_14_catfishing } from './modulo-14-catfishing';
import { modulo_15_sextortion } from './modulo-15-sextortion';
import { modulo_16_cyberbullismo } from './modulo-16-cyberbullismo';
import { modulo_17_stalking } from './modulo-17-stalking';
import { modulo_18_truffe_ragazzi } from './modulo-18-truffe-ragazzi';
import { modulo_19_phishing } from './modulo-19-phishing';
import { modulo_20_shopping } from './modulo-20-shopping';
import { modulo_21_soldi_digitali } from './modulo-21-soldi-digitali';
import { modulo_22_recupero_account } from './modulo-22-recupero-account';
import { modulo_23_prove_digitali } from './modulo-23-prove-digitali';
import { modulo_24_emergenze } from './modulo-24-emergenze';
import { modulo_25_crisi_emotiva } from './modulo-25-crisi-emotiva';
import { modulo_26_fake_news } from './modulo-26-fake-news';
import { modulo_27_deepfake } from './modulo-27-deepfake';
import { modulo_28_ricerca } from './modulo-28-ricerca';
import { modulo_29_algoritmi } from './modulo-29-algoritmi';
import { modulo_30_benessere_digitale } from './modulo-30-benessere-digitale';
import { modulo_31_relazioni_sane } from './modulo-31-relazioni-sane';
import { modulo_32_amicizie_gruppi } from './modulo-32-amicizie-gruppi';
import { modulo_33_dating_app } from './modulo-33-dating-app';
import { modulo_34_scuola_digitale } from './modulo-34-scuola-digitale';
import { modulo_35_studiare_online } from './modulo-35-studiare-online';
import { modulo_36_privacy_scuola } from './modulo-36-privacy-scuola';
import { modulo_37_genitori_panico } from './modulo-37-genitori-panico';
import { modulo_38_famiglie_regole } from './modulo-38-famiglie-regole';
import { modulo_39_educatori_classe } from './modulo-39-educatori-classe';
import { modulo_40_policy_scuole } from './modulo-40-policy-scuole';
import { modulo_41_minori_legge } from './modulo-41-minori-legge';
import { modulo_42_segnalare_bloccare } from './modulo-42-segnalare-bloccare';
import { modulo_43_viaggi_wifi } from './modulo-43-viaggi-wifi';
import { modulo_44_geolocalizzazione } from './modulo-44-geolocalizzazione';
import { modulo_45_cloud_backup } from './modulo-45-cloud-backup';
import { modulo_46_casa_connessa } from './modulo-46-casa-connessa';
import { modulo_47_ai_quotidiana } from './modulo-47-ai-quotidiana';
import { modulo_48_creativita_copyright } from './modulo-48-creativita-copyright';
import { modulo_49_reputazione } from './modulo-49-reputazione';
import { modulo_50_percorso_finale } from './modulo-50-percorso-finale';

export const MODULES_DATA = [
    modulo_02_privacy_digitale,
    modulo_03_password,
    modulo_04_email,
    modulo_05_smartphone,
    modulo_06_computer,
    modulo_07_app_permessi,
    modulo_08_social_media,
    modulo_09_chat,
    MODULO_1,
    modulo_10_gaming,
    modulo_11_livestream,
    modulo_12_foto_video,
    modulo_13_grooming,
    modulo_14_catfishing,
    modulo_15_sextortion,
    modulo_16_cyberbullismo,
    modulo_17_stalking,
    modulo_18_truffe_ragazzi,
    modulo_19_phishing,
    modulo_20_shopping,
    modulo_21_soldi_digitali,
    modulo_22_recupero_account,
    modulo_23_prove_digitali,
    modulo_24_emergenze,
    modulo_25_crisi_emotiva,
    modulo_26_fake_news,
    modulo_27_deepfake,
    modulo_28_ricerca,
    modulo_29_algoritmi,
    modulo_30_benessere_digitale,
    modulo_31_relazioni_sane,
    modulo_32_amicizie_gruppi,
    modulo_33_dating_app,
    modulo_34_scuola_digitale,
    modulo_35_studiare_online,
    modulo_36_privacy_scuola,
    modulo_37_genitori_panico,
    modulo_38_famiglie_regole,
    modulo_39_educatori_classe,
    modulo_40_policy_scuole,
    modulo_41_minori_legge,
    modulo_42_segnalare_bloccare,
    modulo_43_viaggi_wifi,
    modulo_44_geolocalizzazione,
    modulo_45_cloud_backup,
    modulo_46_casa_connessa,
    modulo_47_ai_quotidiana,
    modulo_48_creativita_copyright,
    modulo_49_reputazione,
    modulo_50_percorso_finale,
];

export const ALL_MODULES = MODULES_DATA;

export function getModuleById(id: string) {
    return ALL_MODULES.find(m => m.id === id);
}
