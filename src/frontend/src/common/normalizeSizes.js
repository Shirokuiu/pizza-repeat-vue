import { generateMap } from "./helpers";

const valueMap = generateMap(["small", "normal", "big"]);

export const normalizeSizes = (sizes) =>
  sizes.map((size, index) => ({
    ...size,
    value: valueMap[index],
  }));
