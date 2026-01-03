import { ModuleContent } from "@/types/content";
import React from 'react';

export const m12: ModuleContent = {
    id: 'm12-rights',
    title: 'Diritti Digitali & Libertà',
    lessons: [
        {
            id: 'l1-censorship',
            title: 'Censura nel Mondo',
            content: (
                <>
                    <p className="mb-4">
                        Non tutti hanno il "nostro" internet. In molti paesi, siti come Wikipedia o YouTube sono bloccati.
                        Ma anche in occidente, la sorveglianza di massa è reale.
                    </p>
                </>
            )
        },
        {
            id: 'l2-tools',
            title: 'Strumenti di Libertà',
            content: (
                <>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Tor Browser:</strong> Ti permette di navigare anonimamente rimbalzando il segnale su 3 nodi nel mondo. Usato da attivisti e giornalisti.</li>
                        <li><strong>Signal:</strong> L'unica app di messaggistica veramente sicura (usata da Snowden).</li>
                        <li><strong>ProtonMail:</strong> Email cifrata svizzera per proteggere le tue comunicazioni.</li>
                    </ul>
                </>
            )
        },
        {
            id: 'l3-net-neutrality',
            title: 'Net Neutrality',
            content: (
                <>
                    <p className="mb-4">
                        Senza "Neutralità della Rete", il tuo operatore potrebbe rallentare Netflix per farti comprare il SUO servizio streaming.
                        Internet deve essere libera e uguale per tutti i pacchetti dati.
                    </p>
                </>
            )
        },
        {
            id: 'l4-activism',
            title: 'Attivismo Digitale',
            content: (
                <>
                    <p className="mb-4">Hacktivism non è solo "Anonymous". È proteggere la libertà di parola.</p>
                    <p className="mb-4">Supporta organizzazioni come <strong>EFF (Electronic Frontier Foundation)</strong> che combattono in tribunale per i tuoi diritti digitali.</p>
                </>
            )
        },
        {
            id: 'l5-open-source',
            title: 'Open Source',
            content: (
                <>
                    <p className="mb-4">Perché fidarsi di un codice che non puoi leggere?</p>
                    <p className="mb-4">Il software Open Source (come Linux, Firefox, VLC) ha il codice pubblico. Chiunque può controllare che non ci siano backdoor o spyware. È la base della fiducia digitale.</p>
                </>
            )
        }
    ],

};
