import Vue from "vue";

import {
  normalizeIngredients,
  normalizeDoughs,
  normalizeSizes,
  normalizeSauces,
} from "src/common";
import pizza from "src/static/pizza.json";
import {
  DEC,
  INC,
  INPUT_CHANGE,
  SET_CURRENT_DOUGH,
  SET_CURRENT_SAUCE,
  SET_CURRENT_SIZE,
  SET_PIZZA_NAME,
} from "src/store/modules/builder/mutation-types";
import { countAction } from "src/common/constants";

const getCurrentItem = (arr) => {
  return arr.filter(({ isChecked }) => isChecked).map(({ value }) => value)[0];
};

const canIncOrDec = (action, currentIngredientIndex, arr) => {
  switch (action) {
    case countAction.INC:
      return (
        arr[currentIngredientIndex].count < arr[currentIngredientIndex].maxInc
      );
    case countAction.DEC:
      return (
        arr[currentIngredientIndex].count > arr[currentIngredientIndex].maxDec
      );
  }
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
  },

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

    [SET_PIZZA_NAME](state, pizzaName) {
      state.pizzaName = pizzaName;
    },

    [INC](state, currentIngredientIndex) {
      if (
        canIncOrDec(countAction.INC, currentIngredientIndex, state.ingredients)
      ) {
        Vue.set(state.ingredients, currentIngredientIndex, {
          ...state.ingredients[currentIngredientIndex],
          count: ++state.ingredients[currentIngredientIndex].count,
          totalPrice:
            state.ingredients[currentIngredientIndex].count *
            state.ingredients[currentIngredientIndex].price,
        });
      }
    },

    [DEC](state, currentIngredientIndex) {
      if (
        canIncOrDec(countAction.DEC, currentIngredientIndex, state.ingredients)
      ) {
        Vue.set(state.ingredients, currentIngredientIndex, {
          ...state.ingredients[currentIngredientIndex],
          count: --state.ingredients[currentIngredientIndex].count,
          totalPrice:
            state.ingredients[currentIngredientIndex].count *
            state.ingredients[currentIngredientIndex].price,
        });
      }
    },

    [INPUT_CHANGE](state, { currentIngredientIndex, value: inputValue }) {
      const value = parseInt(inputValue, 10);

      if (isNaN(value)) {
        Vue.set(state.ingredients, currentIngredientIndex, {
          ...state.ingredients[currentIngredientIndex],
          count: 0,
          totalPrice: 0,
        });

        return;
      }

      Vue.set(state.ingredients, currentIngredientIndex, {
        ...state.ingredients[currentIngredientIndex],
        count:
          value > state.ingredients[currentIngredientIndex].maxInc ||
          value < state.ingredients[currentIngredientIndex].maxDec
            ? state.ingredients[currentIngredientIndex].count
            : value,
        totalPrice:
          value > state.ingredients[currentIngredientIndex].maxInc ||
          value < state.ingredients[currentIngredientIndex].maxDec
            ? state.ingredients[currentIngredientIndex].price *
              state.ingredients[currentIngredientIndex].count
            : state.ingredients[currentIngredientIndex].price * value,
      });
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

    setPizzaName({ commit }, pizzaName) {
      commit(SET_PIZZA_NAME, pizzaName);
    },

    inc({ commit }, currentIngredientIndex) {
      commit(INC, currentIngredientIndex);
    },

    dec({ commit }, currentIngredientIndex) {
      commit(DEC, currentIngredientIndex);
    },

    inputChange({ commit }, { currentIngredientIndex, value }) {
      commit(INPUT_CHANGE, {
        currentIngredientIndex,
        value,
      });
    },
  },
};
