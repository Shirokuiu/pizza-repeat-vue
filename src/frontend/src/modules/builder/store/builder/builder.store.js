import BuilderDough from "@/modules/builder/store/builder-dough/builder-dough.store";
import BuilderSize from "@/modules/builder/store/builder-size/builder-size.store";
import BuilderMakeForm from "@/modules/builder/store/builder-make-form/builder-make-form.store";
import BuilderIngredients from "@/modules/builder/store/builder-ingredients/builder-ingredients.store";
import { buildPizzaToCart } from "@/modules/builder/store/builder/helpers";

import router from "@/router";

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
      if (rootState.Cart.isEdit) {
        dispatch(
          "Cart/CartPizzaList/update",
          {
            pizzaId: rootState.Cart.editPizzaId,
            updatedPizza: {
              doughs: rootState.Builder.BuilderDough.doughs,
              sizes: rootState.Builder.BuilderSize.sizes,
              sauces: rootState.Builder.BuilderIngredients.sauces,
              ingredients: rootState.Builder.BuilderIngredients.ingredients,
              pizzaName: rootState.Builder.BuilderMakeForm.pizzaName,
              price: rootGetters["Builder/totalPrice"],
            },
          },
          { root: true }
        );
        router.push("/cart");
      } else {
        dispatch(
          "Cart/CartPizzaList/add",
          buildPizzaToCart(rootState, rootGetters),
          { root: true }
        );
      }

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
