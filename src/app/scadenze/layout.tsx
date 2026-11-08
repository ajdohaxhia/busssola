import { buildSeoMetadata, HUB_METADATA_BUILDER } from '@/lib/seo'

export const metadata = buildSeoMetadata(HUB_METADATA_BUILDER('scadenze'))

export default function ScadenzeLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
