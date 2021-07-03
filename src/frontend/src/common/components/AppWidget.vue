<template>
  <div class="sheet">
    <h2 class="title title--small sheet__title">{{ title }}</h2>

    <div class="sheet__content" :class="classMods">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: "AppWidget",

  props: {
    title: {
      type: String,
      default: "Заголовок",
    },

    classMods: {
      type: Array,
    },
  },
};
</script>
