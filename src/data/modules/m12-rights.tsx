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
    game: {
        type: 'classifier',
        objective: 'Scegli gli strumenti giusti per la privacy e la libertà.',
        data: [
            { id: '1', type: 'text', content: "Vuoi chattare con un giornalista in modo sicuro al 100%.", correct: 'safe', explanation: 'Usa Signal. Ha la crittografia end-to-end più affidabile e non salva metadati.' },
            { id: '2', type: 'text', content: "Vuoi navigare senza che l'ISP o la scuola vedano i siti.", correct: 'safe', explanation: 'Usa Tor Browser o una VPN affidabile.' },
            { id: '3', type: 'text', content: "Usi la chat di Facebook per organizzare una protesta.", correct: 'unsafe', explanation: 'Facebook non è privato. I metadati sono visibili e possono essere richiesti dalle autorità.' },
            { id: '4', type: 'text', content: "Usi la modalità 'Incognito' di Chrome per essere anonimo.", correct: 'unsafe', explanation: 'Falso mito! Incognito non ti rende anonimo. Nasconde solo la cronologia sul TUO computer, non alla rete.' }
        ]
    }
};
