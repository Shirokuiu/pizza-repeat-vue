import { generateMap } from "./helpers";
import pizza from "../static/pizza";

const valueMap = generateMap({
  keys: pizza.dough,
  values: ["light", "large"],
});

console.log(pizza.dough);

export const normalizeDoughs = (doughs) =>
  doughs.map((dough) => {
    return {
      ...dough,
      value: valueMap[dough.name],
    };
  });
