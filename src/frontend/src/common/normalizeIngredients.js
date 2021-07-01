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
  }));
