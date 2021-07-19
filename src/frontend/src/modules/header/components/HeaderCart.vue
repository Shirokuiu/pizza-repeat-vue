<template>
  <div class="header__cart">
    <router-link to="/cart">{{ totalPriceCart }} ₽</router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HeaderCart",

  computed: {
    ...mapGetters("Cart", ["totalPriceCart"]),
  },
};
</script>
