<template>
  <ul class="cart-list sheet">
    <CartListItem v-for="pizza in pizzaItems" :key="pizza.id" :pizza="pizza" />
  </ul>
</template>

<script>
import CartListItem from "@/modules/cart/components/CartPizzaListItem";
import { mapState } from "vuex";

export default {
  name: "CartList",

  components: {
    CartListItem,
  },

  computed: {
    ...mapState("Cart", ["pizzaItems"]),
  },
};
</script>
