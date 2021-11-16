<template>
  <main class="layout">
    <AppSidebar>
      <router-link
        to="/user/orders"
        active-class="layout__link--active"
        class="layout__link"
        >История заказов</router-link
      >
      <router-link
        to="/user/profile"
        active-class="layout__link--active"
        class="layout__link"
        >Мои данные</router-link
      >
    </AppSidebar>

    <router-view></router-view>
  </main>
</template>

<script>
import AppSidebar from "@/common/components/AppSidebar";
import Profile from "@/modules/profile/store/profile/profile.store";

export default {
  name: "User",

  components: {
    AppSidebar,
  },

  beforeCreate() {
    this.$store.registerModule("Profile", Profile);
  },

  beforeDestroy() {
    this.$store.unregisterModule("Profile");
  },
};
</script>
