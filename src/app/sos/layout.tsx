import { buildSeoMetadata } from '@/lib/seo'

export const metadata = buildSeoMetadata({
    title: 'Centro SOS per emergenze online',
    description: 'Indicazioni immediate per ricatti online, sextortion, furto account, stalking, cyberbullismo, immagini intime diffuse senza consenso e crisi digitale.',
    path: '/sos/',
    keywords: ['emergenza online', 'sos sextortion', 'cyberbullismo cosa fare', 'furto account aiuto', 'ricatto foto intime'],
})

export default function SosLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
