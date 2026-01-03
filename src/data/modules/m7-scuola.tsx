import { ModuleContent } from "@/types/content";
import React from 'react';

export const m7: ModuleContent = {
    id: 'm7-scuola',
    title: 'Scuola & Insegnanti Online',
    lessons: [
        {
            id: 'l1-meet',
            title: 'Videolezioni Sicure',
            content: (
                <>
                    <p className="mb-4">
                        Durante le videolezioni (Meet, Zoom), apri una finestra sulla tua vita privata (la tua camera).
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Usa sempre uno <strong>Sfondo Virtuale</strong> per nascondere oggetti personali, foto di famiglia, o layout della casa.</li>
                        <li>Tieni il microfono mutato quando non parli.</li>
                        <li>Metti un pezzo di nastro adesivo sulla webcam quando è spenta (Webcam hijacking esiste).</li>
                    </ul>
                </>
            )
        },
        {
            id: 'l2-prof',
            title: 'Rapporto con Insegnanti',
            content: (
                <>
                    <p className="mb-4 font-bold text-neon-yellow">Confini Professionali.</p>
                    <p>Un insegnante NON dovrebbe:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Scriverti su WhatsApp privato ad orari strani.</li>
                        <li>Chiederti foto personali.</li>
                        <li>Chiederti di tenere segrete le conversazioni.</li>
                    </ul>
                    <p>Se succede, fai screenshot e parla col Preside o i genitori.</p>
                </>
            )
        },
        {
            id: 'l3-plagiarism',
            title: 'AI e Copiature',
            content: (
                <>
                    <p className="mb-4">
                        Usare ChatGPT per <strong>brainstorming</strong> è intelligente.
                        Fare copia-incolla è stupido.
                    </p>
                    <p>I prof usano software anti-plagio e rilevatori AI. Inoltre, se non scrivi tu, non impari a pensare. E l'AI spesso inventa i fatti (allucinazioni).</p>
                </>
            )
        },
        {
            id: 'l4-groups',
            title: 'I Gruppi di Classe',
            content: (
                <>
                    <p className="mb-4">I gruppi WhatsApp di classe sono una giungla.</p>
                    <p className="mb-4">Ricorda che sono spazi semi-pubblici. Se posti un meme offensivo sul prof, qualcuno farà screenshot e lo manderà al prof. Succede sempre.</p>
                    <p>Non scrivere mai nulla che non oseresti dire in faccia alla persona.</p>
                </>
            )
        },
        {
            id: 'l5-hygiene',
            title: 'Cyber Hygiene a Scuola',
            content: (
                <>
                    <p className="mb-4">I computer della scuola non sono sicuri.</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Fai sempre <strong>LOGOUT</strong> da Google/Registro quando hai finito.</li>
                        <li>Non salvare mai le password ("Ricorda password") sui PC pubblici.</li>
                        <li>Attento alle chiavette USB: sono il metodo n.1 per passare virus a scuola.</li>
                    </ul>
                </>
            )
        }
    ],

};
