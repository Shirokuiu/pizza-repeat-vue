const sauceValueMap = [
  {
    name: "Томатный",
    value: "tomato",
  },
  {
    name: "Сливочный",
    value: "creamy",
  },
];
export const normalizeSauces = (sauces) =>
  sauces.map((sauce, index) => ({
    ...sauce,
    id: index + 1,
    value: sauceValueMap.find(({ name }) => name === sauce.name).value,
    isChecked: index === 0,
  }));
