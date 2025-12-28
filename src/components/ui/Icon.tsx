import {
    ShieldCheck, Lock, EyeOff, Search, User, Trophy, Settings,
    LogOut, Home, AlertTriangle, ShieldAlert, Smartphone, Gamepad2,
    Cpu, Coins, Ghost, MessageSquare, HeartPulse, CheckCircle2, UserX,
    FileText, GraduationCap, Bot, Bitcoin, Camera, Globe
} from "lucide-react";

export const ICON_MAP: Record<string, any> = {
    ShieldCheck,
    Lock,
    EyeOff,
    Search,
    User,
    Trophy,
    Settings,
    LogOut,
    Home,
    AlertTriangle,
    ShieldAlert,
    Smartphone,
    Gamepad2,
    Cpu,
    Coins,
    Ghost,
    MessageSquare,
    HeartPulse,
    CheckCircle2,
    UserX,
    FileText,
    GraduationCap,
    Bot,
    Bitcoin,
    Camera,
    Globe
};

export const Icon = ({ name, className }: { name: string, className?: string }) => {
    const LucideIcon = ICON_MAP[name];
    if (!LucideIcon) return null;
    return <LucideIcon className={className} />;
};
