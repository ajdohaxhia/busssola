import { ModuleContent } from "@/types/content";
import React from 'react';

export const m8: ModuleContent = {
    id: 'm8-gaming',
    title: 'Gaming & Communities',
    lessons: [
        {
            id: 'l1-voice',
            title: 'Voice Chat Risks',
            content: (
                <>
                    <p className="mb-4">
                        La chat vocale è il posto più tossico e pericoloso.
                        Se parli, riveli: genere, età approssimativa, accento (dove vivi), stato emotivo.
                    </p>
                    <p>Nei giochi competitivi, muta la chat globale. Gioca solo con amici o usa il pino "text-only" se possibile.</p>
                </>
            )
        },
        {
            id: 'l2-items',
            title: 'Trade & Scam',
            content: (
                <>
                    <p className="mb-4">
                        "Ti do questa skin rara, ma prima mandami i soldi su PayPal".
                    </p>
                    <p className="font-bold text-neon-pink">SCAM 100%</p>
                    <p>Usa SOLO il sistema di scambio interno del gioco. Se qualcuno vuole portarti fuori dal gioco per scambiare, ti vuole fregare.</p>
                </>
            )
        },
        {
            id: 'l3-grooming-games',
            title: 'Predatori nei Giochi',
            content: (
                <>
                    <p className="mb-4">
                        I predatori amano Roblox, Fortnite e Minecraft.
                        La tattica: "Ti regalo Robux/Skins se..."
                    </p>
                    <p>Niente è gratis. Se un adulto ti offre regali virtuali, vuole qualcosa in cambio (foto, fiducia, incontri). Blocca subito.</p>
                </>
            )
        },
        {
            id: 'l4-toxic',
            title: 'Gestione della Tossicità',
            content: (
                <>
                    <p className="mb-4">Il "Trash Talking" è normale, l'odio no. Se qualcuno ti insulta pesantemente, ti urla contro o ti minaccia:</p>
                    <ol className="list-decimal pl-5 space-y-2">
                        <li>Muta (Mute).</li>
                        <li>Segnala (Report).</li>
                        <li>Blocca (Block).</li>
                    </ol>
                    <p className="mt-2">Non rispondere agli insulti. Ti bannano entrambi. Lascia che sia lui a farsi bannare.</p>
                </>
            )
        },
        {
            id: 'l5-ddos',
            title: 'IP Grabber e DDoS',
            content: (
                <>
                    <p className="mb-4">A volte i perdenti minacciano: "Ti dosso, ti stacco internet".</p>
                    <p className="mb-4">Per farlo, devono avere il tuo IP. Come lo prendono? Mandandoti un link (IP Grabber) o convincendoti a entrare in un party chat "Peer-to-Peer" (vecchia console).</p>
                    <p>Non cliccare link strani inviati in chat. Se succede, riavvia il router per cambiare IP (se hai IP dinamico).</p>
                </>
            )
        }
    ],
    game: {
        type: 'chat',
        objective: 'Gestisci una richiesta sospetta in-game (Roblox/Fortnite).',
        data: {
            initialMessage: "[Whisper] Ehy pro! Ho un codice per 5000 V-Bucks che non uso. Lo vuoi? Te lo regalo.",
            nodes: {
                'root': {
                    text: "[Whisper] Ehy pro! Ho un codice per 5000 V-Bucks che non uso. Lo vuoi? Te lo regalo.",
                    sender: 'bot',
                    options: [
                        { label: "Davvero? Sì grazie!", nextId: 'hook', score: -10 },
                        { label: "Nessuno regala niente. Cosa vuoi?", nextId: 'sus', score: 10 }
                    ]
                },
                'hook': {
                    text: "Sì, però devi attivarli sul mio sito clan. Ti mando il link, logga col tuo account Epic va bene?",
                    sender: 'bot',
                    options: [
                        { label: "Ok vado.", nextId: 'phished', score: -50 },
                        { label: "No, scammer.", nextId: 'block', score: 20 }
                    ]
                },
                'sus': {
                    text: "Nulla! Voglio solo qualcuno bravo nel mio team. Aggiungimi su Discord che ne parliamo in vocale così ti spiego.",
                    sender: 'bot',
                    options: [
                        { label: "Non uso Discord con estranei.", nextId: 'win', score: 20 },
                        { label: "Ok ti aggiungo.", nextId: 'voice', score: -10 }
                    ]
                },
                'voice': {
                    text: "(Su Discord) Hai una bella voce... quanti anni hai? Sembri maturo. Accendi la webcam?",
                    sender: 'bot',
                    isEnding: true,
                    feedback: "Ecco fatto. Dal gioco ti hanno portato su Discord (senza moderazione) e ora provano il grooming."
                },
                'phished': {
                    text: "(Hai inserito la password nel sito linkato. Account RUBATO).",
                    sender: 'bot',
                    isEnding: true,
                    feedback: "Mai inserire password su link inviati in chat. Era una pagina di phishing."
                },
                'block': {
                    text: "(Utente Bloccato)",
                    sender: 'user',
                    isEnding: true,
                    feedback: "Bravo. Nessuno regala V-Bucks. Bloccare è la mossa giusta."
                },
                'win': {
                    text: "Vabbè peggio per te. (Utente disconnesso)",
                    sender: 'bot',
                    isEnding: true,
                    feedback: "Ottimo confine. Non uscire dalla piattaforma di gioco sicura."
                }
            }
        }
    }
};
