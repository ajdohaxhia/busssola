export interface Lesson {
    id: string;
    title: string;
    content: React.ReactNode;
}

export interface ModuleData {
    id: string;
    title: string;
    lessons: Lesson[];
    gameIds: string[]; // Supports multiple games
    tips: string[];
}

import React from 'react';

// Content for Module 1: Predatori Online
const M1_LESSONS: Lesson[] = [
    {
        id: 'l1-introduction',
        title: 'Introduzione ai Predatori Online',
        content: (
            <>
                <p className="mb-4">
                    Online non è un gioco. Ci sono persone reali che usano tecniche psicologiche avanzate per manipolarti.
                    Non stiamo parlando del "vecchio col furgone", ma di criminali che sanno esattamente come farti sentire speciale, compreso e amato.
                </p>
                <h3 className="text-xl font-bold text-neon-yellow mb-2 mt-6">Cosa imparerai</h3>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Come riconoscere il <strong>Grooming</strong> prima che sia troppo tardi.</li>
                    <li>Cos'è la <strong>Sextortion</strong> e perché NON devi mai pagare.</li>
                    <li>Come smascherare un <strong>Catfish</strong> in 30 secondi.</li>
                </ul>
            </>
        )
    },
    {
        id: 'l2-grooming',
        title: 'Il Processo di Grooming',
        content: (
            <>
                <p className="mb-4">
                    Il Grooming è un processo lento. Non inizia mai con richieste sessuali.
                    Inizia con l'amicizia, l'ascolto e i complimenti.
                </p>
                <div className="bg-white/5 p-4 rounded-lg border-l-4 border-neon-orange my-6">
                    <h4 className="font-bold mb-2">Le Fasi del Grooming:</h4>
                    <ol className="list-decimal pl-5 space-y-2">
                        <li><strong>Targeting:</strong> Scelgono chi sembra solo o vulnerabile.</li>
                        <li><strong>Love Bombing:</strong> Ti riempiono di complimenti e attenzioni.</li>
                        <li><strong>Isolamento:</strong> "I tuoi genitori non ti capiscono, io sì."</li>
                        <li><strong>Sexualization:</strong> Introducono argomenti sessuali gradualmente.</li>
                    </ol>
                </div>
            </>
        )
    },
    // Placeholder for other lessons to avoid huge file in prompt
    {
        id: 'l3-sextortion',
        title: 'Sextortion: Non Pagare Mai',
        content: <p>Se qualcuno minaccia di diffondere le tue foto intime se non paghi o non ne mandi altre, questa è Sextortion. È un crimine.</p>
    }
];

export const MODULE_CONTENT: Record<string, ModuleData> = {
    'm1-predatori': {
        id: 'm1-predatori',
        title: 'Predatori Online',
        lessons: M1_LESSONS,
        gameIds: ['grooming-sim'],
        tips: [
            "Non accettare richieste da sconosciuti con foto fake",
            "Reverse image search OGNI profilo che contatta (TinEye.com)",
            "Video call PRIMA di info personali (elimina catfish)",
            "Ricatti sextortion: NON PAGARE, segnala + blocca"
        ]
    }
    // Others would go here
};
