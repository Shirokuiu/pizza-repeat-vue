<template>
  <div class="counter">
    <button
      type="button"
      class="counter__button counter__button--disabled counter__button--minus"
      @click="dec"
    >
      <span class="visually-hidden">Меньше</span>
    </button>
    <input
      type="text"
      name="counter"
      class="counter__input"
      :value="count"
      @change="onInputChange"
    />
    <button
      type="button"
      class="counter__button counter__button--plus"
      @click="inc"
    >
      <span class="visually-hidden">Больше</span>
    </button>
  </div>
</template>
<script>
import { countAction } from "../constants";

export default {
  name: "AppCounter",

  props: {
    count: {
      type: Number,
      required: true,
    },
  },

  methods: {
    inc() {
      this.$emit("onCountUpdate", {
        action: countAction.INC,
        value: null,
      });
    },

    dec() {
      this.$emit("onCountUpdate", {
        action: countAction.DEC,
        value: null,
      });
    },

    onInputChange(evt) {
      this.$emit("onCountUpdate", {
        action: countAction.INPUT_CHANGE,
        value: evt.target.value,
      });
    },
  },
};
</script>
