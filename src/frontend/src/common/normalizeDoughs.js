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
  doughs.map(({ description, price, image, name }, index) => {
    return {
      description,
      name,
      value: {
        price,
        image,
        name: valueMap.find(({ name: nameMap }) => name === nameMap).value,
      },
      isChecked: index === 0,
    };
  });
