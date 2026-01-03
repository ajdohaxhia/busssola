import { ModuleContent } from "@/types/content";
import React from 'react';

export const m4: ModuleContent = {
    id: 'm4-cyberbullismo',
    title: 'Cyberbullismo & Stalking',
    lessons: [
        {
            id: 'l1-realta',
            title: 'Non è "solo uno scherzo"',
            content: (
                <>
                    <p className="mb-4">Il cyberbullismo include:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-6">
                        <li><strong>Doxxing:</strong> Pubblicare i tuoi dati privati (indirizzo, scuola) per farti attaccare.</li>
                        <li><strong>Impersonazione:</strong> Creare profili falsi a tuo nome per rovinare la tua reputazione.</li>
                        <li><strong>Esclusione:</strong> Gruppi deliberatamente creati per escluderti e deriderti.</li>
                    </ul>
                </>
            )
        },
        {
            id: 'l2-defense',
            title: 'Come Difendersi',
            content: (
                <>
                    <p className="mb-4 font-bold text-neon-yellow">NON RISPONDERE MAI.</p>
                    <p className="mb-4">I bulli cercano una reazione. Se rispondi, vincono loro. Se li ignori, si annoiano. Ma devi proteggerti:</p>
                    <ol className="list-decimal pl-5 space-y-2">
                        <li>Metti i profili <strong>Privati</strong>.</li>
                        <li>Usa le funzioni <strong>Blocca</strong> e <strong>Segnala</strong>.</li>
                        <li>Non cancellare le prove. Fai screenshot.</li>
                    </ol>
                </>
            )
        },
        {
            id: 'l3-legal',
            title: 'Documentazione Legale',
            content: (
                <>
                    <p className="mb-4">
                        Se la situazione scala (minacce fisiche, stalking), devi andare dalla Polizia Postale.
                        Per farlo, serve un <strong>Dossier</strong>.
                    </p>
                    <div className="bg-dark-800 p-4 border-l-4 border-neon-violet">
                        <h4 className="font-bold">Cosa serve:</h4>
                        <ul className="list-disc pl-5 mt-2">
                            <li>Screenshot completi (non tagliati).</li>
                            <li>URL del profilo del bullo.</li>
                            <li>Data e ora precisa.</li>
                            <li>Salva le pagine web con <em>archive.is</em> per prova legale.</li>
                        </ul>
                    </div>
                </>
            )
        },
        {
            id: 'l4-bystander',
            title: 'Sei uno Spettatore?',
            content: (
                <>
                    <p className="mb-4">Il problema dei gruppi Telegram/WhatsApp non è solo chi insulta, ma chi guarda e ride (o tace).</p>
                    <p className="mb-4">Se vedi bullismo e non fai nulla, sei complice. Non devi fare l'eroe: basta scrivere in privato alla vittima "Io non sono d'accordo con quello che dicono".</p>
                    <p>Questo piccolo gesto può salvare una vita.</p>
                </>
            )
        },
        {
            id: 'l5-support',
            title: 'Salute Mentale',
            content: (
                <>
                    <p className="mb-4">Essere attaccati online fa male davvero. Provoca ansia, insonnia e depressione.</p>
                    <p className="mb-4">Non tenerti tutto dentro. Parlane. Con un amico, un genitore, o anonimamente con Telefono Azzurro (Chat o 19696).</p>
                    <p className="font-bold">Chiedere aiuto è un atto di coraggio, non di debolezza.</p>
                </>
            )
        }
    ],

};
