<template>
  <button
    type="button"
    class="button"
    :class="{ 'button--disabled': isDisabled }"
    :disabled="isDisabled"
  >
    {{ description }}
  </button>
</template>

<script>
export default {
  name: "AppBtn",

  props: {
    description: {
      type: String,
      default: "Кнопка",
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
