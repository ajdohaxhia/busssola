import { buildSeoMetadata, HUB_METADATA } from '@/lib/seo'

export const metadata = buildSeoMetadata(HUB_METADATA.fonti)

export default function FontiLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
