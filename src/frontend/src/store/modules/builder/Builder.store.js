import {
  normalizeIngredients,
  normalizeDoughs,
  normalizeSizes,
  normalizeSauces,
} from "src/common";
import pizza from "src/static/pizza.json";
import { SET_CURRENT_DOUGH } from "src/store/modules/builder/mutation-types";

const getCurrentItem = (arr) => {
  return arr.filter(({ isChecked }) => isChecked).map(({ value }) => value)[0];
};

const initialState = () => {
  const doughs = normalizeDoughs(pizza.dough);
  const sizes = normalizeSizes(pizza.sizes);
  const sauces = normalizeSauces(pizza.sauces);
  const ingredients = normalizeIngredients(pizza.ingredients);

  return {
    doughs,
    sizes,
    sauces,
    ingredients,

    currentDough: getCurrentItem(doughs),

    currentSize: getCurrentItem(sizes),

    currentSauce: getCurrentItem(sauces),

    pizzaName: "",
  };
};

export default {
  namespaced: true,

  state: initialState(),

  mutations: {
    [SET_CURRENT_DOUGH](state, currentDough) {
      state.currentDough = currentDough;
    },
  },

  actions: {
    setCurrentDough({ commit }, currentDough) {
      commit(SET_CURRENT_DOUGH, currentDough);
    },
  },
};
