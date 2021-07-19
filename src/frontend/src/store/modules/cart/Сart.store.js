import { ADD_TO_CART } from "src/store/modules/cart/mutation-types";

const initialState = () => ({
  cartItems: [],
});

export default {
  namespaced: true,

  state: initialState(),

  getters: {
    totalPriceCart(state) {
      return state.cartItems.reduce((a, b) => a + (b["price"] || 0), 0);
    },
  },

  mutations: {
    [ADD_TO_CART](state, cartItem) {
      state.cartItems.push(cartItem);
    },
  },

  actions: {
    addToCart({ commit }, cartItem) {
      commit(ADD_TO_CART, cartItem);
    },
  },
};
