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

const sizeClassMap = {
  1: "small",
  2: "normal",
  3: "big",
};

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

const ingredientClassMap = [
  {
    name: "Грибы",
    value: "mushrooms",
  },
  {
    name: "Чеддер",
    value: "cheddar",
  },
  {
    name: "Грибы",
    value: "mushrooms",
  },
  {
    name: "Салями",
    value: "salami",
  },
  {
    name: "Ветчина",
    value: "ham",
  },
  {
    name: "Ананас",
    value: "ananas",
  },
  {
    name: "Бекон",
    value: "bacon",
  },
  {
    name: "Лук",
    value: "onion",
  },
  {
    name: "Чили",
    value: "chile",
  },
  {
    name: "Халапеньо",
    value: "jalapeno",
  },
  {
    name: "Маслины",
    value: "olives",
  },
  {
    name: "Томаты",
    value: "tomatoes",
  },
  {
    name: "Лосось",
    value: "salmon",
  },
  {
    name: "Моцарелла",
    value: "mozzarella",
  },
  {
    name: "Пармезан",
    value: "parmesan",
  },
  {
    name: "Блю чиз",
    value: "blue_cheese",
  },
];

export const normalizeDougs = (doughs) =>
  doughs.map((dough, index) => ({
    ...dough,
    classMod: doughClassMap.find(({ name }) => name === dough.name).value,
    isChecked: index === 0,
  }));

export const normalizeSizes = (sizes) =>
  sizes.map((size, index) => ({
    ...size,
    classMod: sizeClassMap[size.multiplier],
    isChecked: index === 1,
  }));

export const normalizeSauces = (sauces) =>
  sauces.map((sauce, index) => ({
    ...sauce,
    value: sauceValueMap.find(({ name }) => name === sauce.name).value,
    isChecked: index === 0,
  }));

export const normalizeIngredients = (ingredients) =>
  ingredients.map((ingredient) => ({
    ...ingredient,
    classMod: ingredientClassMap.find(({ name }) => name === ingredient.name)
      .value,
  }));
