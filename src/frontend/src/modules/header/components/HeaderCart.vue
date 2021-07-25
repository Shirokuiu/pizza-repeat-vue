<template>
  <div class="header__cart">
    <router-link to="/cart">{{ normalizedTotalPrice }} ₽</router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { numberWithSpace } from "src/common/helpers";

export default {
  name: "HeaderCart",

  computed: {
    ...mapGetters("Cart", ["totalPriceCart"]),

    normalizedTotalPrice() {
      return numberWithSpace(this.totalPriceCart);
    },
  },
};
</script>
