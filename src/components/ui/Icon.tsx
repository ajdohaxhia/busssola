import {
    UserX, ShieldCheck, AlertTriangle, MessageSquareX,
    Smartphone, FileText, GraduationCap, Gamepad2,
    Bot, Bitcoin, Camera, Globe, LucideIcon
} from 'lucide-react';

const icons: Record<string, LucideIcon> = {
    UserX, ShieldCheck, AlertTriangle, MessageSquareX,
    Smartphone, FileText, GraduationCap, Gamepad2,
    Bot, Bitcoin, Camera, Globe
};

export const Icon = ({ name, className }: { name: string, className?: string }) => {
    const LucideIcon = icons[name];
    if (!LucideIcon) return null;
    return <LucideIcon className={className} />;
};
