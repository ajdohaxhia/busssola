import { buildSeoMetadata, HUB_METADATA_BUILDER } from '@/lib/seo'

export const metadata = buildSeoMetadata(HUB_METADATA_BUILDER('modelli'))

export default function ModelliLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
