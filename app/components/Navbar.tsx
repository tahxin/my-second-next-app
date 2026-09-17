'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Home, UtensilsCrossed, FileText } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const navLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/menu', label: 'Menu', icon: UtensilsCrossed },
    { href: '/posts', label: 'Posts', icon: FileText },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm">
            <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
                {/* Brand */}
                <Link
                    href="/"
                    className="flex items-center gap-2 font-semibold text-foreground transition-opacity hover:opacity-70"
                >
                    <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground text-xs font-bold">
                        N
                    </div>
                    <span className="text-sm">NextApp</span>
                </Link>

                {/* Nav links */}
                <nav className="flex items-center gap-1">
                    {navLinks.map(({ href, label, icon: Icon }) => {
                        const isActive =
                            href === '/'
                                ? pathname === '/'
                                : pathname.startsWith(href);

                        return (
                            <Link
                                key={href}
                                href={href}
                                className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors duration-150
                                    ${isActive
                                        ? 'bg-accent text-accent-foreground font-medium'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                                    }`}
                            >
                                <Icon className="size-3.5" />
                                {label}
                            </Link>
                        );
                    })}
                </nav>
            </div>
            <Separator />
        </header>
    );
}
