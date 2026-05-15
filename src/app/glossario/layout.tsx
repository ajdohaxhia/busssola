import { buildSeoMetadata, HUB_METADATA } from '@/lib/seo'

export const metadata = buildSeoMetadata(HUB_METADATA.glossario)

export default function GlossaryLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
