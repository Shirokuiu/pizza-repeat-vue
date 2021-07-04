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
  sauces.map(({ price, name }, index) => ({
    name,
    value: {
      price,
      name: valueMap.find(({ name: nameMap }) => name === nameMap).value,
    },
    isChecked: index === 0,
  }));
