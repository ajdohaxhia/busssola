import { buildSeoMetadata, HUB_METADATA_BUILDER } from '@/lib/seo'

export const metadata = buildSeoMetadata(HUB_METADATA_BUILDER('scuole'))

export default function ScuoleLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
