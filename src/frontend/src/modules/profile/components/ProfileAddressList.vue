<template>
  <div>
    <ProfileAddressItem
      v-for="address in addresses"
      :key="address.id"
      :address="address"
      @onEdit="edit"
    >
      <ProfileAddressForm :form="currentAddress">
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

  created() {
    this.fetchAddresses();
  },

  methods: {
    ...mapActions("Profile/ProfileAddressList", [
      "fetchAddresses",
      "setCurrentAddressId",
    ]),

    edit(id) {
      this.setCurrentAddressId(id);
    },
  },
};
</script>
