import { generateMap } from "./helpers";

const modMap = generateMap([
  "mushrooms",
  "cheddar",
  "salami",
  "ham",
  "ananas",
  "bacon",
  "onion",
  "chile",
  "jalapeno",
  "olives",
  "tomatoes",
  "salmon",
  "mozzarella",
  "parmesan",
  "blue_cheese",
]);

export const normalizeIngredients = (ingredients) =>
  ingredients.map((ingredient, index) => ({
    ...ingredient,
    mod: modMap[index],
    count: 0,
    totalPrice: 0,
    maxInc: 3,
    maxDec: 0,
  }));
