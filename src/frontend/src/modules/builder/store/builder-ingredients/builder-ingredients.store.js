import { cloneDeep } from "lodash";
import {
  INGREDIENT_INC,
  SAUCE_CHANGE,
  SET_INGREDIENTS,
  SET_SAUCES,
  INGREDIENT_DEC,
  INGREDIENT_CHANGE,
  INGREDIENT_DROP,
  RESET_STATE,
} from "@/modules/builder/store/builder-ingredients/mutation-types";
import pizza from "@/static/pizza.json";
import {
  normalizeIngredients,
  normalizeSauces,
} from "@/modules/builder/helpers";
import Count from "@/common/helpers/count";
import { buildIngredientPrice } from "@/modules/builder/store/builder-ingredients/helpers";
import { CommitDataMutation } from "@/modules/builder/store/builder-ingredients/constants";

let cacheSauces = [];
let cacheIngredients = [];

const initialState = () => ({
  sauces: cloneDeep(cacheSauces),
  ingredients: cloneDeep(cacheIngredients),
});

export default {
  namespaced: true,

  state: initialState(),

  getters: {
    saucePrice(state) {
      return state.sauces.find(({ isChecked }) => isChecked)?.price;
    },

    ingredientsPrice(state) {
      return buildIngredientPrice(state.ingredients);
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

    [SET_INGREDIENTS](state, payload) {
      state.ingredients = payload;
    },

    [SAUCE_CHANGE](state, id) {
      state.sauces = state.sauces.map((sauce) => ({
        ...sauce,
        isChecked: sauce.id === id,
      }));
    },

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

    [INGREDIENT_DROP](state, { type, value }) {
      state.ingredients = Count.incDec(type, value, state.ingredients);
    },
  },

  actions: {
    resetState({ commit }) {
      commit(RESET_STATE);
    },

    fetchSauces({ commit }) {
      const sauces = normalizeSauces(pizza.sauces);
      cacheSauces = cloneDeep(sauces);

      commit(SET_SAUCES, sauces);
    },

    fetchIngredients({ commit }) {
      const ingredients = normalizeIngredients(pizza.ingredients);
      cacheIngredients = cloneDeep(ingredients);

      commit(SET_INGREDIENTS, cacheIngredients);
    },

    sauceChange({ commit }, activeSauceId) {
      commit(SAUCE_CHANGE, activeSauceId);
    },

    countChange({ commit, state }, { evtData, ingredientId }) {
      const { evtType, value } = evtData;

      Count.buildCommitMutation(
        { arr: state.ingredients, arrId: ingredientId, evtType, value },
        (commitData) => {
          commit(
            CommitDataMutation[commitData.mutationType],
            commitData.payload
          );
        }
      );
    },
  },
};
