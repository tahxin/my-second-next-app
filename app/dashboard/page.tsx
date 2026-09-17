import React from 'react';
import Counter from '../components/counter';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User } from 'lucide-react';

const DashboardPage = () => {
    return (
        <div className="flex flex-col gap-8">
            {/* Page header */}
            <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Overview</p>
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
                {/* Profile card */}
                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-3">
                            <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <User className="size-5" />
                            </div>
                            <div>
                                <CardTitle>Profile</CardTitle>
                                <CardDescription>Your personal details</CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <ul className="flex flex-col gap-2 text-sm">
                            <li className="flex items-center justify-between">
                                <span className="text-muted-foreground">Name</span>
                                <Badge variant="outline">John Doe</Badge>
                            </li>
                            <li className="flex items-center justify-between">
                                <span className="text-muted-foreground">Job</span>
                                <Badge variant="outline">Engineer</Badge>
                            </li>
                            <li className="flex items-center justify-between">
                                <span className="text-muted-foreground">Role</span>
                                <Badge variant="secondary">Admin</Badge>
                            </li>
                        </ul>
                    </CardContent>
                </Card>

                {/* Counter card */}
                <Card>
                    <CardHeader>
                        <CardTitle>Counter</CardTitle>
                        <CardDescription>An interactive client-side counter</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Counter initialCount={0} />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default DashboardPage;