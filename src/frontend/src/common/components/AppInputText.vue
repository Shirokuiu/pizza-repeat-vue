<template>
  <input
    type="text"
    :name="name"
    :placeholder="placeholder"
    :value="value"
    @input="onInput"
  />
</template>

<script>
import { debounce } from "lodash";

const DEFAULT_DEBOUNCE = 300;

export default {
  name: "AppInputText",

  props: {
    value: {
      type: String,
      default: "",
    },

    name: {
      type: String,
      default: "name",
    },

    placeholder: {
      type: String,
      default: "Ввежите текст",
    },
  },

  methods: {
    onInput: debounce(function (evt) {
      this.$emit("onInput", evt.target.value);
    }, DEFAULT_DEBOUNCE),
  },
};
</script>
