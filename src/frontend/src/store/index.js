import Vue from "vue";
import Vuex from "vuex";
import modules from "src/store/modules";
import { DEC } from "src/store/mutation-types";
import { canIncOrDec, dec } from "src/common/helpers";
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
  },
});
