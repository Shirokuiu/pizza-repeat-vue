import { generateMap } from "./helpers";
import pizza from "../static/pizza";

const valueMap = generateMap({
  keys: pizza.sizes,
  values: ["small", "normal", "big"],
  key: "multiplier",
});

export const normalizeSizes = (sizes) =>
  sizes.map((size) => ({
    ...size,
    value: valueMap[size.multiplier],
  }));
