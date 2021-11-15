import {
  ADD_ADDRESS,
  SET_ADDRESSES,
  SET_CURRENT_ADDRESS_ID,
  DELETE_ADDRESS,
  TOGGLE_EDIT,
} from "@/modules/profile/store/profile-address-list/mutation-types";
import { buildFormAddresses } from "@/modules/profile/store/profile-address-list/helpers/build-form-addresses";

//NOTE: Для того чтобы переключать режимы редактирования на одной кнопке
let savedOldAddressId;

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

    [TOGGLE_EDIT](state, { id, needClose }) {
      state.addresses = state.addresses.map((address) => ({
        ...address,
        isEdit: needClose ? false : address.id === id,
      }));
    },

    [DELETE_ADDRESS](state, id) {
      state.addresses = state.addresses
        .map((address) => ({
          ...address,
          isEdit: false,
        }))
        .filter((address) => address.id !== id);
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

    toggleEdit({ commit }, id) {
      //NOTE: Для того чтобы переключать режимы редактирования на одной кнопке
      const needClose = savedOldAddressId === id;
      savedOldAddressId = savedOldAddressId === id ? undefined : id;

      commit(TOGGLE_EDIT, { id, needClose });
    },

    async deleteAddress({ commit }, id) {
      await this.$api.addresses.deleteAddress(id);

      commit(DELETE_ADDRESS, id);
    },
  },
};
