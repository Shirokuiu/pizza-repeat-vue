import {
  fillingClassCount,
  sauceClassMap,
  sizeClassMap,
} from "@/modules/builder/constants";
import {
  RESET_STATE,
  SET_PIZZA_NAME,
} from "@/modules/builder/store/mutation-types";

const initialState = () => ({
  pizzaName: "",
});

export default {
  namespaced: true,

  state: initialState(),

  getters: {
    sizeClass(state, getters, rootState) {
      const sizeClass =
        sizeClassMap[
          rootState["Builder"]["BuilderDough"].doughs.find(
            ({ isChecked }) => isChecked
          ).classMod
        ];
      const sauceClass =
        sauceClassMap[
          rootState["Builder"]["BuilderIngredients"].sauces.find(
            ({ isChecked }) => isChecked
          ).value
        ];

      return `${sizeClass}-${sauceClass}`;
    },

    fillingClasses(state, getters, rootState) {
      return rootState["Builder"]["BuilderIngredients"].ingredients
        .map((ingredient) => {
          if (ingredient.counter.value) {
            return [
              `pizza__filling--${ingredient.classMod}`,
              `${
                ingredient.counter.value > 1
                  ? `pizza__filling--${
                      fillingClassCount[ingredient.counter.value]
                    }`
                  : undefined
              }`,
            ]
              .filter((it) => it !== "undefined")
              .join(" ");
          }
        })
        .filter((it) => it);
    },

    isMakeEnabled(state, getters, rootState) {
      return (
        Boolean(state.pizzaName.length) &&
        rootState["Builder"]["BuilderIngredients"].ingredients.some(
          ({ counter }) => counter.value > 0
        )
      );
    },
  },

  mutations: {
    // eslint-disable-next-line no-unused-vars
    [RESET_STATE](state) {
      state = Object.assign(state, initialState());
    },

    [SET_PIZZA_NAME](state, payload) {
      state.pizzaName = payload;
    },
  },

  actions: {
    setPizzaName({ commit }, value) {
      commit(SET_PIZZA_NAME, value);
    },

    resetState({ commit }) {
      commit(RESET_STATE);
    },
  },
};
