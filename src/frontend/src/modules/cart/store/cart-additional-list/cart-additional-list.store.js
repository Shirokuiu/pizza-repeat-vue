import misc from "@/static/misc.json";
import { normalizeAdditionals } from "@/modules/cart/store/cart-additional-list/helpers";
import { SET_ADDITIONALS } from "@/modules/cart/store/cart-additional-list/mutation-types";
import { Count } from "@/common/helpers";
import {
  CHANGE,
  DEC,
  INC,
} from "@/modules/cart/store/cart-additional-list/mutation-types";

let cacheAdditionals = [];

export default {
  namespaced: true,

  state: {
    additionals: [],
  },

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
    [SET_ADDITIONALS](state, payload) {
      state.additionals = payload;
    },

    [INC](state, { type, value }) {
      state.additionals = Count.incDec(type, value, state.additionals);

      console.log(state.additionals);
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
    fetchAdditionals({ commit }) {
      if (!cacheAdditionals.length) {
        cacheAdditionals = normalizeAdditionals(misc);

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
