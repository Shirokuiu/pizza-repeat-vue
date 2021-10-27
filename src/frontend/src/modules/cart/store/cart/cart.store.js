import CartPizzaList from "@/modules/cart/store/cart-pizza-list/cart-pizza-list.store";

export default {
  namespaced: true,

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

  modules: {
    CartPizzaList,
  },
};
