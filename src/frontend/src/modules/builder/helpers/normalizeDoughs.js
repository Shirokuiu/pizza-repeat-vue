const doughClassMap = [
  {
    name: "Тонкое",
    value: "light",
  },
  {
    name: "Толстое",
    value: "large",
  },
];

export const normalizeDougs = (doughs) =>
  doughs.map((dough, index) => ({
    ...dough,
    classMod: doughClassMap.find(({ name }) => name === dough.name).value,
    isChecked: index === 0,
  }));