import { ADD_TO_CART } from "src/store/modules/cart/mutation-types";
import { modIngredientMap } from "src/common/constants";

const sizeMap = {
  small: "23 см",
  normal: "32 см",
  big: "45 см",
};

const doughMap = {
  light: "на тонком тесте",
  large: "на толстом тесте",
};

const sauceMap = {
  tomato: "томатный",
  creamy: "кремовый",
};

const buildDescriptionsFilling = (cartItem) => [
  `${sizeMap[cartItem.size]}, ${doughMap[cartItem.dough]}`,
  `Соус: ${sauceMap[cartItem.sauce]}`,
  `Начинка: ${cartItem.filling
    .map(({ mod }) =>
      modIngredientMap.find(({ value }) => mod === value).name.toLowerCase()
    )
    .join(", ")}`,
];

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
      state.cartItems.push({
        ...cartItem,
        descriptionsFilling: buildDescriptionsFilling(cartItem),
      });
    },
  },

  actions: {
    addToCart({ commit }, cartItem) {
      commit(ADD_TO_CART, cartItem);
    },
  },
};
