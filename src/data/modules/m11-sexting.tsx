import { ModuleContent } from "@/types/content";
import React from 'react';

export const m11: ModuleContent = {
    id: 'm11-sexting',
    title: 'Sexting & Rischi Legali',
    lessons: [
        {
            id: 'l1-law',
            title: 'La Legge non scherza',
            content: (
                <>
                    <div className="bg-neon-pink/10 border-2 border-neon-pink p-6 rounded-xl mb-6">
                        <h3 className="text-xl font-bold text-neon-pink mb-2">Fatto Scomodo:</h3>
                        <p>Se hai meno di 18 anni, una tua foto nuda è <strong>Pedopornografia (CSAM)</strong>.</p>
                        <p className="mt-2">Produrla (anche selfie), possederla o inviarla è reato federale/grave. Anche se è consensuale.</p>
                    </div>
                </>
            )
        },
        {
            id: 'l2-consent',
            title: 'Consenso e Pressione',
            content: (
                <>
                    <p className="mb-4">
                        "Se mi ami davvero me la mandi".
                    </p>
                    <p className="mb-4 text-neon-yellow font-bold">QUESTO NON È AMORE. È MANIPOLAZIONE.</p>
                    <p>La coercizione o la pressione invalidano il consenso. Hai il diritto di dire NO sempre, anche se l'hai fatto in passato.</p>
                </>
            )
        },
        {
            id: 'l3-disaster',
            title: 'Se la foto è uscita...',
            content: (
                <>
                    <p className="mb-4">NON farti prendere dal panico. C'è una soluzione.</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Non vergognarti. Sei la vittima, non il colpevole.</li>
                        <li>Segnala a <strong>NCMEC CyberTipline</strong> o <strong>StopNCII.org</strong>. Possono usare l'hash della foto per bloccarla su tutti i social.</li>
                        <li>Non cancellare le chat in cui ti minacciavano. Servono alla Polizia.</li>
                    </ul>
                </>
            )
        },
        {
            id: 'l4-revenge',
            title: 'Revenge Porn',
            content: (
                <>
                    <p className="mb-4">Diffondere foto intime di ex senza consenso è un reato specifico (Codice Rosso in Italia).</p>
                    <p className="mb-4">Chi lo fa rischia il carcere e multe enormi. Non condividere MAI foto intime ricevute da altri, diventi complice del reato.</p>
                </>
            )
        },
        {
            id: 'l5-safe-sexting',
            title: 'Riduzione del Danno',
            content: (
                <>
                    <p className="mb-4">La regola migliore è non farlo. Ma se decidi di farlo:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Non mostrare MAI la faccia.</li>
                        <li>Niente tatuaggi riconoscibili o sfondi della tua camera.</li>
                        <li>Usa app con messaggi che si autodistruggono e blocco screenshot (es. Signal, non WhatsApp).</li>
                    </ul>
                </>
            )
        }
    ],

};
