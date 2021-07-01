<template>
  <label class="radio" :class="classMods">
    <input type="radio" :name="radioName" :value="value" :checked="isChecked" />
    <span>{{ name }}</span>
  </label>
</template>
<script>
export default {
  name: "RadioButton",
  props: {
    classMods: {
      type: Array,
    },
    radioName: {
      type: String,
      default: "radioButton",
    },
    value: {
      type: String,
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
};
</script>
<style></style>
