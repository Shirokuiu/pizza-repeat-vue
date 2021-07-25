<template>
  <div class="cart__additional">
    <CartAdditionalList />
  </div>
</template>

<script>
import CartAdditionalList from "src/modules/cart/components/CartAdditionalList";

export default {
  name: "CartContentAdditional",

  components: {
    CartAdditionalList,
  },
};
</script>
