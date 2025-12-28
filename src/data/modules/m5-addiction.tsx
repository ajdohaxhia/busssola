import { ModuleContent } from "@/types/content";
import React from 'react';

export const m5: ModuleContent = {
    id: 'm5-addiction',
    title: 'Social Addiction & Dark Patterns',
    lessons: [
        {
            id: 'l1-dopamine',
            title: 'La Trappola della Dopamina',
            content: (
                <>
                    <p className="mb-4">
                        Hai mai notato che non riesci a smettere di scrollare TikTok? Non è colpa tua. È progettato così.
                        Ogni volta che vedi un video che ti piace, il tuo cervello rilascia <strong>Dopamina</strong>.
                        È lo stesso meccanismo chimico del gioco d'azzardo.
                    </p>
                </>
            )
        },
        {
            id: 'l2-dark',
            title: 'Dark Patterns',
            content: (
                <>
                    <p className="mb-4">Le app usano trucchi psicologici chiamati <em>Dark Patterns</em> per tenerti incollato:</p>
                    <ul className="list-disc pl-5 space-y-4">
                        <li><strong>Infinite Scroll:</strong> Non c'è mai una "fine", quindi non hai mai un segnale per smettere.</li>
                        <li><strong>Streak (Fiamme):</strong> Snapchat crea ansia di "perdere la serie" per obligarti ad aprire l'app ogni giorno.</li>
                        <li><strong>Notification Red Dot:</strong> Il colore rosso è evolutivamente un segnale di allerta. Ti obbliga a cliccare per "pulire" lo schermo.</li>
                    </ul>
                </>
            )
        },
        {
            id: 'l3-fomo',
            title: 'FOMO: Fear Of Missing Out',
            content: (
                <>
                    <p className="mb-4">"Se non guardo le storie, sarò escluso". Questa è la FOMO.</p>
                    <p className="mb-4">Ricorda: sui social vedi solo gli "highlights" della vita degli altri. Nessuno posta quando è annoiato, triste o sta studiando.</p>
                    <p className="font-bold">Il confronto con le vite perfette degli altri è la causa n.1 di infelicità online.</p>
                </>
            )
        },
        {
            id: 'l4-sleep',
            title: 'Luce Blu e Sonno',
            content: (
                <>
                    <p className="mb-4">Usare il telefono a letto distrugge il sonno.</p>
                    <p className="mb-4">La luce blu degli schermi dice al cervello "è giorno, stai sveglio!", bloccando la Melatonina.</p>
                    <p><strong>Biohack:</strong> Installa "f.lux" sul PC e usa "Night Shift" o "Eye Comfort Shield" sul telefono dalle 21:00 in poi.</p>
                </>
            )
        },
        {
            id: 'l5-detox',
            title: 'Digital Detox',
            content: (
                <>
                    <p className="mb-4">Riprendi il controllo:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Disabilita <strong>TUTTE</strong> le notifiche (tranne messaggi diretti importanti).</li>
                        <li>Imposta il telefono in <strong>Bianco e Nero</strong> (Grayscale). Diventa subito meno attraente.</li>
                        <li>Compra una sveglia fisica e lascia il telefono in un'altra stanza di notte.</li>
                    </ul>
                </>
            )
        }
    ],
    game: {
        type: 'inspector',
        objective: 'Rimuovi le fonti di distrazione e dipendenza dal tuo "profilo".',
        data: [
            { id: 'notif', label: 'Notifiche Push (Tutte)', status: 'enabled', correctStatus: 'disabled', feedback: 'Le notifiche comandano la tua attenzione. Disabilitale.' },
            { id: 'gray', label: 'Modalità Grayscale', status: 'disabled', correctStatus: 'enabled', feedback: 'Rende il telefono noioso, riducendo la voglia di scrollare.' },
            { id: 'limit', label: 'App Limit (30 min/day)', status: 'disabled', correctStatus: 'enabled', feedback: 'Metti un freno automatico.' },
            { id: 'bed', label: 'Telefono sul comodino', status: 'enabled', correctStatus: 'disabled', feedback: 'Il telefono in camera disturba il sonno e invita allo scrolling notturno.' },
            { id: 'streak', label: 'Snapchat Streaks', status: 'enabled', correctStatus: 'disabled', feedback: 'È solo un numero per manipolarti. Ignoralo.' }
        ]
    }
};
