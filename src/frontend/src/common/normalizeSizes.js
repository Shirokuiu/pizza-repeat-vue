const valueMap = [
  {
    multiplier: 1,
    value: "small",
  },
  {
    multiplier: 2,
    value: "normal",
  },
  {
    multiplier: 3,
    value: "big",
  },
];

export const normalizeSizes = (sizes) =>
  sizes.map((size) => ({
    ...size,
    value: valueMap.find(({ multiplier }) => size.multiplier === multiplier)
      .value,
  }));
