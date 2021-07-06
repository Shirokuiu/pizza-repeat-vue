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
    <HeaderCart />
    <HeaderUser />
  </header>
</template>
<script>
import HeaderCart from "./HeaderCart";
import HeaderUser from "./HeaderUser";

export default {
  name: "Header",

  components: {
    HeaderCart,
    HeaderUser,
  },
};
</script>
