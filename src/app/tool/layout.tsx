import { buildSeoMetadata, HUB_METADATA_BUILDER } from '@/lib/seo'

export const metadata = buildSeoMetadata(HUB_METADATA_BUILDER('tool'))

export default function ToolLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
