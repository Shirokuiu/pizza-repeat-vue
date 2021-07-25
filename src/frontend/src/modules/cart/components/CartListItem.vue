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
        <h2>{{ cartItem.name }}</h2>
        <ul>
          <li
            v-for="(description, idx) of cartItem.descriptionsFilling"
            :key="idx"
          >
            {{ description }}
          </li>
        </ul>
      </div>
    </div>

    <AppCounter
      :count="cartItem.count"
      class="cart-list__counter"
      :inc-mod="appCounterIncMod.orange"
      :disable-inc="cartItem.count === cartItem.maxInc"
      :disable-dec="cartItem.count === cartItem.maxDec"
      @onCountUpdate="$emit('onCountUpdate', $event)"
    />

    <div class="cart-list__price">
      <b>{{ normalizedTotalPrice }} ₽</b>
    </div>

    <div class="cart-list__button">
      <button type="button" class="cart-list__edit" @click="onEditClick">
        Изменить
      </button>
    </div>
  </li>
</template>

<script>
import { mapActions } from "vuex";
import { numberWithSpace } from "src/common/helpers";
import AppCounter from "src/common/components/AppCounter";
import { appCounterIncMod } from "src/common/constants";

export default {
  name: "CartListItem",

  components: {
    AppCounter,
  },

  props: {
    cartItem: {
      type: Object,
      required: true,
    },
    currentIndex: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      appCounterIncMod,
    };
  },

  computed: {
    normalizedTotalPrice() {
      return numberWithSpace(this.cartItem.totalPrice);
    },
  },

  methods: {
    ...mapActions("Cart", ["editCartItem"]),

    onEditClick() {
      this.editCartItem(this.currentIndex);
    },
  },
};
</script>
