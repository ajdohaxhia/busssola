import { buildSeoMetadata, HUB_METADATA_BUILDER } from '@/lib/seo'

export const metadata = buildSeoMetadata(HUB_METADATA_BUILDER('ai'))

export default function AiLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
