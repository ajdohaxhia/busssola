"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { MODULES } from "@/lib/constants";
import {
    Shield,
    LayoutDashboard,
    Award,
    HelpCircle,
    User,
    Menu,
    X
} from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/Button";

export function Sidebar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const NavItem = ({ href, icon: Icon, children, exact = false }: any) => {
        const isActive = exact ? pathname === href : pathname.startsWith(href);
        return (
            <Link
                href={href}
                onClick={() => setIsOpen(false)}
                className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:text-neon-yellow",
                    isActive ? "bg-white/10 text-neon-yellow" : "text-white/70"
                )}
            >
                <Icon className="h-4 w-4" />
                {children}
            </Link>
        );
    };

    return (
        <>
            {/* Mobile Toggle */}
            <div className="fixed top-4 left-4 z-50 md:hidden">
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </Button>
            </div>

            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/80 z-40 md:hidden backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar Content */}
            <div className={cn(
                "fixed inset-y-0 left-0 z-50 w-64 transform bg-dark-900 border-r border-white/10 p-6 transition-transform duration-200 md:translate-x-0 md:static",
                isOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                <div className="flex h-full flex-col">
                    <div className="mb-8 flex items-center gap-2 px-2">
                        <Shield className="h-8 w-8 text-neon-yellow" />
                        <span className="text-xl font-bold tracking-tight text-white">
                            Bussola<span className="text-neon-yellow">.IO</span>
                        </span>
                    </div>

                    <div className="space-y-1">
                        <NavItem href="/" icon={LayoutDashboard} exact>Dashboard</NavItem>
                        <NavItem href="/profilo" icon={User}>Il Tuo Profilo</NavItem>
                        <NavItem href="/leaderboard" icon={Award}>Classifica</NavItem>

                        <div className="my-4 h-px bg-white/10" />

                        <p className="px-3 text-xs font-semibold uppercase text-white/40 mb-2">Moduli</p>
                        <div className="space-y-0.5 overflow-y-auto max-h-[50vh] pr-2 scrollbar-thin scrollbar-thumb-white/10">
                            {MODULES.map((module) => (
                                <Link
                                    key={module.id}
                                    href={`/moduli/${module.id}`}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "group flex items-center justify-between rounded-lg px-3 py-2 text-xs font-medium transition-all hover:bg-white/5",
                                        pathname.includes(module.id) ? "text-neon-yellow bg-white/5" : "text-white/60"
                                    )}
                                >
                                    <span>{module.title}</span>
                                </Link>
                            ))}
                        </div>

                        <div className="mt-auto pt-4 border-t border-white/10">
                            <NavItem href="/aiuto" icon={HelpCircle}>Aiuto & Supporto</NavItem>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
