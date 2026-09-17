import React from 'react';
import {
    FoodIssue,
    FoodResponse,
} from "../types/types";
import FoodCard from '../components/FoodCard';

const MenuPage = async () => {
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods');
    const data: FoodResponse = await res.json();

    const foods: FoodIssue[] = data.data;
    console.log(data, foods);

    return (
        <div>
            <h2>
                Menu Page
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {foods.map((food: FoodIssue) => (
                    <FoodCard key={food.id} food={food} />
                ))}
            </div>
        </div>
    );
};

export default MenuPage;