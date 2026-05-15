import { buildSeoMetadata, getModule, lessonMetadata } from '@/lib/seo'

export async function generateMetadata({ params }: { params: Promise<{ id: string; lessonId: string }> }) {
    const { id, lessonId } = await params
    const courseModule = getModule(id)
    const lessonIndex = parseInt(lessonId) - 1

    if (!courseModule || isNaN(lessonIndex) || !courseModule.lessons[lessonIndex]) {
        return buildSeoMetadata({ title: 'Lezione non trovata' })
    }

    return lessonMetadata(courseModule, courseModule.lessons[lessonIndex], lessonIndex + 1)
}

export default function LessonLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
