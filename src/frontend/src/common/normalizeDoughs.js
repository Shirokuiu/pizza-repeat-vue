import { generateMap } from "./helpers";

const valueMap = generateMap(["light", "large"]);

export const normalizeDoughs = (doughs) =>
  doughs.map(({ description, price, image, name }, index) => ({
    description,
    name,
    value: {
      price,
      image,
      name: valueMap[index],
    },
    isChecked: index === 0,
  }));
