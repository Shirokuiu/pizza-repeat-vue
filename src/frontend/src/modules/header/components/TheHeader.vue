<template>
  <header class="header">
    <div class="header__logo">
      <router-link to="/" class="logo">
        <img
          src="../../../assets/img/logo.svg"
          alt="V!U!E! Pizza logo"
          width="90"
          height="40"
        />
      </router-link>
    </div>
    <HeaderCart :total-price-cart="totalPriceCart" />
    <HeaderUser />
  </header>
</template>

<script>
import HeaderCart from "src/modules/header/components/HeaderCart";
import HeaderUser from "src/modules/header/components/HeaderUser";

export default {
  name: "Header",

  props: {
    totalPriceCart: {
      type: Number,
      default: 0,
    },
  },

  components: {
    HeaderCart,
    HeaderUser,
  },
};
</script>
