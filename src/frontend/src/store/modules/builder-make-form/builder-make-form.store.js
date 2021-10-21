import {
  sauceClassMap,
  sizeClassMap,
} from "@/store/modules/builder-make-form/constants";

export default {
  namespaced: true,

  state: {},

  getters: {
    sizeClass(state, getters, rootState) {
      const sizeClass =
        sizeClassMap[
          rootState["Doughs"].doughs.find(({ isChecked }) => isChecked).classMod
        ];
      const sauceClass =
        sauceClassMap[
          rootState["Ingredients"].sauces.find(({ isChecked }) => isChecked)
            .value
        ];

      return `${sizeClass}-${sauceClass}`;
    },
  },
};
