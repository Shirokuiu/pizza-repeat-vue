import {
  CHANGE,
  DEC,
  INC,
  ADD,
} from "@/modules/cart/store/cart-pizza-list/mutation-types";
import Count from "@/common/helpers/count";
import { buildCartPizza } from "@/modules/cart/store/cart-pizza-list/helpers";

const initialState = () => ({
  pizzaItems: [],
});

export default {
  namespaced: true,

  state: initialState(),

  mutations: {
    [ADD](state, payload) {
      state.pizzaItems = [...state.pizzaItems, payload];
    },

    [INC](state, { type, value }) {
      state.pizzaItems = Count.incDec(type, value, state.pizzaItems);
    },

    [DEC](state, { type, value }) {
      state.pizzaItems = Count.incDec(type, value, state.pizzaItems);
    },

    [CHANGE](state, { value: valueData }) {
      const { id, value } = valueData;

      state.pizzaItems = Count.change(id, value, state.pizzaItems);
    },
  },

  actions: {
    add({ commit }, pizzaItems) {
      commit(ADD, buildCartPizza(pizzaItems));
    },

    countChange({ commit, state }, { evtData, pizzaId }) {
      const { evtType, value } = evtData;

      Count.buildCommitMutation(
        { arr: state.pizzaItems, arrId: pizzaId, evtType, value },
        (commitData) => {
          commit(commitData.mutationType, commitData.payload);
        }
      );
    },
  },
};
