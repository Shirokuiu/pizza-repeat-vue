import { generateMap } from "./helpers";

const valueMap = generateMap(["tomato", "creamy"]);

export const normalizeSauces = (sauces) =>
  sauces.map((sauce, index) => ({
    ...sauce,
    value: valueMap[index],
  }));
