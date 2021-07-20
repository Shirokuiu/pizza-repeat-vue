<template>
  <ul class="cart-list sheet">
    <CartListItem
      v-for="cartItem of cartItems"
      :key="cartItem.id"
      :cart-item="cartItem"
    />
  </ul>
</template>

<script>
import { mapState } from "vuex";
import CartListItem from "src/modules/cart/components/CartListItem";

export default {
  name: "CartContentList",

  components: {
    CartListItem,
  },

  computed: {
    ...mapState("Cart", ["cartItems"]),
  },
};
</script>
