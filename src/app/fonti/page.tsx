
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { siteStats } from '@/data/siteStats'
import { ALL_MODULES } from '@/data/modules/index'
import { ExternalLink, ShieldCheck, Globe, Building2 } from 'lucide-react'

export default function FontiPage() {
    // Extract unique organizations from modules
    const sources = ALL_MODULES.flatMap(m => m.lessons.flatMap(l => l.sources));
    const uniqueOrgs = Array.from(new Set(sources.map(s => s.organization)));

    const organizations = uniqueOrgs.map(orgName => {
        const orgSources = sources.filter(s => s.organization === orgName);
        const types = Array.from(new Set(orgSources.map(s => s.type)));
        const lessonCount = ALL_MODULES.flatMap(m => m.lessons).filter(l => l.sources.some(s => s.organization === orgName)).length;
        const categories = Array.from(new Set(ALL_MODULES.flatMap(m => m.lessons).filter(l => l.sources.some(s => s.organization === orgName)).map(l => l.category)));
        
        return {
            name: orgName,
            type: types[0], // Use first type found
            lessonCount,
            categories,
            url: orgSources[0].url,
            lastChecked: orgSources.map(s => s.lastCheckedAt).sort().reverse()[0]
        };
    }).sort((a, b) => b.lessonCount - a.lessonCount);

    return (
        <Container size="lg" className="py-16 space-y-12">
            <header className="space-y-4 max-w-2xl">
                <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">Fonti e riferimenti</Badge>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground tracking-tight">Da dove arrivano le informazioni</h1>
                <p className="text-xl text-secondary leading-relaxed">
                    Ogni guida pubblicata su Busssola indica le fonti usate. Quando possibile vengono privilegiate fonti istituzionali, pagine ufficiali delle piattaforme e organizzazioni riconosciute.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {organizations.map((org) => (
                    <Card key={org.name} className="p-6 flex flex-col justify-between border border-border bg-surface hover:shadow-md transition-all">
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="p-2 rounded-lg bg-background border border-border">
                                    {org.type === 'official' || org.type === 'institutional' ? <Building2 className="w-5 h-5 text-indigo-600" /> : <Globe className="w-5 h-5 text-emerald-600" />}
                                </div>
                                <div className="flex flex-wrap gap-1 justify-end">
                                    <Badge variant="secondary" className="text-[10px] uppercase tracking-wider">{org.type}</Badge>
                                    <Badge variant="outline" className="text-[10px] uppercase tracking-wider">{org.lessonCount} lezioni</Badge>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-lg font-bold text-foreground">{org.name}</h3>
                                <p className="text-xs text-muted-foreground">
                                    Categorie: {org.categories.join(', ')}
                                </p>
                            </div>
                        </div>
                        <div className="pt-6 flex items-center justify-between">
                            <a 
                                href={org.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-sm font-medium text-primary hover:underline group"
                            >
                                Visita fonte <ExternalLink className="w-4 h-4 ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                            <span className="text-[10px] text-muted-foreground">Verifica: {org.lastChecked}</span>
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
                    Tutte le <strong>{siteStats.publishedLessons} lezioni</strong> pubblicate su Busssola seguono un rigoroso processo di verifica:
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
