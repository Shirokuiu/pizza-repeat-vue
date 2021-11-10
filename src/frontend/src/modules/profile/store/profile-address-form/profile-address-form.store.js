import {
  RESET_STATE,
  SET_FORM,
  SET_VALIDATOR,
  UPDATE_FORM,
} from "@/modules/profile/store/profile-address-form/mutation-types";
import { cloneDeep } from "lodash";

let cachedForm;

const initialState = () => ({
  form: undefined,
  validator: undefined,
});

export default {
  namespaced: true,

  state: () => initialState(),

  mutations: {
    // eslint-disable-next-line no-unused-vars
    [RESET_STATE](state) {
      state.form = cachedForm;
    },

    [SET_FORM](state, form) {
      state.form = form;
    },

    [SET_VALIDATOR](state, validator) {
      state.validator = validator;
    },

    [UPDATE_FORM](state, { key, value }) {
      state.form[key].value = value;

      state.validator[key]?.$touch();
    },
  },

  actions: {
    resetState({ state, commit }) {
      commit(RESET_STATE);

      state.validator.$reset();
    },

    setForm({ commit }, form) {
      commit(SET_FORM, form);

      cachedForm = cloneDeep(form);
    },

    setValidator({ commit }, validator) {
      commit(SET_VALIDATOR, validator);
    },

    updateForm({ commit }, { key, value }) {
      commit(UPDATE_FORM, { key, value });
    },

    // eslint-disable-next-line no-unused-vars
    submit({ state }) {
      state.validator.$touch();

      return new Promise((resolve) => {
        if (!state.validator.$invalid) {
          return resolve(state.form);
        }
      });
    },
  },
};
