<template>
  <div class="counter">
    <button
      type="button"
      class="counter__button counter__button--disabled counter__button--minus"
      @click="dec"
      :disabled="disableDec"
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
      :class="[
        'counter__button',
        'counter__button--plus',
        incMod ? `counter__button--${incMod}` : undefined,
      ]"
      @click="inc"
      :disabled="disableInc"
    >
      <span class="visually-hidden">Больше</span>
    </button>
  </div>
</template>

<script>
import { appCounterIncMod, countAction } from "src/common/constants";

const AppCounterIncMod = appCounterIncMod;

export default {
  name: "AppCounter",

  props: {
    incMod: {
      type: String,
      default: AppCounterIncMod.none,
      validator: (v) => AppCounterIncMod[v],
    },
    count: {
      type: Number,
      required: true,
    },
    disableInc: {
      type: Boolean,
      default: false,
    },
    disableDec: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      DEFAULT_INC_MODE: "none",
    };
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

      // NOTE Если этого не сделать, то vue не перерендерит this.count, когда родитель выставляет
      // то же состояние переменной, но при этом value останется новым
      this.$forceUpdate();
    },
  },
};
</script>
