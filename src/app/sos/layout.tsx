import { buildSeoMetadata, HUB_METADATA_BUILDER } from '@/lib/seo'

export const metadata = buildSeoMetadata(HUB_METADATA_BUILDER('sos'))

export default function SosLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
