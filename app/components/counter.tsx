"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Minus, Plus } from 'lucide-react';

interface CounterProps {
    initialCount: number;
}

const Counter = ({ initialCount }: CounterProps) => {
    const [count, setCount] = React.useState(initialCount);

    return (
        <div className="flex flex-col gap-4">
            <p className="text-4xl font-bold tabular-nums tracking-tight">{count}</p>
            <div className="flex items-center gap-2">
                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCount(c => c - 1)}
                    aria-label="Decrement"
                >
                    <Minus className="size-4" />
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCount(c => c + 1)}
                    aria-label="Increment"
                >
                    <Plus className="size-4" />
                </Button>
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setCount(initialCount)}
                    className="text-muted-foreground"
                >
                    Reset
                </Button>
            </div>
        </div>
    );
};

export default Counter;