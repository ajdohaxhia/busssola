import { buildSeoMetadata, HUB_METADATA_BUILDER } from '@/lib/seo'

export const metadata = buildSeoMetadata(HUB_METADATA_BUILDER('fonti'))

export default function FontiLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
