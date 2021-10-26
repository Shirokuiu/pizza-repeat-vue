import { ADD } from "@/modules/cart/store/mutation-types";
import { buildCartPizza } from "@/modules/cart/helpers/helpers";

const initialState = () => ({
  pizzaItems: [],
});

export default {
  namespaced: true,

  state: initialState(),

  getters: {
    totalPrice(state) {
      if (state.pizzaItems.length) {
        return state.pizzaItems
          .map(({ totalPrice }) => totalPrice)
          .reduce((a, b) => a + b);
      }

      return 0;
    },
  },

  mutations: {
    [ADD](state, payload) {
      state.pizzaItems = [...state.pizzaItems, payload];
    },
  },

  actions: {
    add({ commit, rootState, rootGetters }) {
      commit(ADD, buildCartPizza(rootState, rootGetters));
    },
  },
};
