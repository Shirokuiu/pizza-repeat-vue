import {
  normalizeIngredients,
  normalizeDoughs,
  normalizeSizes,
  normalizeSauces,
} from "src/common";
import pizza from "src/static/pizza.json";
import {
  EDIT_INGREDIENTS,
  RESET_STATE,
  SET_CURRENT_DOUGH,
  SET_CURRENT_SAUCE,
  SET_CURRENT_SIZE,
  SET_PIZZA_NAME,
} from "src/store/modules/builder/mutation-types";
import { DEC, INC, INC_DEC_INPUT_CHANGE } from "src/store/mutation-types";

const doughClassMap = {
  light: "small",
  large: "big",
};

const multipleModMap = {
  2: "second",
  3: "third",
};

const getCurrentItem = (arr) =>
  arr.filter(({ isChecked }) => isChecked).map(({ value }) => value)[0];

const setCurrentAdditional = (arr, currentAdditional) =>
  arr.map((item) => ({
    ...item,
    isChecked: item.value.name === currentAdditional.name,
  }));

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

  getters: {
    totalPricePizza(state) {
      return (
        (state.currentDough.price +
          state.currentSauce.price +
          state.ingredients.reduce((a, b) => a + (b["totalPrice"] || 0), 0)) *
        state.currentSize.multiplier
      );
    },

    isIngredientsExist(state) {
      return state.ingredients.some(({ count }) => count > 0);
    },

    currentDoughPizzaMod(state) {
      return `pizza--foundation--${doughClassMap[state.currentDough.name]}-${
        state.currentSauce.name
      }`;
    },

    filling(state) {
      let fillingItems = [];
      let fillingItemsMap = {};

      state.ingredients.forEach((ingredient) => {
        if (ingredient.count > 0) {
          fillingItemsMap = {
            ...fillingItemsMap,
            [ingredient.mod]: ingredient.count,
          };
        }
      });

      Object.keys(fillingItemsMap).forEach((key) => {
        fillingItems.push({
          id: key,
          mod: key,
          multipleMod: multipleModMap[fillingItemsMap[key]],
          count: fillingItemsMap[key],
        });
      });

      return fillingItems;
    },
  },

  mutations: {
    // NOTE ESLint глючит
    // eslint-disable-next-line no-unused-vars
    [RESET_STATE](state) {
      state = Object.assign(state, initialState());
    },

    [SET_CURRENT_DOUGH](state, currentDough) {
      state.currentDough = currentDough;
      state.doughs = setCurrentAdditional(state.doughs, currentDough);
    },

    [SET_CURRENT_SIZE](state, currentSize) {
      state.currentSize = currentSize;
      state.sizes = setCurrentAdditional(state.sizes, currentSize);
    },

    [SET_CURRENT_SAUCE](state, currentSauce) {
      state.currentSauce = currentSauce;
      state.sauces = setCurrentAdditional(state.sauces, currentSauce);
    },

    [SET_PIZZA_NAME](state, pizzaName) {
      state.pizzaName = pizzaName;
    },

    [EDIT_INGREDIENTS](state, ingredients) {
      state.ingredients = ingredients;
    },
  },

  actions: {
    resetState({ commit }) {
      commit(RESET_STATE);
    },

    setCurrentDough({ commit }, currentDough) {
      commit(SET_CURRENT_DOUGH, currentDough);
    },

    setCurrentSize({ commit }, currentSize) {
      commit(SET_CURRENT_SIZE, currentSize);
    },

    setCurrentSauce({ commit }, currentSauce) {
      commit(SET_CURRENT_SAUCE, currentSauce);
    },

    setPizzaName({ commit }, pizzaName) {
      commit(SET_PIZZA_NAME, pizzaName);
    },

    editIngredients({ commit }, ingredients) {
      commit(EDIT_INGREDIENTS, ingredients);
    },

    inc({ commit }, currentIngredientIndex) {
      commit(
        INC,
        {
          module: "Builder",
          entity: "ingredients",
          value: currentIngredientIndex,
        },
        { root: true }
      );
    },

    dec({ commit }, currentIngredientIndex) {
      commit(
        DEC,
        {
          module: "Builder",
          entity: "ingredients",
          value: currentIngredientIndex,
        },
        { root: true }
      );
    },

    edit({ dispatch }, cartItem) {
      dispatch("setCurrentDough", cartItem.dough);
      dispatch("setCurrentSize", cartItem.size);
      dispatch("setCurrentSauce", cartItem.sauce);
      dispatch("setPizzaName", cartItem.name);
      dispatch("editIngredients", cartItem.ingredients);
    },

    inputChange({ commit }, { currentIngredientIndex, value }) {
      commit(
        INC_DEC_INPUT_CHANGE,
        {
          module: "Builder",
          entity: "ingredients",
          value: {
            value,
            currentIndex: currentIngredientIndex,
          },
        },
        { root: true }
      );
    },
  },
};
