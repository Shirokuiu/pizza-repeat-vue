<template>
  <ul class="cart-list sheet">
    <CartListItem
      v-for="(cartItem, idx) of cartItems"
      :key="cartItem.id"
      :cart-item="cartItem"
      :current-index="idx"
      @onCountUpdate="
        onCountUpdate($event, idx, 'Cart', 'cartItems', countAction)
      "
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
    ...mapActions(["countAction"]),
    ...mapActions("Cart", ["toggleEditMode"]),

    onCountUpdate(countActionData, currentIndex, module, entity, action) {
      onCountUpdate(countActionData, currentIndex, module, entity, action);
    },
  },
};
</script>
