const valueMap = [
  {
    name: "Томатный",
    value: "creamy",
  },
  {
    name: "Сливочный",
    value: "creamy",
  },
];

export const normalizeSauces = (sauces) =>
  sauces.map((sauce) => ({
    ...sauce,
    value: valueMap.find(({ name }) => sauce.name === name).value,
  }));
