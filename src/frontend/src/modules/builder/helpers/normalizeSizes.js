const sizeClassMap = {
  1: "small",
  2: "normal",
  3: "big",
};

export const normalizeSizes = (sizes) =>
  sizes.map((size, index) => ({
    ...size,
    id: index + 1,
    classMod: sizeClassMap[size.multiplier],
    isChecked: index === 1,
  }));
