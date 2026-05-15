import { buildSeoMetadata, getModule, lessonMetadata } from '@/lib/seo'

export async function generateMetadata({ params }: { params: Promise<{ id: string; lessonId: string }> }) {
    const { id, lessonId } = await params
    const module = getModule(id)
    const lessonIndex = parseInt(lessonId) - 1

    if (!module || isNaN(lessonIndex) || !module.lessons[lessonIndex]) {
        return buildSeoMetadata({ title: 'Lezione non trovata' })
    }

    return lessonMetadata(module, module.lessons[lessonIndex], lessonIndex + 1)
}

export default function LessonLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
