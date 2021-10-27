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
        <h2>{{ pizza.pizzaName }}</h2>
        <ul>
          <li>{{ pizza.description.size }}, {{ pizza.description.dough }}</li>
          <li>Соус: {{ pizza.description.sauce }}</li>
          <li>Начинка: {{ pizza.description.ingredients }}</li>
        </ul>
      </div>
    </div>

    <AppCounter
      :count="pizza.counter.value"
      :is-disable-minus="disableMinus"
      @onCountEvt="onCountChange($event)"
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

  methods: {
    onCountChange(countEvt) {
      this.$emit("onCountChange", countEvt);
    },
  },
};
</script>
