import { ModuleContent } from "@/types/content";
import React from 'react';

export const m13: ModuleContent = {
    id: 'm13-salute',
    title: 'Mente Connessa: Benessere Psicologico Online',
    lessons: [
        {
            id: 'l1-phantom',
            title: 'Ansia da Notifica',
            content: (
                <>
                    <p className="mb-4">
                        Ti capita mai di sentire il telefono vibrare in tasca, ma quando lo controlli non c'è nessuna notifica?
                        Si chiama <strong>Phantom Vibration Syndrome</strong>.
                    </p>
                    <p className="mb-4">
                        Il nostro cervello è stato "addestrato" a rilasciare dopamina ogni volta che riceviamo un like o un messaggio.
                        Questa attesa costante crea uno stato di iper-vigilanza che può trasformarsi in ansia cronica.
                    </p>
                    <div className="bg-neon-yellow/10 border border-neon-yellow/30 p-4 rounded-lg italic">
                        "Regola d'oro: Disattiva tutte le notifiche non essenziali. Riprendi il controllo della tua attenzione."
                    </div>
                </>
            )
        },
        {
            id: 'l2-comparison',
            title: 'Depressione da Confronto Sociale',
            content: (
                <>
                    <p className="mb-4">
                        Sui social vediamo solo i "momenti migliori" (Highlights) degli altri. Nessuno posta foto di quando è triste,
                        ha brufoli o si sente solo.
                    </p>
                    <p className="mb-4">
                        Confrontare la tua "vita quotidiana" con la "vita perfetta" filtrata degli altri è un gioco a perdere.
                        Riconosci che quello che vedi è una <strong>Fake Reality</strong> costruita per apparire.
                    </p>
                    <p className="mb-4 font-bold text-neon-pink">
                        Tip: Smetti di seguire account che ti fanno sentire 'meno' o 'brutto/a'. Il tuo feed deve ispirarti, non deprimerti.
                    </p>
                </>
            )
        },
        {
            id: 'l3-dysmorphia',
            title: 'Body Dysmorphia & Filtri',
            content: (
                <>
                    <p className="mb-4">
                        I filtri "bellezza" (Face Filters) non sono solo giochi divertenti. Quando passi ore a guardarti
                        con la pelle perfetta, il naso più sottile e gli occhi più grandi, il tuo viso reale comincia a sembrarti "sbagliato".
                    </p>
                    <p className="mb-4">
                        Esiste una condizione chiamata <strong>Snapchat Dysmorphia</strong>: persone che chiedono chirurgia estetica
                        per assomigliare ai propri filtri.
                    </p>
                    <div className="bg-dark-800 p-4 rounded border border-white/10">
                        <strong>Esercizio:</strong> Prova a postare o guardarti allo specchio senza filtri per una settimana.
                        Riconnettiti con la realtà del tuo corpo.
                    </div>
                </>
            )
        },
        {
            id: 'l4-doomscrolling',
            title: 'Doomscrolling & Burnout',
            content: (
                <>
                    <p className="mb-4">
                        Il <strong>Doomscrolling</strong> è l'atto di continuare a scorrere notizie negative (guerre, pandemie, disastri)
                        nonostante ci facciano stare male.
                    </p>
                    <p className="mb-4">
                        Il cervello umano non è progettato per gestire tutto il dolore del mondo in tempo reale. Questo porta al
                        <strong>Burnout Digitale</strong>: irritabilità, insonnia, apatia.
                    </p>
                    <p className="mb-4">
                        <strong>Azione:</strong> Imposta un timer di 15 minuti per le app di news. Dopo, chiudi tutto e fai qualcosa di fisico.
                    </p>
                </>
            )
        },
        {
            id: 'l5-sleep-help',
            title: 'Luce Blu & Chiedere Aiuto',
            content: (
                <>
                    <p className="mb-4">
                        La luce blu degli schermi inibisce la melatonina, l'ormone del sonno. Usare il telefono prima di dormire
                        "inganna" il cervello facendogli credere che sia giorno.
                    </p>
                    <p className="mb-4 font-bold">
                        La regola 20-20-20: Ogni 20 minuti, guarda qualcosa a 20 piedi di distanza (6 metri) per 20 secondi.
                        Riposa gli occhi e la mente.
                    </p>
                    <p className="mb-4 text-neon-orange font-bold uppercase">
                        Importante: Non diagnosticarti disturbi mentali su TikTok. Se senti di non farcela, parla con uno psicologo vero.
                        Il digitale può aiutare, ma non sostituisce il supporto professionale.
                    </p>
                </>
            )
        }
    ],

};
