import { generateMap } from "./helpers";

const valueMap = generateMap(["light", "large"]);

export const normalizeDoughs = (doughs) =>
  doughs.map((dough, index) => ({
    ...dough,
    value: valueMap[index],
  }));
