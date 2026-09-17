import React from 'react';
import Image from 'next/image';
import { FoodIssue } from "../types/types";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';


export default function FoodCard({ food }: { food: FoodIssue }) {
    const { dish_name, description, image_link, category, rating } = food;

    return (
        <Card className="overflow-hidden">
            <div className="relative aspect-video w-full overflow-hidden">
                <Image
                    src={image_link}
                    alt={dish_name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                />
            </div>
            <CardHeader>
                <div className="flex items-start justify-between gap-2">
                    <CardTitle className="line-clamp-1">{dish_name}</CardTitle>
                    <div className="flex items-center gap-1 shrink-0 text-xs text-muted-foreground">
                        <Star className="size-3 fill-current text-yellow-500" />
                        <span>{rating?.toFixed(1)}</span>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="capitalize">{category}</Badge>
                </div>
                <CardDescription className="line-clamp-2">{description}</CardDescription>
            </CardHeader>
        </Card>
    );
};


