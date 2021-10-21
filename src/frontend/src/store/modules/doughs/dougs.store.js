import { normalizeDougs } from "@/modules/builder/helpers";
import pizza from "@/static/pizza.json";
import {
  CHANGE_DOUGH,
  SET_DOUGHS,
} from "@/store/modules/doughs/mutation-types";

const initialState = () => ({
  doughs: [],
});

export default {
  namespaced: true,

  state: initialState(),

  getters: {
    totalPrice(state) {
      return state.doughs.find(({ isChecked }) => isChecked).price;
    },
  },

  mutations: {
    [SET_DOUGHS](state, payload) {
      state.doughs = payload;
    },

    [CHANGE_DOUGH](state, id) {
      state.doughs = state.doughs.map((dough) => ({
        ...dough,
        isChecked: dough.id === id,
      }));
    },
  },

  actions: {
    fetchDoughs({ commit }) {
      const doughs = normalizeDougs(pizza.dough);

      commit(SET_DOUGHS, doughs);
    },

    changeDough({ commit }, activeDoughId) {
      commit(CHANGE_DOUGH, activeDoughId);
    },
  },
};
