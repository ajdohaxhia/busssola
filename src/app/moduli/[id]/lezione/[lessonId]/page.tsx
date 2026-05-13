import { getModuleById, ALL_MODULES } from '@/data/modules/index'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import LessonReaderClient from '@/components/lessons/LessonReaderClient'

export function generateStaticParams() {
    const params: { id: string; lessonId: string }[] = []
    
    ALL_MODULES.forEach((module) => {
        module.lessons.forEach((_, index) => {
            params.push({
                id: module.id,
                lessonId: (index + 1).toString(),
            })
        })
    })
    
    return params
}

export default async function LessonPage({ params }: { params: Promise<{ id: string; lessonId: string }> }) {
    const { id, lessonId } = await params
    const currentModule = getModuleById(id)
    const lessonIndex = parseInt(lessonId) - 1

    if (!currentModule || isNaN(lessonIndex) || !currentModule.lessons[lessonIndex]) {
        return (
            <Container className="py-20 flex flex-col items-center justify-center text-center">
                <h1 className="text-2xl font-semibold mb-4 text-foreground">Lezione non trovata</h1>
                <Button asChild variant="outline">
                    <Link href={`/moduli/${id}`}>Torna al modulo</Link>
                </Button>
            </Container>
        )
    }

    return <LessonReaderClient currentModule={currentModule} lessonIndex={lessonIndex} />
}
