'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/menu', label: 'Menu' },
    { href: '/posts', label: 'Posts' },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                {/* Brand */}
                <Link
                    href="/"
                    className="text-xl font-bold tracking-tight transition-opacity hover:opacity-70"
                >
                    NextApp
                </Link>

                {/* Nav links */}
                <ul className="flex items-center gap-1">
                    {navLinks.map(({ href, label }) => {
                        const isActive =
                            href === '/'
                                ? pathname === '/'
                                : pathname.startsWith(href);

                        return (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className={`relative rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200
                                        ${isActive
                                            ? 'bg-primary text-primary-foreground'
                                            : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                                        }`}
                                >
                                    {label}
                                    {isActive && (
                                        <span className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-primary-foreground/40" />
                                    )}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}
