<template>
  <form action="test.html" method="post" class="layout-form">
    <main class="content cart">
      <div class="container">
        <div class="cart__title">
          <h1 class="title title--big">Корзина</h1>
        </div>

        <CartContentEmpty v-if="!cartItems.length"></CartContentEmpty>
        <CartContent v-if="cartItems.length" />
      </div>
    </main>
    <CartFooter v-if="cartItems.length" />
  </form>
</template>

<script>
import { mapState } from "vuex";
import CartContent from "src/modules/cart/components/CartContent";
import CartFooter from "src/modules/cart/components/CartFooter";
import CartContentEmpty from "src/modules/cart/components/CartContentEmpty";

export default {
  name: "TheCart",

  components: {
    CartContent,
    CartFooter,
    CartContentEmpty,
  },

  computed: {
    ...mapState("Cart", ["cartItems"]),
  },
};
</script>
