import { generateMap } from "./helpers";

const valueMap = generateMap(["tomato", "creamy"]);

export const normalizeSauces = (sauces) =>
  sauces.map(({ price, name }, index) => ({
    name,
    value: {
      price,
      name: valueMap[index],
    },
    isChecked: index === 0,
  }));
