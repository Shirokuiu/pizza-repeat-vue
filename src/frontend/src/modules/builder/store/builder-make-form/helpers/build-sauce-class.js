const sauceClassMap = {
  tomato: "tomato",
  creamy: "creamy",
};

export const buildSauceClass = (sauces) =>
  sauceClassMap[sauces.find(({ isChecked }) => isChecked).value];
