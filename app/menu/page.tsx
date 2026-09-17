import React from 'react';
import { FoodIssue, FoodResponse } from "../types/types";
import FoodCard from '../components/FoodCard';
import { Badge } from '@/components/ui/badge';
import { UtensilsCrossed } from 'lucide-react';

const MenuPage = async () => {
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods');
    const data: FoodResponse = await res.json();
    const foods: FoodIssue[] = data.data;

    return (
        <div className="flex flex-col gap-8">
            {/* Page header */}
            <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Explore</p>
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold tracking-tight">Menu</h1>
                    <Badge variant="secondary">
                        <UtensilsCrossed className="size-3" />
                        {foods.length} dishes
                    </Badge>
                </div>
            </div>

            {/* Food grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {foods.map((food: FoodIssue) => (
                    <FoodCard key={food.id} food={food} />
                ))}
            </div>
        </div>
    );
};

export default MenuPage;