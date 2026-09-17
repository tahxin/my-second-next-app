import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';
import { LayoutDashboard, UtensilsCrossed, FileText, ArrowRight } from 'lucide-react';

const pages = [
  {
    href: '/dashboard',
    label: 'Dashboard',
    description: 'View your interactive counter and personal info at a glance.',
    icon: LayoutDashboard,
  },
  {
    href: '/menu',
    label: 'Menu',
    description: 'Explore top-rated Bangladeshi dishes with nutrition info.',
    icon: UtensilsCrossed,
  },
  {
    href: '/posts',
    label: 'Posts',
    description: 'Browse through 100 sample posts from our post feed.',
    icon: FileText,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      {/* Hero */}
      <section className="flex flex-col gap-4 pt-8">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
            Welcome to
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            NextApp
          </h1>
          <p className="max-w-xl text-muted-foreground text-lg leading-relaxed">
            A clean, modern Next.js starter. Browse the pages below to see what&apos;s inside.
          </p>
        </div>
        <div className="flex items-center gap-3 pt-2">
          <Link href="/dashboard" className={buttonVariants({ variant: 'default' })}>
            Get started <ArrowRight className="size-4" />
          </Link>
          <Link href="/posts" className={buttonVariants({ variant: 'outline' })}>
            View posts
          </Link>
        </div>
      </section>

      {/* Page cards */}
      <section className="flex flex-col gap-4">
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
          Explore
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {pages.map(({ href, label, description, icon: Icon }) => (
            <Link key={href} href={href} className="group">
              <Card className="h-full transition-colors hover:bg-accent/40">
                <CardHeader>
                  <div className="mb-2 flex size-8 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="size-4" />
                  </div>
                  <CardTitle>{label}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
