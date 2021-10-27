const sizeClassMap = {
  light: "small",
  large: "big",
};

export const buildSizeClass = (doughs) =>
  sizeClassMap[doughs.find(({ isChecked }) => isChecked).classMod];
