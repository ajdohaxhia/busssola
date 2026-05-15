import { buildSeoMetadata, HUB_METADATA_BUILDER } from '@/lib/seo'

export const metadata = buildSeoMetadata(HUB_METADATA_BUILDER('checklist'))

export default function ChecklistLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
