import { Module } from '@/types';

export const modulo_24_casa_digitale: Module = {
    id: 'modulo-24-casa-digitale',
    lastUpdated: '2026-05-16',
    title: 'Casa Digitale e Smart Home',
    description: 'Guida alla gestione sicura della casa digitale: dispositivi IoT, domotica, router, reti WiFi e sicurezza dei sistemi smart home per proteggere la propria abitazione tecnologica.',
    category: 'casa-digitale',
    difficulty: 'intermedia',
    icon: 'Smartphone',
    themeColor: 'accent-blue',
    lessons: [
        {
            id: 'wifi-sicuro',
            slug: 'wifi-casa-sicuro',
            title: 'Sicurezza Wi-Fi di casa',
            category: 'casa-digitale',
            audience: ['cittadini', 'famiglie'],
            level: 'base',
            estimatedMinutes: 12,
            mainEntity: 'ACN',
            summary: 'Il WiFi di casa è il primo ingresso digitale della tua abitazione. Proteggere la rete significa proteggere tutti i dispositivi collegati.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            steps: [
                'Accedi al pannello del router (es. 192.168.1.1)',
                'Cambia la password di amministrazione (non admin/admin)',
                'Usa crittografia WPA3 o WPA2-AES',
                'Disattiva il WPS e crea una rete Ospiti se necessario'
            ],
            checklist: [
                'Password admin cambiata',
                'Password WiFi robusta',
                'WPS disattivato',
                'Firmware aggiornato'
            ],
            sources: [
                {
                    title: 'Navigare in sicurezza',
                    organization: 'ACN',
                    url: 'https://www.acn.gov.it/',
                    type: 'official',
                    usedFor: 'Linee guida',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'dispositivi-iot-privacy',
            slug: 'iot-e-privacy-casa',
            title: 'IoT e privacy: chi ti ascolta?',
            category: 'casa-digitale',
            audience: ['cittadini', 'famiglie'],
            level: 'intermedia',
            estimatedMinutes: 10,
            summary: 'Assistenti vocali e sensori possono raccogliere dati sensibili. Impara a configurare la privacy dei tuoi dispositivi smart.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            steps: [
                'Rivedi le cronologie vocali di Alexa/Google Home',
                'Disattiva il microfono fisico quando non serve',
                'Limita le autorizzazioni delle app di gestione IoT',
                'Verifica dove vengono salvati i dati (Cloud vs Locale)'
            ],
            sources: [
                {
                    title: 'Internet delle cose e privacy',
                    organization: 'Garante Privacy',
                    url: 'https://www.garanteprivacy.it/',
                    type: 'official',
                    usedFor: 'Consigli tutela',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'sicurezza-domotica',
            slug: 'sicurezza-sistemi-domotica',
            title: 'Sicurezza domotica: proteggere gli accessi',
            category: 'casa-digitale',
            audience: ['cittadini'],
            level: 'avanzata',
            estimatedMinutes: 15,
            summary: 'Serrature smart e allarmi connessi richiedono una protezione extra. Non lasciare la porta aperta ai cyber-criminali.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            steps: [
                'Usa l\'autenticazione a due fattori per tutte le app domotiche',
                'Isola i dispositivi domotici in una VLAN o rete WiFi separata',
                'Non usare password predefinite per le telecamere IP',
                'Controlla periodicamente i log degli accessi'
            ],
            sources: [
                {
                    title: 'Cybersecurity per la Smart Home',
                    organization: 'ACN',
                    url: 'https://www.acn.gov.it/',
                    type: 'official',
                    usedFor: 'Best practices',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        },
        {
            id: 'gestione-tecnologica-abitazione',
            slug: 'gestione-tecnologica-abitazione-manutenzione',
            title: 'Gestione tecnologica dell\'abitazione',
            category: 'casa-digitale',
            audience: ['cittadini'],
            level: 'base',
            estimatedMinutes: 10,
            summary: 'Manutenzione regolare e inventario dei dispositivi connessi per una casa sempre efficiente e sicura.',
            status: 'published',
            qualityGatePassed: true,
            lastReviewedAt: '2026-05-16',
            steps: [
                'Crea un elenco di tutti i dispositivi connessi alla tua rete',
                'Pianifica un giorno al mese per controllare gli aggiornamenti firmware',
                'Rimuovi i dispositivi che non usi più o che non ricevono più aggiornamenti (EoL)',
                'Etichetta i router e i nodi mesh per identificarli facilmente'
            ],
            checklist: [
                'Inventario completato',
                'Aggiornamenti verificati',
                'Dispositivi obsoleti scollegati',
                'Backup configurazioni effettuato'
            ],
            sources: [
                {
                    title: 'Manutenzione digitale',
                    organization: 'ACN',
                    url: 'https://www.acn.gov.it/',
                    type: 'official',
                    usedFor: 'Igiene digitale',
                    lastCheckedAt: '2026-05-16'
                }
            ]
        }
    ]
};