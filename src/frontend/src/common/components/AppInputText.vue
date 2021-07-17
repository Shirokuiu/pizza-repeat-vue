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
    onInput(evt) {
      this.$emit("onInput", evt.target.value);
    },
  },
};
</script>
