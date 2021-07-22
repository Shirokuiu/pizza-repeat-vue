import Vue from "vue";
import Vuex from "vuex";
import modules from "src/store/modules";
import { DEC, INC, INC_DEC_INPUT_CHANGE } from "src/store/mutation-types";
import { canIncOrDec, dec, inc, incDecInputChange } from "src/common/helpers";
import { countAction } from "src/common/constants";

Vue.use(Vuex);

export default new Vuex.Store({
  modules,
  mutations: {
    [DEC](state, { module, entity, value }) {
      if (canIncOrDec(countAction.DEC, value, state[module][entity])) {
        dec(state[module][entity], value);
      }
    },

    [INC](state, { module, entity, value }) {
      if (canIncOrDec(countAction.INC, value, state[module][entity])) {
        inc(state[module][entity], value);
      }
    },

    [INC_DEC_INPUT_CHANGE](state, { module, entity, value }) {
      const { currentIndex, value: changeValue } = value;

      incDecInputChange(state[module][entity], currentIndex, changeValue);
    },
  },
});
