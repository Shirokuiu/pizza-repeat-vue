const sizeClassMap = {
  1: "small",
  2: "normal",
  3: "big",
};

export const normalizeSizes = (sizes) =>
  sizes.map((size, index) => ({
    ...size,
    classMod: sizeClassMap[size.multiplier],
    isChecked: index === 1,
    radioName: "diameter",
  }));
