import {
  ADD_TO_CART,
  DEC,
  INC,
  INPUT_CHANGE,
} from "src/store/modules/cart/mutation-types";
import { countAction, modIngredientMap } from "src/common/constants";
import Vue from "vue";

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

const canIncOrDec = (action, currentCartIndex, arr) => {
  switch (action) {
    case countAction.INC:
      return arr[currentCartIndex].count < arr[currentCartIndex].maxInc;
    case countAction.DEC:
      return arr[currentCartIndex].count > arr[currentCartIndex].maxDec;
  }
};

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
        maxInc: 3,
        maxDec: 0,
        totalPrice: cartItem.price * cartItem.count,
      });
    },

    [INC](state, currentCartIndex) {
      if (canIncOrDec(countAction.INC, currentCartIndex, state.cartItems)) {
        Vue.set(state.cartItems, currentCartIndex, {
          ...state.cartItems[currentCartIndex],
          count: ++state.cartItems[currentCartIndex].count,
          totalPrice:
            state.cartItems[currentCartIndex].count *
            state.cartItems[currentCartIndex].price,
        });
      }
    },

    [DEC](state, currentCartIndex) {
      if (canIncOrDec(countAction.DEC, currentCartIndex, state.cartItems)) {
        Vue.set(state.cartItems, currentCartIndex, {
          ...state.cartItems[currentCartIndex],
          count: --state.cartItems[currentCartIndex].count,
          totalPrice:
            state.cartItems[currentCartIndex].count *
            state.cartItems[currentCartIndex].price,
        });
      }
    },

    [INPUT_CHANGE](state, { currentCartIndex, value: inputValue }) {
      const value = parseInt(inputValue, 10);

      if (isNaN(value)) {
        Vue.set(state.cartItems, currentCartIndex, {
          ...state.cartItems[currentCartIndex],
          count: 0,
          totalPrice: 0,
        });

        return;
      }

      Vue.set(state.cartItems, currentCartIndex, {
        ...state.cartItems[currentCartIndex],
        count:
          value > state.cartItems[currentCartIndex].maxInc ||
          value < state.cartItems[currentCartIndex].maxDec
            ? state.cartItems[currentCartIndex].count
            : value,
        totalPrice:
          value > state.cartItems[currentCartIndex].maxInc ||
          value < state.cartItems[currentCartIndex].maxDec
            ? state.cartItems[currentCartIndex].price *
              state.cartItems[currentCartIndex].count
            : state.cartItems[currentCartIndex].price * value,
      });
    },
  },

  actions: {
    addToCart({ commit }, cartItem) {
      commit(ADD_TO_CART, cartItem);
    },

    inc({ commit }, currentCartIndex) {
      commit(INC, currentCartIndex);
    },

    dec({ commit }, currentCartIndex) {
      commit(DEC, currentCartIndex);
    },

    inputChange({ commit }, { currentCartIndex, value }) {
      commit(INPUT_CHANGE, {
        currentCartIndex,
        value,
      });
    },
  },
};
