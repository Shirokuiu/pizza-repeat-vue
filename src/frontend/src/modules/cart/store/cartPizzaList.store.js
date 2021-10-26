import {
  INGREDIENT_CHANGE,
  INGREDIENT_DEC,
  INGREDIENT_INC,
} from "@/modules/builder/store/mutation-types";
import Count from "@/modules/builder/helpers/count";

export default {
  namespaced: true,

  state: {},

  mutations: {
    [INGREDIENT_INC](state, { type, value }) {
      state.ingredients = Count.incDec(type, value, state.ingredients);
    },

    [INGREDIENT_DEC](state, { type, value }) {
      state.ingredients = Count.incDec(type, value, state.ingredients);
    },

    [INGREDIENT_CHANGE](state, { value: valueData }) {
      const { id, value } = valueData;
      state.ingredients = Count.change(id, value, state.ingredients);
    },
  },
};
