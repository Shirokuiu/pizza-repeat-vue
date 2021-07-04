import { generateMap } from "./helpers";
import pizza from "../static/pizza";

const modMap = generateMap({
  keys: pizza.ingredients,
  values: [
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
  ],
});

export const normalizeIngredients = (ingredients) =>
  ingredients.map((ingredient) => ({
    ...ingredient,
    mod: modMap[ingredient.name],
  }));
