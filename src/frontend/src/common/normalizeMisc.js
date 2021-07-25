export const normalizeMisc = (misc) =>
  misc.map((miscItem) => ({
    ...miscItem,
    count: 0,
    maxInc: undefined,
    maxDec: 0,
    totalPrice: 0,
  }));
