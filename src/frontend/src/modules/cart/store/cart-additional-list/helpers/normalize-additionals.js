import { uniqueId } from "lodash";

export const normalizeAdditionals = (additionals) =>
  additionals.map((additional) => ({
    ...additional,
    id: parseInt(uniqueId(), 10),
    counter: {
      value: 0,
      maxInc: undefined,
      maxDec: 1,
    },
    totalPrice: 0,
  }));
