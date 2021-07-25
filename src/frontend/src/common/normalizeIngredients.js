import { modIngredientMap } from "src/common/constants";

export const normalizeIngredients = (ingredients) =>
  ingredients.map((ingredient) => ({
    ...ingredient,
    count: 0,
    totalPrice: 0,
    maxInc: 3,
    maxDec: 0,
    mod: modIngredientMap.find(({ name }) => ingredient.name === name).value,
  }));
