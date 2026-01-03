import { ModuleContent } from "@/types/content";
import React from 'react';

export const m9: ModuleContent = {
    id: 'm9-ai-deepfake',
    title: 'AI, Deepfake & Verità',
    lessons: [
        {
            id: 'l1-deepfake',
            title: 'Vedere NON è Credere',
            content: (
                <>
                    <p className="mb-4">
                        Oggi chiunque può prendere una tua foto e creare un video dove dici o fai cose che non hai mai fatto.
                        Questi sono i <strong>Deepfake</strong>.
                    </p>
                    <p>Possono essere usati per bullismo, fake news o pornografia non consensuale (che è illegale).</p>
                </>
            )
        },
        {
            id: 'l2-detect',
            title: 'Come Riconoscerli',
            content: (
                <>
                    <p className="mb-4">L'AI non è perfetta (ancora).</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Mani e Dita:</strong> L'AI fa fatica con le mani. Contale. Sono troppe? Storte?</li>
                        <li><strong>Testo:</strong> Le scritte sullo sfondo sono spesso incomprensibili geroglifici.</li>
                        <li><strong>Blinking:</strong> A volte nei video le persone non sbiancano mai gli occhi in modo naturale.</li>
                        <li><strong>Audio:</strong> La voce clonata spesso manca di "respiro" o intonazione emotiva vera.</li>
                    </ul>
                </>
            )
        },
        {
            id: 'l3-ethics',
            title: 'Etica AI',
            content: (
                <>
                    <p className="mb-4">
                        Usare app di "Face Swap" per mettere la testa di una compagna su un corpo nudo è <strong className="text-neon-pink">REATO</strong> (Pedopornografia se minorenne).
                    </p>
                    <p>Anche se "è solo un'app", le conseguenze legali sono reali e gravissime.</p>
                </>
            )
        },
        {
            id: 'l4-critical',
            title: 'Pensiero Critico',
            content: (
                <>
                    <p className="mb-4">Se vedi un video scioccante di un politico o una celebrità, fermati.</p>
                    <p className="mb-4">Cerca su Google. Ne parlano i giornali seri? O è solo su TikTok/Telegram? La disinformazione viaggia più veloce della verità perché gioca sulle emozioni (rabbia/paura).</p>
                    <p><strong>Verifica sempre la fonte.</strong></p>
                </>
            )
        },
        {
            id: 'l5-watermark',
            title: 'Proteggere le tue Foto',
            content: (
                <>
                    <p className="mb-4">Per evitare che le tue foto vengano usate per allenare AI:</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Usa strumenti come <strong>Glaze</strong> o <strong>Nightshade</strong> se sei un artista. Alterano i pixel in modo invisibile per confondere l'AI.</li>
                        <li>Metti i profili privati. Meno dati pubblici = meno rischi di clonazione.</li>
                    </ul>
                </>
            )
        }
    ],

};
