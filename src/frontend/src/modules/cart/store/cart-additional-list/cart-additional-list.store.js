import { normalizeAdditionals } from "@/modules/cart/store/cart-additional-list/helpers";
import { SET_ADDITIONALS } from "@/modules/cart/store/cart-additional-list/mutation-types";
import { Count } from "@/common/helpers";
import {
  CHANGE,
  DEC,
  INC,
  RESET_STATE,
} from "@/modules/cart/store/cart-additional-list/mutation-types";

let cacheAdditionals = [];

const initialState = () => ({
  additionals: [],
});

export default {
  namespaced: true,

  state: initialState(),

  getters: {
    totalPrice(state) {
      if (state.additionals.length) {
        return state.additionals
          .map(({ totalPrice }) => totalPrice)
          .reduce((a, b) => a + b);
      }

      return 0;
    },
  },

  mutations: {
    // eslint-disable-next-line no-unused-vars
    [RESET_STATE](state) {
      state = Object.assign(state, initialState());
      cacheAdditionals = [];
    },

    [SET_ADDITIONALS](state, payload) {
      state.additionals = payload;
    },

    [INC](state, { type, value }) {
      state.additionals = Count.incDec(type, value, state.additionals);
    },

    [DEC](state, { type, value }) {
      state.additionals = Count.incDec(type, value, state.additionals);
    },

    [CHANGE](state, { value: valueData }) {
      const { id, value } = valueData;

      state.additionals = Count.change(id, value, state.additionals);
    },
  },

  actions: {
    resetState({ commit }) {
      commit(RESET_STATE);
    },

    async fetchAdditionals({ commit }) {
      if (!cacheAdditionals.length) {
        cacheAdditionals = normalizeAdditionals(await this.$api.misc.get());

        commit(SET_ADDITIONALS, cacheAdditionals);
      }
    },

    countChange({ commit, state }, { evtData, additionalId }) {
      const { evtType, value } = evtData;

      Count.buildCommitMutation(
        { arr: state.additionals, arrId: additionalId, evtType, value },
        (commitData) => {
          commit(commitData.mutationType, commitData.payload);
        }
      );
    },
  },
};
