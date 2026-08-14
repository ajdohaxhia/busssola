import { buildSeoMetadata, HUB_METADATA_BUILDER } from '@/lib/seo'

export const metadata = buildSeoMetadata(HUB_METADATA_BUILDER('novita'))

export default function NovitaLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
