import { generateMap } from "./helpers";
import pizza from "../static/pizza";

const valueMap = generateMap({
  keys: pizza.sauces,
  values: ["tomato", "creamy"],
});

export const normalizeSauces = (sauces) =>
  sauces.map((sauce) => ({
    ...sauce,
    value: valueMap[sauce.name],
  }));
