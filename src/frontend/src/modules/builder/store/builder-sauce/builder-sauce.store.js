import { normalizeSauces } from "@/modules/builder/store/builder-sauce/helpers";
import pizza from "@/static/pizza.json";
import {
  SET_SAUCES,
  SAUCE_CHANGE,
  RESET_STATE,
} from "@/modules/builder/store/builder-sauce/mutation-types";

let cacheSauces = [];

const initialState = () => ({
  sauces: cacheSauces,
});

export default {
  namespaced: true,

  state: initialState(),

  getters: {
    totalPrice(state) {
      return state.sauces.find(({ isChecked }) => isChecked)?.price;
    },
  },

  mutations: {
    // eslint-disable-next-line no-unused-vars
    [RESET_STATE](state) {
      state = Object.assign(state, initialState());
    },

    [SET_SAUCES](state, payload) {
      state.sauces = payload;
    },
    [SAUCE_CHANGE](state, id) {
      state.sauces = state.sauces.map((sauce) => ({
        ...sauce,
        isChecked: sauce.id === id,
      }));
    },
  },

  actions: {
    resetState({ commit }) {
      commit(RESET_STATE);
    },

    fetchSauces({ commit }) {
      if (!cacheSauces.length) {
        cacheSauces = normalizeSauces(pizza.sauces);
      }

      commit(SET_SAUCES, cacheSauces);
    },

    setSauces({ commit }, sauces) {
      commit(SET_SAUCES, sauces);
    },

    sauceChange({ commit }, activeSauceId) {
      commit(SAUCE_CHANGE, activeSauceId);
    },
  },
};
