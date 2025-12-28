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
    game: {
        type: 'classifier',
        objective: 'Analizza i messaggi e i file allegati. Sono sicuri o pericolosi?',
        data: [
            { id: '1', type: 'text', content: "SMS: 'PosteInfo: Il tuo pacco è bloccato. Clicca su bit.ly/poste-verify per sbloccare la consegna.'", correct: 'unsafe', explanation: 'Link accorciato (bit.ly) in un SMS di servizio. Le poste non usano questi link. È Smishing.' },
            { id: '2', type: 'text', content: "Email: 'Ciao Marco, qui HR. Puoi mandarmi il tuo IBAN per lo stipendio? Rispondi a questa email.' (Da: hr-company@gmail.com)", correct: 'unsafe', explanation: 'Guarda il mittente! Un\'azienda seria usa @azienda.com, non @gmail.com.' },
            { id: '3', type: 'text', content: "Pop-up Browser: 'Il tuo iPhone è infetto! Clicca OK per scansionare.'", correct: 'unsafe', explanation: 'I browser non possono scansionare virus. È una truffa per farti scaricare malware.' },
            { id: '4', type: 'text', content: "Notifica App Banca (Ufficiale): 'Autorizzi pagamento di 15€?'", correct: 'safe', explanation: 'È una notifica push dell\'app ufficiale che hai installato tu. Se hai fatto tu l\'acquisto, è sicuro.' },
            { id: '5', type: 'text', content: "DM Instagram: 'Ho perso l'accesso al mio account, puoi aiutarmi? Ti mando un codice, me lo giri?'", correct: 'unsafe', explanation: 'Classico furto account. Il codice serve A LUI per resettare la TUA password.' }
        ]
    }
};
