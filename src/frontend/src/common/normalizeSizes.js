import { generateMap } from "./helpers";

const valueMap = generateMap(["small", "normal", "big"]);

export const normalizeSizes = (sizes) =>
  sizes.map(({ name, image, multiplier }, index) => ({
    name,
    value: {
      image,
      multiplier,
      name: valueMap[index],
    },
    isChecked: index === 1,
  }));
