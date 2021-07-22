<template>
  <ul class="cart-list sheet">
    <CartListItem
      v-for="(cartItem, idx) of cartItems"
      :key="cartItem.id"
      :cart-item="cartItem"
      :current-index="idx"
      @onCountUpdate="onCountUpdate($event, idx, 'cartItems', countAction)"
    />
  </ul>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { onCountUpdate } from "src/common/helpers";
import CartListItem from "src/modules/cart/components/CartListItem";

export default {
  name: "CartContentList",

  components: {
    CartListItem,
  },

  computed: {
    ...mapState("Cart", ["cartItems"]),
  },

  created() {
    this.toggleEditMode({ isEdit: false });
  },

  methods: {
    ...mapActions("Cart", {
      inc: "inc",
      dec: "dec",
      countAction: "countAction",
      inputChange: "inputChange",
      toggleEditMode: "toggleEditMode",
    }),

    onCountUpdate(countActionData, currentIndex, entity, action) {
      onCountUpdate(countActionData, currentIndex, entity, action);
    },
  },
};
</script>
