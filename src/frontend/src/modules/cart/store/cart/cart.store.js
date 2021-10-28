import CartPizzaList from "@/modules/cart/store/cart-pizza-list/cart-pizza-list.store";
import {
  SET_EDIT_PIZZA_ID,
  TOGGLE_EDIT,
} from "@/modules/cart/store/cart/mutation-types";

export default {
  namespaced: true,

  state: {
    isEdit: false,
    editPizzaId: undefined,
  },

  getters: {
    totalPrice(state, getters, rootState) {
      if (rootState.Cart.CartPizzaList.pizzaItems.length) {
        return rootState.Cart.CartPizzaList.pizzaItems
          .map(({ totalPrice }) => totalPrice)
          .reduce((a, b) => a + b);
      }

      return 0;
    },
  },

  mutations: {
    [SET_EDIT_PIZZA_ID](state, payload) {
      state.editPizzaId = payload;
    },

    [TOGGLE_EDIT](state, payload) {
      state.isEdit = payload;
    },
  },

  actions: {
    setEditPizzaId({ commit }, pizzaId) {
      commit(SET_EDIT_PIZZA_ID, pizzaId);
    },

    toggleEdit({ commit }, isEdit) {
      commit(TOGGLE_EDIT, isEdit);
    },
  },

  modules: {
    CartPizzaList,
  },
};
