import { ModuleContent } from "@/types/content";
import React from 'react';

export const m6: ModuleContent = {
    id: 'm6-gdpr',
    title: 'I Tuoi Dati & GDPR',
    lessons: [
        {
            id: 'l1-gdpr',
            title: 'Il GDPR è il tuo Superpotere',
            content: (
                <>
                    <p className="mb-4">
                        In Europa, i tuoi dati SONO TUOI. Il <strong>GDPR</strong> è la legge che ti dà il potere di controllarli.
                    </p>
                    <p className="mb-4">Hai diritto a:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Accesso:</strong> Chiedere a Instagram/Google "datemi tutto quello che sapete su di me".</li>
                        <li><strong>Oblio:</strong> Chiedere "cancellate tutto per sempre".</li>
                        <li><strong>Portabilità:</strong> Spostare i tuoi dati da un servizio all'altro.</li>
                    </ul>
                </>
            )
        },
        {
            id: 'l2-data',
            title: 'Data Minimization',
            content: (
                <>
                    <p className="mb-4">
                        Il modo migliore per proteggere i dati è <strong>non darli</strong>.
                    </p>
                    <p>Quando un sito ti chiede "Data di nascita", se non è strettamente necessario... menti! O non compilare.
                        Riempi solo i campi obbligatori (quelli con l'asterisco *).</p>
                </>
            )
        },
        {
            id: 'l3-breach',
            title: 'Data Breach: Quando i dati scappano',
            content: (
                <>
                    <p className="mb-4">
                        A volte gli hacker rubano i database delle aziende. Questo è un "Data Breach".
                        Il tuo indirizzo e password finiscono online.
                    </p>
                    <p>Controlla se sei stato "bucato" su <strong>haveibeenpwned.com</strong>. Se sì, cambia password subito.</p>
                </>
            )
        },
        {
            id: 'l4-tos',
            title: 'Termini di Servizio (ToS)',
            content: (
                <>
                    <p className="mb-4">"Accetto". La bugia più grande del web.</p>
                    <p className="mb-4">Nessuno legge i ToS. Ma spesso, accettandoli, dai autorizzazione a vendere le tue foto o usare la tua voce per addestrare l'AI.</p>
                    <p>Usa il sito <strong>"Terms of Service; Didn't Read"</strong> (tosdr.org) per vedere un riassunto dei punti critici.</p>
                </>
            )
        },
        {
            id: 'l5-permissions',
            title: 'Permessi delle App',
            content: (
                <>
                    <p className="mb-4">Perché una Torcia vuole accedere alla tua Rubrica? Perché è uno spyware.</p>
                    <p className="mb-4">Controlla regolarmente i permessi nelle Impostazioni. Mai dare "Accesso sempre alla posizione" (scegli "Solo mentre usi l'app").</p>
                    <p>Se un'app chiede permessi strani, disinstallala.</p>
                </>
            )
        }
    ],
    game: {
        type: 'inspector',
        objective: 'Esercita i tuoi diritti e configura la privacy dei dati.',
        data: [
            { id: 'access', label: 'Richiesta Download Dati (GDPR)', status: 'disabled', correctStatus: 'enabled', feedback: 'Fallo ogni tanto per vedere cosa sanno di te.' },
            { id: 'loc', label: 'Cronologia Posizioni Google', status: 'enabled', correctStatus: 'disabled', feedback: 'Google registra ogni tuo passo. Disabilita la History.' },
            { id: 'bday', label: 'Data Nascita Reale (su Forum pubblico)', status: 'enabled', correctStatus: 'disabled', feedback: 'Usa una data falsa per profili non ufficiali. È un dato identificativo.' },
            { id: 'cookie', label: 'Cookie Terze Parti', status: 'enabled', correctStatus: 'disabled', feedback: 'Servono solo a tracciarti tra un sito e l\'altro.' },
            { id: 'login', label: 'Login with Facebook', status: 'enabled', correctStatus: 'disabled', feedback: 'Comodo, ma dà a Facebook dati su tutto ciò che fai altrove.' }
        ]
    }
};
