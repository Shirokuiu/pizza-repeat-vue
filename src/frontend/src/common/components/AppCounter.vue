<template>
  <div class="counter" :class="classMods">
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
      @change="onInputChange($event)"
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
    classMods: {
      type: Array,
      required: false,
    },

    count: {
      type: Number,
      required: true,
    },

    // predefinedCount: {
    //   type: Number,
    //   default: 0,
    // },
    //
    // maxInc: {
    //   type: [Number, Infinity],
    //   default: Infinity,
    // },
    //
    // maxDec: {
    //   type: [Number, -Infinity],
    //   default: 0,
    // },
  },

  // data() {
  //   return {
  //     count: 0,
  //   };
  // },
  //
  // created() {
  //   this.count = this.predefinedCount;
  // },

  methods: {
    inc() {
      this.$emit("onCountUpdate", {
        action: countAction.INC,
        value: undefined,
      });
      // if (this.maxInc === Infinity || this.count < this.maxInc) {
      //   this.count++;
      //   this.onCountUpdate(this.count);
      // }
    },

    dec() {
      this.$emit("onCountUpdate", {
        action: countAction.DEC,
        value: undefined,
      });
      // if (this.maxDec === -Infinity || this.count > this.maxDec) {
      //   this.count--;
      //   this.onCountUpdate(this.count);
      // }
    },

    onInputChange(evt) {
      this.$emit("onCountUpdate", {
        action: countAction.INPUT_CHANGE,
        value: evt.target.value,
      });

      // const { target } = evt;
      // const value = parseInt(target.value, 10);
      //
      // if (isNaN(value)) {
      //   this.count = 0;
      //   this.onCountUpdate(this.count);
      //
      //   return;
      // }
      //
      // this.count = value > this.maxInc || value < this.maxDec ? 0 : value;
      //
      // this.onCountUpdate(this.count);
    },

    // onCountUpdate(count) {
    //   this.$emit("onCountUpdate", count);
    // },
  },
};
</script>
