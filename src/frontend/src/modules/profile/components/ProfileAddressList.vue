<template>
  <div>
    <ProfileAddressItem
      v-for="(address, idx) in addresses"
      :key="address.id"
      :address="address"
      :address-number="idx + 1"
      @onEdit="edit"
    >
      <ProfileAddressForm
        v-if="address.isEdit"
        :form="currentAddress"
        :address-number="idx + 1"
        @init="initForm($event)"
        @updateValue="updateValue($event)"
      >
        <AppBtn description="Удалить" class="button--transparent"></AppBtn>
        <AppBtn description="Сохранить" type="submit"></AppBtn>
      </ProfileAddressForm>
    </ProfileAddressItem>
  </div>
</template>

<script>
import ProfileAddressItem from "@/modules/profile/components/ProfileAddressItem";
import ProfileAddressForm from "@/modules/profile/components/ProfileAddressForm";
import { mapActions, mapGetters, mapState } from "vuex";
import AppBtn from "@/common/components/AppBtn";

export default {
  name: "ProfileAddressList",

  components: {
    ProfileAddressItem,
    ProfileAddressForm,
    AppBtn,
  },

  computed: {
    ...mapState("Profile/ProfileAddressList", ["addresses"]),
    ...mapGetters("Profile/ProfileAddressList", ["currentAddress"]),
  },

  watch: {
    currentAddress(newAddress) {
      this.setForm(newAddress);
    },
  },

  created() {
    this.fetchAddresses();
  },

  methods: {
    ...mapActions("Profile/ProfileAddressList", {
      fetchAddresses: "fetchAddresses",
      setCurrentAddressId: "setCurrentAddressId",
      editAddress: "edit",
    }),
    ...mapActions("Profile/ProfileAddressList/ProfileAddressForm", [
      "setForm",
      "setValidator",
      "updateForm",
    ]),

    initForm(validator) {
      this.setValidator(validator);
    },

    updateValue({ key, value }) {
      this.updateForm({ key, value });
    },

    edit({ id, needClose }) {
      this.setCurrentAddressId(id);
      this.editAddress({ id, needClose });
    },
  },
};
</script>
