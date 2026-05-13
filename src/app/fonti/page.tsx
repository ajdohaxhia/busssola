
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { siteStats } from '@/data/siteStats'
import { ExternalLink, ShieldCheck, Globe, Building2 } from 'lucide-react'

const organizations = [
    { name: 'Polizia Postale', type: 'Istituzionale', description: 'Commissariato di PS Online per denunce e segnalazioni di reati informatici.', url: 'https://www.commissariatodips.it/' },
    { name: 'Garante Privacy', type: 'Istituzionale', description: 'Autorità per la protezione dei dati personali e contrasto al revenge porn.', url: 'https://www.gpdp.it/' },
    { name: 'ACN', type: 'Istituzionale', description: 'Agenzia per la Cybersicurezza Nazionale - Protezione infrastrutture critiche.', url: 'https://www.acn.gov.it/' },
    { name: 'CERT-AgID', type: 'Istituzionale', description: 'Computer Emergency Response Team della Pubblica Amministrazione.', url: 'https://cert-agid.gov.it/' },
    { name: 'Save the Children', type: 'Non-profit', description: 'Risorse per la protezione dei minori e contrasto al grooming.', url: 'https://www.savethechildren.it/' },
    { name: 'Telefono Azzurro', type: 'Non-profit', description: 'Linea d\'aiuto 114 per emergenze che coinvolgono minori.', url: 'https://www.azzurro.it/' },
    { name: 'StopNCII.org', type: 'Tecnologico', description: 'Strumento per prevenire la diffusione di immagini intime non consensuali.', url: 'https://stopncii.org/' },
    { name: 'Apple Support', type: 'Piattaforma', description: 'Procedure ufficiali per smarrimento iPhone e sicurezza ID Apple.', url: 'https://support.apple.com/' },
    { name: 'Google Safety', type: 'Piattaforma', description: 'Centro sicurezza per account Android, Gmail e navigazione sicura.', url: 'https://safety.google/' },
    { name: 'Meta Safety', type: 'Piattaforma', description: 'Risorse per la sicurezza su Facebook, Instagram e WhatsApp.', url: 'https://about.meta.com/it/actions/safety/' },
    { name: 'TikTok Safety', type: 'Piattaforma', description: 'Centro sicurezza e protocolli di recupero account TikTok.', url: 'https://www.tiktok.com/safety/' },
    { name: 'Vinted Help', type: 'Piattaforma', description: 'Guide ufficiali per evitare truffe e phishing su marketplace.', url: 'https://www.vinted.it/help' },
];

export default function FontiPage() {
    return (
        <Container size="lg" className="py-16 space-y-12">
            <header className="space-y-4 max-w-2xl">
                <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">Qualità Verificata</Badge>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground tracking-tight">Le nostre Fonti</h1>
                <p className="text-xl text-secondary leading-relaxed">
                    Bussola non scrive contenuti "a memoria". Ogni lezione è basata su fonti istituzionali, portali ufficiali di supporto o organizzazioni certificate.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {organizations.map((org) => (
                    <Card key={org.name} className="p-6 flex flex-col justify-between border border-border bg-surface hover:shadow-md transition-all">
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="p-2 rounded-lg bg-background border border-border">
                                    {org.type === 'Istituzionale' ? <Building2 className="w-5 h-5 text-indigo-600" /> : <Globe className="w-5 h-5 text-emerald-600" />}
                                </div>
                                <Badge variant="secondary" className="text-[10px] uppercase tracking-wider">{org.type}</Badge>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-lg font-bold text-foreground">{org.name}</h3>
                                <p className="text-sm text-secondary leading-relaxed">{org.description}</p>
                            </div>
                        </div>
                        <div className="pt-6">
                            <a 
                                href={org.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-sm font-medium text-primary hover:underline group"
                            >
                                Visita sito ufficiale <ExternalLink className="w-4 h-4 ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                        </div>
                    </Card>
                ))}
            </div>

            <section className="bg-primary/5 border border-primary/10 rounded-[2rem] p-8 md:p-12 space-y-6">
                <div className="flex items-center gap-3 text-primary">
                    <ShieldCheck className="w-8 h-8" />
                    <h2 className="text-2xl font-bold font-display">Quality Gate</h2>
                </div>
                <p className="text-secondary leading-relaxed">
                    Tutte le <strong>{siteStats.publishedLessons} lezioni</strong> pubblicate su Bussola seguono un rigoroso processo di verifica:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-secondary">
                    <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span>Fonti reali e linkate direttamente nel contenuto.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span>Protocolli operativi derivati da manuali di supporto ufficiali.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span>Revisione periodica per evitare link obsoleti (Ultimo controllo: {siteStats.lastUpdatedAt}).</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span>Nessun contenuto generato da intelligenza artificiale senza supervisione umana totale.</span>
                    </li>
                </ul>
            </section>
        </Container>
    )
}
