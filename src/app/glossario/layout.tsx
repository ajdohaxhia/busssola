import { buildSeoMetadata, HUB_METADATA_BUILDER } from '@/lib/seo'

export const metadata = buildSeoMetadata(HUB_METADATA_BUILDER('glossario'))

export default function GlossaryLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
