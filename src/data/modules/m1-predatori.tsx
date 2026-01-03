import { ModuleContent } from "@/types/content";
import React from 'react';

export const m1: ModuleContent = {
    id: 'm1-predatori',
    title: 'Predatori Online',
    lessons: [
        {
            id: 'l1-intro',
            title: 'Chi sono i Predatori?',
            content: (
                <>
                    <p className="lead text-xl text-white/80 mb-6">
                        Non è come nei film. Il "predatore" non è sempre un vecchio inquietante in un furgone nero.
                        Spesso è qualcuno che sembra capirti meglio di chiunque altro.
                    </p>
                    <p className="mb-4">
                        Online, l'anonimato è un'arma a doppio taglio. Protegge te, ma protegge anche chi vuole farti del male.
                        Un predatore può fingere di essere un coetaneo, una ragazza attraente, o un mentore ricco e famoso.
                    </p>
                    <div className="p-4 bg-neon-pink/10 border-l-4 border-neon-pink my-6">
                        <h3 className="font-bold text-neon-pink mb-2">Il Pericolo Reale</h3>
                        <p>Il loro obiettivo non è "essere amici". È ottenere potere su di te per sfruttarti sessualmente (sextortion) o finanziariamente.</p>
                    </div>
                </>
            )
        },
        {
            id: 'l2-grooming',
            title: 'Tattiche di Grooming',
            content: (
                <>
                    <h3 className="text-2xl font-bold text-neon-yellow mb-4">Cos'è il Grooming?</h3>
                    <p className="mb-4">
                        È un processo psicologico di manipolazione. Non succede in un giorno. Può durare settimane o mesi.
                        L'obiettivo è <strong>abbassare le tue difese</strong> e creare una dipendenza emotiva.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 my-8">
                        <div className="p-4 bg-dark-800 rounded-lg">
                            <h4 className="font-bold text-neon-mint mb-2">1. Love Bombing</h4>
                            <p className="text-sm opacity-80">"Sei l'unica persona che mi capisce davvero."<br />"Siamo anime gemelle."</p>
                        </div>
                        <div className="p-4 bg-dark-800 rounded-lg">
                            <h4 className="font-bold text-neon-orange mb-2">2. Isolamento</h4>
                            <p className="text-sm opacity-80">"I tuoi genitori sono antichi, non ti meritano."<br />"Questo è il nostro segreto speciale."</p>
                        </div>
                        <div className="p-4 bg-dark-800 rounded-lg">
                            <h4 className="font-bold text-neon-violet mb-2">3. Desensitizzazione</h4>
                            <p className="text-sm opacity-80">Inizia con argomenti borderline, poi spinge sempre più in là verso il sessuale.</p>
                        </div>
                        <div className="p-4 bg-dark-800 rounded-lg">
                            <h4 className="font-bold text-neon-pink mb-2">4. Il Ricatto</h4>
                            <p className="text-sm opacity-80">Appena hanno materiale (foto/chat), la maschera cade. Inizia la minaccia.</p>
                        </div>
                    </div>
                </>
            )
        },
        {
            id: 'l3-red-flags',
            title: 'Red Flags: Campanelli d\'Allarme',
            content: (
                <>
                    <p className="mb-4">Impara a riconoscere questi segnali <strong>SUBITO</strong>:</p>
                    <ul className="list-disc pl-5 space-y-3 marker:text-neon-pink">
                        <li><strong>Troppo Curioso:</strong> Chiede subito dove abiti, scuola, orari.</li>
                        <li><strong>Troppo Gentile:</strong> Regali costosi (skin, nitro, ricariche) senza motivo. È debito emotivo.</li>
                        <li><strong>Pressione per Video:</strong> Insiste per vederti in cam ma lui/lei ha la cam rotta.</li>
                        <li><strong>Sposta la chat:</strong> Vuole portarti via dal gioco/social monitorato (es. "Andiamo su Telegram/Snapchat").</li>
                    </ul>
                </>
            )
        },
        {
            id: 'l4-protection',
            title: 'Tecniche di Difesa Attiva',
            content: (
                <>
                    <p className="mb-6">Riconoscere i segnali è la difesa numero uno. Ecco le regole d'oro.</p>
                    <ul className="list-disc pl-6 space-y-4 marker:text-neon-yellow">
                        <li><strong>Video Call Check:</strong> Se rifiutano SEMPRE la videochiamata ("camera rotta", "timido"), al 99% è un <strong>Catfish</strong>.</li>
                        <li><strong>Reverse Image Search:</strong> Usa TinEye.com o Google Images sulle loro foto profilo. Se appaiono su stock photo o profili di modelli russi, è un fake.</li>
                        <li><strong>Nessun Segreto:</strong> Se ti chiedono di non dire ai tuoi amici o genitori della vostra amicizia, è un segnale di allarme ROSSO.</li>
                    </ul>
                </>
            )
        },
        {
            id: 'l5-reporting',
            title: 'Come e Dove Segnalare',
            content: (
                <>
                    <p className="mb-4">Se successo qualcosa, NON CANCELLARE NULLA. Gli screenshot sono prove.</p>
                    <div className="space-y-4">
                        <div className="p-4 border border-white/20 rounded">
                            <h4 className="font-bold text-neon-mint">1. Piattaforma</h4>
                            <p className="text-sm">Usa il tasto Report in-game o in-app. Segnala per "Harrassment" o "Safety".</p>
                        </div>
                        <div className="p-4 border border-white/20 rounded">
                            <h4 className="font-bold text-neon-mint">2. Commissariato di PS Online</h4>
                            <p className="text-sm">Puoi fare segnalazioni online direttamente alla Polizia Postale italiana.</p>
                        </div>
                        <div className="p-4 border border-white/20 rounded">
                            <h4 className="font-bold text-neon-mint">3. NCMEC / Telefono Azzurro</h4>
                            <p className="text-sm">Se ci sono foto intime coinvolte, loro possono aiutare a rimuoverle dal web.</p>
                        </div>
                    </div>
                </>
            )
        }
    ],

};
