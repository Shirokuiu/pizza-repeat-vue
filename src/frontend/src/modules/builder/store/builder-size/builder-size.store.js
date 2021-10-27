import {
  RESET_STATE,
  CHANGE_SIZE,
  SET_SIZES,
} from "@/modules/builder/store/builder-size/mutation-types";
import { normalizeSizes } from "@/modules/builder/helpers";
import pizza from "@/static/pizza.json";

let cacheSizes = [];

export default {
  namespaced: true,

  state: () => ({
    sizes: [],
  }),

  getters: {
    currentMultiplier(state) {
      return state.sizes.find(({ isChecked }) => isChecked)?.multiplier;
    },
  },

  mutations: {
    [RESET_STATE](state, payload) {
      state.sizes = payload;
    },

    [SET_SIZES](state, payload) {
      state.sizes = payload;
    },

    [CHANGE_SIZE](state, id) {
      state.sizes = state.sizes.map((size) => ({
        ...size,
        isChecked: size.id === id,
      }));
    },
  },

  actions: {
    fetchSizes({ commit }) {
      cacheSizes = normalizeSizes(pizza.sizes);

      commit(SET_SIZES, cacheSizes);
    },

    changeSize({ commit }, id) {
      commit(CHANGE_SIZE, id);
    },

    resetState({ commit }) {
      commit(RESET_STATE, cacheSizes);
    },
  },
};
