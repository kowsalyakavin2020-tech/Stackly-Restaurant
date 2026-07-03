import dish1 from "../assets/images/dishes/dish-1.webp";
import dish2 from "../assets/images/dishes/dish-2.webp";
import dish3 from "../assets/images/dishes/dish-3.webp";
import dish4 from "../assets/images/dishes/dish-4.webp";
import dish5 from "../assets/images/dishes/dish-5.webp";
import dish6 from "../assets/images/dishes/dish-6.webp";

// Ovvoru dish ku correct category kudunga (Starters / Main Course / Desserts / Beverages).
// Neenga suit aana padi maathikalam.
export const dishes = [
  {
    id: 1,
    name: "Grilled Chicken",
    image: dish1,
    price: "$18.99",
    rating: "⭐ 4.9",
    category: "Main Course",
  },
  {
    id: 2,
    name: "Italian Pizza",
    image: dish2,
    price: "$21.99",
    rating: "⭐ 5.0",
    category: "Main Course",
  },
  {
    id: 3,
    name: "Creamy Pasta",
    image: dish3,
    price: "$16.99",
    rating: "⭐ 4.8",
    category: "Starters",
  },
  {
    id: 4,
    name: "Cheese Burger",
    image: dish4,
    price: "$14.99",
    rating: "⭐ 4.7",
    category: "Main Course",
  },
  {
    id: 5,
    name: "Wood Fire Pizza",
    image: dish5,
    price: "$23.99",
    rating: "⭐ 5.0",
    category: "Main Course",
  },
  {
    id: 6,
    name: "Premium Dessert",
    image: dish6,
    price: "$12.99",
    rating: "⭐ 4.9",
    category: "Desserts",
  },
];