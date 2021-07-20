<template>
  <div>
    <CartContentList />

    <CartContentAdditional />

    <CartContentForm />
  </div>
</template>

<script>
import CartContentList from "src/modules/cart/components/CartContentList";
import CartContentAdditional from "src/modules/cart/components/CartContentAdditional";
import CartContentForm from "src/modules/cart/components/CartContentForm";

export default {
  name: "CartContent",

  components: {
    CartContentList,
    CartContentAdditional,
    CartContentForm,
  },
};
</script>
