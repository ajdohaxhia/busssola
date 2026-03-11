import { ALL_MODULES } from '@/data/modules/index'

export async function generateStaticParams() {
    return ALL_MODULES.map((module) => ({
        id: module.id,
    }));
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
