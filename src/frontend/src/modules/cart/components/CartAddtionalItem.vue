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
        class="additional-list__counter"
      />
      <div class="additional-list__price">
        <b>56 ₽</b>
      </div>
    </div>
  </li>
</template>

<script>
import AppCounter from "src/common/components/AppCounter";

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
};
</script>
