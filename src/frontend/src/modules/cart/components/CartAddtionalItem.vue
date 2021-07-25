<template>
  <li class="additional-list__item sheet">
    <p class="additional-list__description">
      <img
        :src="additionalItem.image"
        width="39"
        height="60"
        :alt="additionalItem.name"
      />
      <span>{{ additionalItem.name }}</span>
    </p>

    <div class="additional-list__wrapper">
      <AppCounter
        :count="additionalItem.count"
        inc-mod="orange"
        :disable-dec="additionalItem.count === additionalItem.maxDec"
        :disable-inc="additionalItem.count === additionalItem.maxInc"
        @onCountUpdate="$emit('onCountUpdate', $event)"
        class="additional-list__counter"
      />
      <div class="additional-list__price">
        <b>{{ normalizedTotalPrice }} ₽</b>
      </div>
    </div>
  </li>
</template>

<script>
import AppCounter from "src/common/components/AppCounter";
import { numberWithSpace } from "src/common/helpers";

export default {
  name: "CartAdditionalItem",

  components: {
    AppCounter,
  },

  props: {
    additionalItem: {
      type: Object,
      required: true,
    },
  },

  computed: {
    normalizedTotalPrice() {
      return numberWithSpace(this.additionalItem.totalPrice);
    },
  },
};
</script>
