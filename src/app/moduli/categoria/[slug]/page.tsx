import { MODULES_MAP } from '@/data/modules-meta'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { clusterMetadata, breadcrumbStructuredData } from '@/lib/seo'
import { JsonLd } from '@/components/seo/JsonLd'
import { CategoryID } from '@/types'
import * as Icons from 'lucide-react'

const CATEGORIES: { id: CategoryID, label: string }[] = [
    { id: 'emergenze', label: 'SOS / Urgenze' },
    { id: 'documenti', label: 'Documenti' },
    { id: 'lavoro', label: 'Lavoro' },
    { id: 'casa', label: 'Casa' },
    { id: 'soldi', label: 'Soldi' },
    { id: 'bonus', label: 'Bonus' },
    { id: 'sanita', label: 'Sanità' },
    { id: 'famiglia', label: 'Famiglia' },
    { id: 'sicurezza', label: 'Sicurezza' },
    { id: 'truffe', label: 'Truffe' },
    { id: 'privacy', label: 'Privacy' },
    { id: 'immigrazione', label: 'Immigrazione' },
    { id: 'consumatori', label: 'Consumatori' },
    { id: 'mobilita', label: 'Mobilità' },
    { id: 'universita', label: 'Università' },
    { id: 'anziani', label: 'Anziani' },
    { id: 'disabilita', label: 'Disabilità' },
    { id: 'casa-digitale', label: 'Casa Digitale' }
]

export function generateStaticParams() {
    return CATEGORIES.map((cat) => ({
        slug: cat.id,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const category = CATEGORIES.find(c => c.id === slug)
    if (!category) return { title: 'Categoria non trovata' }

    return clusterMetadata(category.id)
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const category = CATEGORIES.find(c => c.id === slug)

    if (!category) notFound()

    const modules = MODULES_MAP.filter(m => m.category === slug)

    return (
        <Container size="lg" className="py-12 space-y-16">
            <JsonLd data={breadcrumbStructuredData([
                { name: 'Catalogo', path: '/moduli' },
                { name: category.label, path: `/moduli/categoria/${slug}` }
            ])} />

            <PageHeader 
                badge="Argomento"
                title={category.label}
                description={`Tutte le guide pratiche, procedure e link ufficiali relativi a ${category.label.toLowerCase()}.`}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {modules.map((module) => (
                    <Link href={`/moduli/${module.id}`} key={module.id} className="group">
                        <Card className="h-full p-8 flex flex-col gap-6 transition-all border-2 border-border hover:shadow-2xl hover:border-primary/30 rounded-[2.5rem] bg-surface">
                             <div className="flex justify-between items-start">
                                <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center border-2 border-primary/10 group-hover:bg-primary group-hover:text-white transition-all">
                                    <Icons.BookOpen className="w-7 h-7" />
                                </div>
                                <Badge variant="muted" className="capitalize text-[10px] font-black uppercase tracking-widest">{module.difficulty}</Badge>
                             </div>
                             <div className="flex-1 space-y-2">
                                <h3 className="text-2xl font-display font-black text-foreground group-hover:text-primary transition-colors">{module.title}</h3>
                                <p className="text-secondary leading-relaxed font-medium">{module.description}</p>
                             </div>
                             <div className="pt-6 border-t border-border/60 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-secondary/40">
                                <span>{module.lessonCount} Guide verificate</span>
                                <Icons.ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0" />
                             </div>
                        </Card>
                    </Link>
                ))}
            </div>

            {modules.length === 0 && (
                <div className="py-20 text-center bg-surface border-4 border-dashed border-border rounded-[3rem]">
                    <p className="text-secondary font-bold">Stiamo preparando nuove guide per questa categoria.</p>
                </div>
            )}

            <footer className="pt-12 text-center">
                <Button asChild variant="outline" className="rounded-xl font-black uppercase tracking-widest h-14 px-8">
                    <Link href="/moduli">Torna al catalogo completo</Link>
                </Button>
            </footer>
        </Container>
    )
}
