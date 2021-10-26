import { uniqueId } from "lodash";

export const buildCartPizza = (rootState, rootGetters) => {
  const pizzaName = rootState["Builder"]["BuilderMakeForm"].pizzaName;
  const dough = rootState["Builder"]["BuilderDough"].doughs.find(
    ({ isChecked }) => isChecked
  );
  const size = rootState["Builder"]["BuilderSize"].sizes.find(
    ({ isChecked }) => isChecked
  );
  const sauce = rootState["Builder"]["BuilderIngredients"].sauces.find(
    ({ isChecked }) => isChecked
  );
  const ingredients = rootState["Builder"]["BuilderIngredients"].ingredients;
  const totalPrice = rootGetters["Builder/totalPrice"];

  return {
    id: uniqueId(),
    counter: {
      value: 1,
      maxInc: -1,
      maxDec: 0,
    },
    pizzaName,
    dough,
    size,
    sauce,
    ingredients,
    totalPrice,
  };
};
