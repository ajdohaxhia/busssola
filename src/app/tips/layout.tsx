import { buildSeoMetadata, HUB_METADATA } from '@/lib/seo'

export const metadata = buildSeoMetadata(HUB_METADATA.tips)

export default function TipsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
