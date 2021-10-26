<template>
  <li class="cart-list__item">
    <div class="product cart-list__product">
      <img
        src="~@/assets/img/product.svg"
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

    <!--    :is-disable-minus="disableMinus"-->
    <!--    :is-disable-plus="disablePlus"-->
    <!--    @onCountEvt="onCountChange($event)"-->
    <AppCounter
      :count="pizza.counter.value"
      :is-disable-minus="disableMinus"
      color="orange"
      class="cart-list__counter"
    />

    <div class="cart-list__price">
      <b>{{ pizza.totalPrice }} ₽</b>
    </div>

    <div class="cart-list__button">
      <button type="button" class="cart-list__edit">Изменить</button>
    </div>
  </li>
</template>

<script>
import AppCounter from "@/common/components/AppCounter";

export default {
  name: "CartListItem",

  components: {
    AppCounter,
  },

  props: {
    pizza: {
      type: Object,
      required: true,
    },
  },

  computed: {
    disableMinus() {
      return this.pizza.counter.maxDec >= this.pizza.counter.value;
    },
  },
};
</script>
