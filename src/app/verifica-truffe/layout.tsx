import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Strumento Verifica Truffe e Contenuti IA | Busssola',
    description: 'Analizzatore interattivo gratuito per riconoscere truffe online, SMS di phishing, furti account WhatsApp e contenuti manipolati con intelligenza artificiale (deepfake).',
    keywords: [
        'verifica truffe online',
        'analizzatore phishing',
        'riconoscere deepfake',
        'truffa whatsapp ballerina',
        'phishing bollo aci',
        'clonazione vocale ia',
        'sicurezza digitale cittadini'
    ],
    openGraph: {
        title: 'Strumento Verifica Truffe e Contenuti IA | Busssola',
        description: 'Analizza messaggi sospetti, verifica domini ufficiali e scopri se un audio o video è stato generato con Intelligenza Artificiale.',
        url: 'https://busssola.com/verifica-truffe/',
        type: 'website',
    }
}

export default function VerificaTruffeLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
