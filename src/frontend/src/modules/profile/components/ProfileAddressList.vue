<template>
  <div>
    <ProfileAddressItem v-if="false">
      <ProfileAddressForm>
        <AppBtn description="Удалить" class="button--transparent"></AppBtn>
        <AppBtn description="Сохранить" type="submit"></AppBtn>
      </ProfileAddressForm>
    </ProfileAddressItem>
  </div>
</template>

<script>
import ProfileAddressItem from "@/modules/profile/components/ProfileAddressItem";
import ProfileAddressForm from "@/modules/profile/components/ProfileAddressForm";
import { mapActions, mapState } from "vuex";
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
  },

  created() {
    this.fetchAddresses();
  },

  methods: {
    ...mapActions("Profile/ProfileAddressList", ["fetchAddresses"]),
  },
};
</script>
