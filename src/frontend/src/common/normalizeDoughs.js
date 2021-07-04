const valueMap = [
  {
    name: "Тонкое",
    value: "light",
  },
  {
    name: "Толстое",
    value: "large",
  },
];

export const normalizeDoughs = (doughs) =>
  doughs.map((dough) => {
    return {
      ...dough,
      value: valueMap.find(({ name }) => dough.name === name).value,
    };
  });
