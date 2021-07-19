import {
  normalizeIngredients,
  normalizeDoughs,
  normalizeSizes,
  normalizeSauces,
} from "src/common";
import pizza from "src/static/pizza.json";
import {
  SET_CURRENT_DOUGH,
  SET_CURRENT_SAUCE,
  SET_CURRENT_SIZE,
} from "src/store/modules/builder/mutation-types";

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

    [SET_CURRENT_SIZE](state, currentSIze) {
      state.currentSize = currentSIze;
    },

    [SET_CURRENT_SAUCE](state, currentSauce) {
      state.currentSauce = currentSauce;
    },
  },

  actions: {
    setCurrentDough({ commit }, currentDough) {
      commit(SET_CURRENT_DOUGH, currentDough);
    },

    setCurrentSize({ commit }, currentSize) {
      commit(SET_CURRENT_SIZE, currentSize);
    },

    setCurrentSauce({ commit }, currentSauce) {
      commit(SET_CURRENT_SAUCE, currentSauce);
    },
  },
};
