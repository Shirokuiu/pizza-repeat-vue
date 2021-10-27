export const buildPizzaToCart = (rootState, rootGetters) => {
  const { Builder } = rootState;
  const { BuilderDough, BuilderSize, BuilderIngredients, BuilderMakeForm } =
    Builder;

  return {
    doughs: BuilderDough.doughs,
    sizes: BuilderSize.sizes,
    sauces: BuilderIngredients.sauces,
    ingredients: BuilderIngredients.ingredients,
    pizzaName: BuilderMakeForm.pizzaName,
    price: rootGetters["Builder/totalPrice"],
  };
};
