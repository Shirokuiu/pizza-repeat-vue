<template>
  <label class="radio" :class="classMods">
    <input
      type="radio"
      :name="radioName"
      :value="value"
      :checked="isChecked"
      @change="onRadioChange(value)"
    />
    <span>{{ name }}</span>
  </label>
</template>
<script>
export default {
  name: "AppRadioButton",

  props: {
    classMods: {
      type: Array,
      default: () => [],
    },

    radioName: {
      type: String,
      default: "AppRadioButton",
    },

    value: {
      type: [Object, String],
      required: true,
    },

    isChecked: {
      type: Boolean,
      required: true,
    },

    name: {
      type: String,
      default: "Радио кнопка",
    },
  },

  methods: {
    onRadioChange(value) {
      this.$emit("onRadioChange", value);
    },
  },
};
</script>
<style></style>
