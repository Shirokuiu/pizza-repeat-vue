import { SET_ADDRESSES } from "@/modules/profile/store/profile-address-list/mutation-types";

export default {
  namespaced: true,

  state: {
    addresses: [],
  },

  mutations: {
    [SET_ADDRESSES](state, addresses) {
      state.addresses = addresses;
    },
  },

  actions: {
    async fetchAddresses({ commit }) {
      const addresses = await this.$api.addresses.get();

      commit(SET_ADDRESSES, addresses);
    },
  },
};
