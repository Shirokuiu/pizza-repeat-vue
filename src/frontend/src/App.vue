<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
export default {
  name: "App",

  computed: {
    layout() {
      return () => import("./layouts/AppLayout.vue");
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/app";
</style>
