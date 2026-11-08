import { buildSeoMetadata, HUB_METADATA_BUILDER } from '@/lib/seo'

export const metadata = buildSeoMetadata(HUB_METADATA_BUILDER('confronti'))

export default function ConfrontiLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
