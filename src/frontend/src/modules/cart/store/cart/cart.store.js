import CartPizzaList from "@/modules/cart/store/cart-pizza-list/cart-pizza-list.store";
import CartAdditionalList from "@/modules/cart/store/cart-additional-list/cart-additional-list.store";
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
    totalPrice(state, getters, rootState, rootGetters) {
      return (
        rootGetters["Cart/CartPizzaList/totalPrice"] +
        rootGetters["Cart/CartAdditionalList/totalPrice"]
      );
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
    CartAdditionalList,
  },
};
