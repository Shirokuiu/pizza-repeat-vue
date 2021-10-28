const doughMap = {
  light: "на тонком тесте",
  large: "на толстом тесте",
};

const sauceMap = {
  tomato: "томатный",
  creamy: "сливочный",
};

const sizeMap = {
  1: "23 см",
  2: "32 см",
  3: "45 см",
};

const getDoughDescription = (doughs) =>
  doughMap[doughs.find(({ isChecked }) => isChecked).classMod];

const getIngredientsDescription = (ingredients) =>
  ingredients
    .filter(({ counter }) => counter.value !== 0)
    .map(({ name }) => name.toLowerCase())
    .join(", ");

const getSauceDescription = (sauces) =>
  sauceMap[sauces.find(({ isChecked }) => isChecked).value];

const getSizeDescription = (sizes) =>
  sizeMap[sizes.find(({ isChecked }) => isChecked).multiplier];

export const getDescription = ({ doughs, ingredients, sauces, sizes }) => {
  return {
    dough: getDoughDescription(doughs),
    ingredients: getIngredientsDescription(ingredients),
    sauce: getSauceDescription(sauces),
    size: getSizeDescription(sizes),
  };
};
