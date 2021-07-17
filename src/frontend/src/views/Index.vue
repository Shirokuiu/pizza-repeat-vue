<template>
  <main class="content">
    <TheBuilder @addToCart="addToCart" />
    <router-view />
  </main>
</template>

<script>
import TheBuilder from "../modules/builder/components/TheBuilder";

export default {
  name: "Index",
  components: {
    TheBuilder,
  },

  methods: {
    addToCart(totalPriceCart) {
      this.$emit("addToCart", totalPriceCart);
    },
  },
};
</script>

<style scoped></style>
