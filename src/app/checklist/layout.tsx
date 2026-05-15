import { buildSeoMetadata, HUB_METADATA } from '@/lib/seo'

export const metadata = buildSeoMetadata(HUB_METADATA.checklist)

export default function ChecklistLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
