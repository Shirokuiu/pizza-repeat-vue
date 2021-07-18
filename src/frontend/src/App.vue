<template>
  <div id="app">
    <component :is="layout" :total-price-cart="totalPriceCart">
      <router-view @addToCart="addToCart" />
    </component>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      totalPriceCart: 0,
    };
  },

  computed: {
    layout() {
      return () => import("./layouts/AppLayout.vue");
    },
  },

  methods: {
    addToCart(totalPriceCart) {
      this.totalPriceCart = totalPriceCart;
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/app";
</style>
