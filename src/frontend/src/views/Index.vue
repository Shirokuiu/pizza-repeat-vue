<template>
  <main class="content">
    <component :is="layout" @addToCart="addToCart"><slot /></component>
    <router-view />
  </main>
</template>

<script>
const defaultLayout = "TheBuilder";

export default {
  name: "Index",

  computed: {
    layout() {
      const layout = this.$route.meta.layout || defaultLayout;

      return () => import(`../modules/builder/components/${layout}.vue`);
    },
  },

  methods: {
    addToCart(totalPriceCart) {
      this.$emit("addToCart", totalPriceCart);
    },
  },
};
</script>

<style scoped></style>
