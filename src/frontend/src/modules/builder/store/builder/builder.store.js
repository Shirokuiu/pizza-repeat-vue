import BuilderDough from "@/modules/builder/store/builder-dough/builder-dough.store";
import BuilderSize from "@/modules/builder/store/builder-size/builder-size.store";
import BuilderMakeForm from "@/modules/builder/store/builder-make-form/builder-make-form.store";
import BuilderIngredients from "@/modules/builder/store/builder-ingredients/builder-ingredients.store";
import { buildPizzaToCart } from "@/modules/builder/store/builder/helpers";

export default {
  namespaced: true,

  getters: {
    totalPrice(state, getters, rootState, rootGetters) {
      return (
        rootGetters["Builder/BuilderSize/currentMultiplier"] *
          rootGetters["Builder/BuilderDough/totalPrice"] +
        rootGetters["Builder/BuilderIngredients/saucePrice"] +
        rootGetters["Builder/BuilderIngredients/ingredientsPrice"]
      );
    },
  },

  actions: {
    makePizza({ dispatch, rootState, rootGetters }) {
      dispatch(
        "Cart/CartPizzaList/add",
        buildPizzaToCart(rootState, rootGetters),
        { root: true }
      );
      dispatch("Builder/BuilderDough/resetState", undefined, { root: true });
      dispatch("Builder/BuilderSize/resetState", undefined, { root: true });
      dispatch("Builder/BuilderIngredients/resetState", undefined, {
        root: true,
      });
      dispatch("Builder/BuilderMakeForm/resetState", undefined, { root: true });
    },
  },

  modules: {
    BuilderDough,
    BuilderSize,
    BuilderMakeForm,
    BuilderIngredients,
  },
};
