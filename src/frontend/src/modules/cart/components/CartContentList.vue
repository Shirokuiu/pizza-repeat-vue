<template>
  <ul class="cart-list sheet">
    <CartListItem
      v-for="(cartItem, idx) of cartItems"
      :key="cartItem.id"
      :cart-item="cartItem"
      :current-index="idx"
      @onCountUpdate="onCountUpdate($event, idx)"
    />
  </ul>
</template>

<script>
import { mapState, mapActions } from "vuex";
import CartListItem from "src/modules/cart/components/CartListItem";
import { countAction } from "src/common/constants";

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
      inputChange: "inputChange",
      toggleEditMode: "toggleEditMode",
    }),

    onCountUpdate(countActionData, currentCartIndex) {
      const { action, value } = countActionData;

      switch (action) {
        case countAction.INC:
          this.inc(currentCartIndex);
          break;
        case countAction.DEC:
          this.dec(currentCartIndex);
          break;
        case countAction.INPUT_CHANGE:
          this.inputChange({ currentCartIndex, value });
          break;
      }
    },
  },
};
</script>
