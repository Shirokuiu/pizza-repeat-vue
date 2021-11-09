<template>
  <div class="layout__content">
    <div class="layout__title">
      <h1 class="title title--big">Мои данные</h1>
    </div>

    <ProfileUser />

    <ProfileAddressList />

    <ProfileAddressForm
      v-if="isFormShow"
      :form="form"
      :address-number="addresses.length + 1"
      @init="initForm($event)"
      @updateValue="updateValue($event)"
    >
      <AppBtn
        description="Отменить"
        class="button--transparent"
        @onBtnClick="closeForm"
      ></AppBtn>
      <AppBtn description="Сохранить" @onBtnClick="submitForm"></AppBtn>
    </ProfileAddressForm>

    <div class="layout__button">
      <AppBtn
        description="Добавить новый адрес"
        class="button--border"
        @onBtnClick="openForm"
      ></AppBtn>
    </div>
  </div>
</template>

<script>
import ProfileUser from "@/modules/profile/components/ProfileUser";
import AppBtn from "@/common/components/AppBtn";
import Profile from "@/modules/profile/store/profile/profile.store";
import ProfileAddressList from "@/modules/profile/components/ProfileAddressList";
import ProfileAddressForm from "@/modules/profile/components/ProfileAddressForm";
import { buildNewAddressForm } from "@/modules/profile/helpers";
import { mapActions, mapState } from "vuex";

export default {
  name: "TheProfile",

  components: {
    ProfileUser,
    AppBtn,
    ProfileAddressList,
    ProfileAddressForm,
  },

  data() {
    return {
      isFormShow: false,
    };
  },

  computed: {
    ...mapState("Profile/ProfileAddressForm", ["form"]),
    ...mapState("Profile/ProfileAddressList", ["addresses"]),
  },

  beforeCreate() {
    this.$store.registerModule("Profile", Profile);
  },

  created() {
    this.setForm(buildNewAddressForm());
  },

  beforeDestroy() {
    this.$store.unregisterModule("Profile");
  },

  methods: {
    ...mapActions("Profile/ProfileAddressForm", [
      "setForm",
      "setValidator",
      "updateForm",
      "resetState",
    ]),
    ...mapActions("Profile", ["addNewAddress"]),

    initForm(validator) {
      this.setValidator(validator);
    },

    updateValue({ key, value }) {
      this.updateForm({ key, value });
    },

    submitForm() {
      this.addNewAddress().then(() => {
        this.closeForm();
      });
    },

    openForm() {
      this.isFormShow = true;
    },

    closeForm() {
      this.resetState();
      this.isFormShow = false;
    },
  },
};
</script>
