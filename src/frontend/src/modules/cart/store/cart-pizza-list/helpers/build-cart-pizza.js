import { uniqueId } from "lodash";

const doughMap = {
  light: "на тонком тесте",
  large: "на толстом тесте",
};

const sizeMap = {
  1: "23 см",
  2: "32 см",
  3: "45 см",
};

const sauceMap = {
  tomato: "томатный",
  creamy: "сливочный",
};

const getDoughDescription = (doughs) =>
  doughMap[doughs.find(({ isChecked }) => isChecked).classMod];

const getSizeDescription = (sizes) =>
  sizeMap[sizes.find(({ isChecked }) => isChecked).multiplier];

const getSauceDescription = (sauces) =>
  sauceMap[sauces.find(({ isChecked }) => isChecked).value];

const getIngredientsDescription = (ingredients) =>
  ingredients
    .filter(({ counter }) => counter.value !== 0)
    .map(({ name }) => name.toLowerCase())
    .join(", ");

export const buildCartPizza = ({
  doughs,
  ingredients,
  pizzaName,
  sauces,
  sizes,
  price,
}) => {
  const description = {
    dough: getDoughDescription(doughs),
    size: getSizeDescription(sizes),
    sauce: getSauceDescription(sauces),
    ingredients: getIngredientsDescription(ingredients),
  };

  return {
    id: uniqueId(),
    counter: {
      value: 1,
      maxInc: undefined,
      maxDec: 1,
    },
    totalPrice: price,
    pizzaName,
    description,
    doughs,
    sizes,
    sauces,
    ingredients,
    price,
  };
};
