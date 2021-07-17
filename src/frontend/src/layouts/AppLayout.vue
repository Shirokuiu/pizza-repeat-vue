<template>
  <div>
    <TheHeader :total-price-cart="totalPriceCart" />

    <router-view @addToCart="addToCart" />
  </div>
</template>

<script>
import TheHeader from "../modules/header/components/TheHeader";

export default {
  name: "AppLayout",

  components: {
    TheHeader,
  },

  data() {
    return {
      totalPriceCart: 0,
    };
  },

  methods: {
    addToCart(totalPriceCart) {
      this.totalPriceCart = totalPriceCart;
    },
  },
};
</script>

<style></style>
