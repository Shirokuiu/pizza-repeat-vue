import { CHANGE_SIZE, SET_SIZES } from "@/store/modules/sizes/mutatins-types";
import pizza from "@/static/pizza.json";
import { normalizeSizes } from "@/modules/builder/helpers";

const initialState = () => ({
  sizes: [],
});

export default {
  namespaced: true,

  state: initialState(),

  getters: {
    currentMultiplier(state) {
      return state.sizes.find(({ isChecked }) => isChecked).multiplier;
    },
  },

  mutations: {
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
      const sizes = normalizeSizes(pizza.sizes);

      commit(SET_SIZES, sizes);
    },

    changeSize({ commit }, id) {
      commit(CHANGE_SIZE, id);
    },
  },
};
