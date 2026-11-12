# Verifica delle fonti delle schede SOS

Data: 12 novembre 2026. Metodo: apertura delle pagine con un agente di lettura web. Il controllo riguarda l'esistenza della pagina e la presenza dell'argomento, non la corrispondenza di ogni singola frase.

## Esiti

| Fonte nella scheda | Esito iniziale | Azione |
|---|---|---|
| helpdesk.spid.gov.it | 200, argomento confermato | Nessuna |
| commissariatodips.it | 200, argomento confermato | Nessuna |
| pariopportunita.gov.it (1522) | 200, argomento confermato | Nessuna |
| garanteprivacy.it (home) | 200 | Nessuna |
| instagram.com/hacked | 200, titolo confermato; il corpo non è leggibile | Da verificare a mano nel browser |
| certfin.it/cittadini | **404** | Sostituita con certfin.it/educational/consigli-utili/ (200). È una pagina indice: copre il tema solo in parte |
| consob.it/web/area-pubblica/truffe | **404** | Sostituita con consob.it/web/area-pubblica/occhio-alle-truffe (200, argomento confermato) |
| garanteprivacy.it/temi/internet-e-nuove-tecnologie/revenge-porn | **404** | Sostituita con garanteprivacy.it/temi/revengeporn (200, argomento confermato) |
| garanteprivacy.it/home/modulistica | **404** | Sostituita con garanteprivacy.it/home/modulistica-e-servizi-online (200) |
| ispettorato.gov.it/.../Richiesta-di-intervento-ispettivo.aspx | **404** | Sostituita con ispettorato.gov.it/servizi-e-modulistica/scopri-i-servizi-e-la-modulistica/ (200, servizio confermato) |

## Da fare

- La pagina CERTFin sostitutiva è un indice: per l'avviso sui pagamenti serve una pagina specifica.
- Instagram /hacked va aperta nel browser e confermata a mano.
- Le fonti non verificate dalle schede SOS sono ancora da controllare una per una nei dati delle lezioni (vedi `audit-fonti-per-lezione.md`).
- Le date di controllo nel codice (`CHECKED`) restano costanti: vanno sostituite con le date reali per ogni scheda.
