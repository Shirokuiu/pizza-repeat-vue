import {
  ADD_ADDRESS,
  SET_ADDRESSES,
  SET_CURRENT_ADDRESS_ID,
} from "@/modules/profile/store/profile-address-list/mutation-types";
import { buildFormAddresses } from "@/modules/profile/store/profile-address-list/helpers/build-form-addresses";

export default {
  namespaced: true,

  state: {
    addresses: [],
    currentAddressId: undefined,
  },

  getters: {
    currentAddress(state) {
      return state.addresses.find(({ id }) => id === state.currentAddressId);
    },
  },

  mutations: {
    [SET_ADDRESSES](state, addresses) {
      state.addresses = addresses;
    },

    [ADD_ADDRESS](state, newAddress) {
      state.addresses = [...state.addresses, ...newAddress];
    },

    [SET_CURRENT_ADDRESS_ID](state, id) {
      state.currentAddressId = id;
    },
  },

  actions: {
    async fetchAddresses({ commit }) {
      const addresses = await this.$api.addresses.get();

      commit(SET_ADDRESSES, buildFormAddresses(addresses));
    },

    addAddress({ commit }, newAddress) {
      commit(ADD_ADDRESS, buildFormAddresses([newAddress]));
    },

    setCurrentAddressId({ commit }, id) {
      commit(SET_CURRENT_ADDRESS_ID, id);
    },
  },
};
