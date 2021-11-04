import { buildForm } from "@/modules/cart/store/cart-make-order/helpers";
import {
  ADDRESS_CHANGE,
  ADDRESS_UPDATE,
  SET_VALIDATOR,
} from "@/modules/cart/store/cart-make-order/mutation-types";

const DEFAULT_ADDRESS_ID = -1;

const initialState = () => ({
  forms: buildForm(),
  currentId: DEFAULT_ADDRESS_ID,
  validator: undefined,
});

export default {
  namespaced: true,

  state: initialState(),

  getters: {
    currentFormAddress(state) {
      return state.forms.find(({ id }) => id === state.currentId);
    },

    currentValidationRule(state, getters) {
      return getters.currentFormAddress.form.validationRule
        ? getters.currentFormAddress.form.validationRule
        : {};
    },
  },

  mutations: {
    [ADDRESS_CHANGE](state, id) {
      state.currentId = id;
    },

    [ADDRESS_UPDATE](state, { key, value, currentIndex }) {
      state.forms[currentIndex].form.address[key] = value;
    },

    [SET_VALIDATOR](state, validator) {
      state.validator = validator;
    },
  },

  actions: {
    init({ commit, rootState }, validator) {
      commit(SET_VALIDATOR, validator);

      if (rootState.Auth.isAuth) {
        // console.log(buildFormAddress());
        ///
      }
    },

    addressChange({ commit }, id) {
      commit(ADDRESS_CHANGE, id);

      return new Promise((resolve) => {
        resolve();
      });
    },

    addressUpdate({ state, commit }, { key, value }) {
      const currentIndex = state.forms.findIndex(
        ({ id }) => id === state.currentId
      );

      commit(ADDRESS_UPDATE, { key, value, currentIndex });
    },

    setValidator({ commit }, validator) {
      commit(SET_VALIDATOR, validator);
    },

    submit({ state }) {
      console.log(state.validator);
      state.validator.$touch();
    },
  },
};
