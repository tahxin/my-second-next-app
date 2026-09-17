import React from 'react';
import Image from 'next/image';


import {
  Nutrition,
  DhakaPrice,
  FoodIssue,
  FoodResponse,
} from "../types/types";

const FoodCard = ({ food }: { food: FoodIssue }) => {
    const { dish_name, description, image_link } = food;






    return (
        <div className="card bg-base-100 w-96 shadow-sm">
  <div className="card-body">
    <h2 className="card-title">{food.dish_name}</h2>
    <p>{food.description}</p>
  </div>
  <figure>
    <Image src={food.image_link} alt={food.dish_name} width={400} height={300} />
  </figure>
</div>
    );
};

export default FoodCard;



