export interface PostsData {
    id: number;
    title: string;
    body: string;
}



export interface Nutrition {
  calories: string;
  protein: string;
  carbohydrates: string;
  fat: string;
  fiber: string;
}

export interface DhakaPrice {
  home_cooked: string;
  street_food_or_small_restaurant: string;
  cafe_or_healthy_eatery: string;
}

export interface FoodIssue {
  id: string;
  dish_name: string;
  description: string;
  category: string;
  alternative_names: string[];
  main_ingredients: string[];
  approximate_nutrition_per_serving: Nutrition;
  rating: number;
  price: number;
  possible_price_in_dhaka: DhakaPrice;
  cuisine: string;
  origin_and_popularity: string;
  cooking_steps: string[];
  image_link: string;
}

export interface FoodResponse {
  status: string;
  message: string;
  data: FoodIssue[];
}