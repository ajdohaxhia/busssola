import { ALL_MODULES } from '@/data/modules/index'

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

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
