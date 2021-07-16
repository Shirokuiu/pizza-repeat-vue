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
  sizes.map(({ name, image, multiplier }, index) => ({
    name,
    value: {
      image,
      multiplier,
      name: valueMap.find(
        ({ multiplier: multiplierMap }) => multiplier === multiplierMap
      ).value,
    },
    isChecked: index === 1,
  }));
