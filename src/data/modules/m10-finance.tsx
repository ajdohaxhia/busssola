import { ModuleContent } from "@/types/content";
import React from 'react';

export const m10: ModuleContent = {
    id: 'm10-finance',
    title: 'Finanze Online & Crypto',
    lessons: [
        {
            id: 'l1-guarantee',
            title: 'Il Mito del Guadagno Facile',
            content: (
                <>
                    <p className="mb-4 font-bold text-xl text-neon-yellow">SEMBRA TROPPO BELLO? È UNA TRUFFA.</p>
                    <p className="mb-4">
                        Nessun investimento legittimo ti garantisce "10% al giorno" o "raddoppio in una settimana".
                        Questi sono <strong>Schemi Ponzi</strong>: pagano i vecchi utenti con i soldi dei nuovi, finché non scappano col malloppo.
                    </p>
                </>
            )
        },
        {
            id: 'l2-influencer',
            title: 'Crypto Pump & Dump',
            content: (
                <>
                    <p className="mb-4">
                        Quell'influencer su TikTok non sta "consigliando" una moneta per aiutarti.
                        Lui l'ha comprata prima, dice a voi di comprare (Pump) così il prezzo sale, e poi vende tutto (Dump) lasciandovi con monete che valgono zero.
                    </p>
                </>
            )
        },
        {
            id: 'l3-safety',
            title: 'Banche & App',
            content: (
                <>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Usa solo app ufficiali. Scarica solo da App Store/Play Store.</li>
                        <li>Attiva le notifiche di spesa: vedi subito se qualcuno usa la tua carta.</li>
                        <li>Su Venmo/Satispay: tieni il profilo <strong>Privato</strong>. Non far vedere al mondo chi paghi e perché.</li>
                    </ul>
                </>
            )
        },
        {
            id: 'l4-gambling',
            title: 'Gioco d\'Azzardo e Loot Box',
            content: (
                <>
                    <p className="mb-4">Le Loot Box nei videogiochi SONO gioco d'azzardo.</p>
                    <p className="mb-4">Spendi soldi veri per una chance casuale di vincere qualcosa. Crea la stessa dipendenza delle slot machine. Se ti senti spinto a spendere "solo ancora una volta", fermati. È il design che ti manipola.</p>
                </>
            )
        },
        {
            id: 'l5-mules',
            title: 'Money Mules (Muli di Denaro)',
            content: (
                <>
                    <p className="mb-4">Occhio a chi ti dice: "Ti mando 100€ sul conto, tu tienine 20 e manda gli altri 80 a questo indirizzo Crypto".</p>
                    <p className="font-bold text-neon-pink">È RICICLAGGIO DI DENARO.</p>
                    <p>Stai aiutando criminali a pulire soldi rubati. Se la polizia indaga, vengono da te (che hai il conto), non da loro.</p>
                </>
            )
        }
    ],
    game: {
        type: 'classifier',
        objective: 'Investimento o Truffa?',
        data: [
            { id: '1', type: 'text', content: "Instagram Ad: 'Guadagna 500€ al giorno da casa con questo bot di trading! 100% garantito.'", correct: 'unsafe', explanation: 'Garantito = Truffa. Sempre.' },
            { id: '2', type: 'text', content: "TikTok: 'Questa coin andrà sulla luna! Comprate ORA prima che sia tardi! #ad'", correct: 'unsafe', explanation: 'Classico Pump & Dump. L\'hashtag #ad significa che è pagato per dirtelo.' },
            { id: '3', type: 'text', content: "Messaggio: 'Hai vinto 1 Bitcoin! Clicca qui e paga 50€ di tasse per ritirarlo.'", correct: 'unsafe', explanation: 'Fee advance scam. Non hai vinto nulla, vogliono solo i 50€.' },
            { id: '4', type: 'text', content: "Banca: Acquisto ETF su piattaforma regolamentata con rischio variabile.", correct: 'safe', explanation: 'Questo è un investimento reale. Si parla di rischio, non di garanzie.' }
        ]
    }
};
