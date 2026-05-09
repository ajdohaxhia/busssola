import { ALL_MODULES } from '@/data/modules/index'
import { JsonLd } from '@/components/seo/JsonLd'
import {
    breadcrumbStructuredData,
    getModule,
    lessonMetadata,
    lessonStructuredData,
    stripModulePrefix,
} from '@/lib/seo'
import type { Metadata } from 'next'

export async function generateStaticParams() {
    const paths: { id: string; lessonId: string }[] = [];
    
    ALL_MODULES.forEach((module) => {
        module.lessons.forEach((_, index) => {
            paths.push({
                id: module.id,
                lessonId: (index + 1).toString(),
            });
        });
    });
    
    return paths;
}

type LessonLayoutProps = {
    children: React.ReactNode
    params: Promise<{ id: string; lessonId: string }>
}

export async function generateMetadata({ params }: { params: Promise<{ id: string; lessonId: string }> }): Promise<Metadata> {
    const { id, lessonId } = await params
    const currentModule = getModule(id)
    const lessonNumber = Number(lessonId)
    const lesson = currentModule?.lessons[lessonNumber - 1]

    if (!currentModule || !lesson || Number.isNaN(lessonNumber)) {
        return {
            title: 'Lezione non trovata',
            robots: { index: false, follow: false },
        }
    }

    return lessonMetadata(currentModule, lesson, lessonNumber)
}

export default async function Layout({ children, params }: LessonLayoutProps) {
    const { id, lessonId } = await params
    const currentModule = getModule(id)
    const lessonNumber = Number(lessonId)
    const lesson = currentModule?.lessons[lessonNumber - 1]

    return (
        <>
            {currentModule && lesson && !Number.isNaN(lessonNumber) && (
                <>
                    <JsonLd data={lessonStructuredData(currentModule, lesson, lessonNumber)} />
                    <JsonLd
                        data={breadcrumbStructuredData([
                            { name: 'Home', path: '/' },
                            { name: 'Catalogo moduli', path: '/moduli/' },
                            { name: stripModulePrefix(currentModule.title), path: `/moduli/${currentModule.id}/` },
                            { name: lesson.title, path: `/moduli/${currentModule.id}/lezione/${lessonNumber}/` },
                        ])}
                    />
                </>
            )}
            {children}
        </>
    )
}
