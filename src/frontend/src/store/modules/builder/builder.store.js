export default {
  namespaced: true,

  state: {},

  getters: {
    totalPrice(state, getters, rootState, rootGetters) {
      return (
        rootGetters["Doughs/totalPrice"] *
          rootGetters["Sizes/currentMultiplier"] +
        rootGetters["Ingredients/saucePrice"] +
        rootGetters["Ingredients/ingredientsPrice"]
      );
    },
  },
};
