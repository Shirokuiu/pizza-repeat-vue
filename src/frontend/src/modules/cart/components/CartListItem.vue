<template>
  <li class="cart-list__item">
    <div class="product cart-list__product">
      <img
        src="../../../assets/img/product.svg"
        class="product__img"
        width="56"
        height="56"
        alt="Капричоза"
      />
      <div class="product__text">
        <h2>Капричоза</h2>
        <ul>
          <li>30 см, на тонком тесте</li>
          <li>Соус: томатный</li>
          <li>Начинка: грибы, лук, ветчина, пармезан, ананас</li>
        </ul>
      </div>
    </div>

    <AppCounter
      :count="1"
      class="cart-list__counter"
      :inc-mod="appCounterIncMod.orange"
    />

    <div class="cart-list__price">
      <b>782 ₽</b>
    </div>

    <div class="cart-list__button">
      <button type="button" class="cart-list__edit">Изменить</button>
    </div>
  </li>
</template>

<script>
import AppCounter from "src/common/components/AppCounter";
import { appCounterIncMod } from "src/common/constants";

export default {
  name: "CartListItem",

  components: {
    AppCounter,
  },

  data() {
    return {
      appCounterIncMod,
    };
  },
};
</script>
