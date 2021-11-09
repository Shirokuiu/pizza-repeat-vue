import ProfileAddressList from "@/modules/profile/store/profile-address-list/profile-address-list.store";
import ProfileAddressForm from "@/modules/profile/store/profile-address-form/profile-address-form.store";
import { buildAddressForBack } from "@/modules/profile/helpers";

export default {
  namespaced: true,

  actions: {
    async addNewAddress({ dispatch, rootState }) {
      const form = await dispatch("ProfileAddressForm/submit");
      const userId = rootState.Auth.user.id;

      const newAddress = await this.$api.addresses.post({
        ...buildAddressForBack(form),
        userId,
      });

      dispatch("ProfileAddressList/addAddress", newAddress);
      dispatch("ProfileAddressForm/resetState");

      return new Promise((resolve) => {
        resolve();
      });
    },
  },

  modules: {
    ProfileAddressList,
    ProfileAddressForm,
  },
};