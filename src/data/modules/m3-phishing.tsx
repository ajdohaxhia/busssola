import { ModuleContent } from "@/types/content";
import React from 'react';

export const m3: ModuleContent = {
    id: 'm3-phishing',
    title: 'Phishing, Malware & Scam',
    lessons: [
        {
            id: 'l1-phishing',
            title: 'L\'Arte dell\'Inganno',
            content: (
                <>
                    <p className="mb-4">
                        Il phishing non è solo "Banca Intesa: clicca qui". È diventato sofisticato.
                        Esiste lo <strong>Spear Phishing</strong>: attacchi mirati che usano il tuo vero nome, la tua scuola o il nome del tuo capo.
                    </p>
                    <div className="p-4 border border-neon-yellow/30 bg-neon-yellow/5 rounded-lg mb-6">
                        <h4 className="font-bold text-neon-yellow mb-2">Regola del Link</h4>
                        <p>Mai cliccare link in email o SMS inattesi. Vai sul browser e digita tu l'indirizzo del sito.</p>
                    </div>
                </>
            )
        },
        {
            id: 'l2-malware',
            title: 'Malware & Ransomware',
            content: (
                <>
                    <p className="mb-4">
                        <strong>Ransomware:</strong> Un virus che cripta tutti i tuoi file (foto, documenti) e chiede soldi per sbloccarli.
                    </p>
                    <p className="font-bold text-neon-pink">NON PAGARE MAI.</p>
                    <p className="mb-4">
                        Se paghi, finanzierai criminali e spesso non ti daranno comunque la chiave. La soluzione è avere <strong>BACKUP</strong> offline.
                    </p>
                </>
            )
        },
        {
            id: 'l3-scam',
            title: 'Truffe Comuni',
            content: (
                <>
                    <ul className="list-disc pl-5 space-y-3">
                        <li><strong>Tech Support Scam:</strong> Un pop-up dice "VIRUS RILEVATO! CHIAMA SUBITO". È finto. Chiudi il browser.</li>
                        <li><strong>Job Offer Scam:</strong> "Lavoro da casa, 5000€/mese, ma prima paga in anticipo il materiale". Truffa.</li>
                        <li><strong>Marketplace Scam:</strong> "Ti pago subito, ma spedisci oggi". Se la ricevuta sembra strana, controlla il tuo conto vero.</li>
                    </ul>
                </>
            )
        },
        {
            id: 'l4-social-eng',
            title: 'Social Engineering',
            content: (
                <>
                    <p className="mb-4">L'hacking spesso non è codice, è psicologia.</p>
                    <p className="mb-4">Il "Social Engineer" manipola le persone per farsi dare le password. Esempio classico: chiama fingendosi "Il Tecnico IT" che deve "aggiustare l'account".</p>
                    <p className="font-bold">Nessun tecnico vero ti chiederà mai la tua password.</p>
                </>
            )
        },
        {
            id: 'l5-updates',
            title: 'Perché Aggiornare?',
            content: (
                <>
                    <p className="mb-4">"Che noia gli aggiornamenti di Windows/iOS". SBAGLIATO.</p>
                    <p className="mb-4">Gli aggiornamenti spesso chiudono "falle di sicurezza" (Patch) che gli hacker usano per entrare.</p>
                    <p className="p-3 bg-neon-mint/10 border border-neon-mint rounded">Un sistema non aggiornato è come una casa con la porta aperta.</p>
                </>
            )
        }
    ],

};
