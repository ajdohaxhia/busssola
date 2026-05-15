import { buildSeoMetadata, HUB_METADATA_BUILDER } from '@/lib/seo'

export const metadata = buildSeoMetadata(HUB_METADATA_BUILDER('tips'))

export default function TipsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
