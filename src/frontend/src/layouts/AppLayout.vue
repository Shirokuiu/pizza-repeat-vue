<template>
  <div>
    <TheHeader :total-price-cart="totalPriceCart" />

    <slot />
  </div>
</template>

<script>
import TheHeader from "../modules/header/components/TheHeader";

export default {
  name: "AppLayout",

  components: {
    TheHeader,
  },

  props: {
    totalPriceCart: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style></style>
