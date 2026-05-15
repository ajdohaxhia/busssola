import { buildSeoMetadata, HUB_METADATA } from '@/lib/seo'

export const metadata = buildSeoMetadata(HUB_METADATA.scuole)

export default function ScuoleLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
