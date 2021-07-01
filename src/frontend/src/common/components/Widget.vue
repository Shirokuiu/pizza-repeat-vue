<template>
  <div class="sheet">
    <h2 class="title title--small sheet__title">{{ title }}</h2>

    <div class="sheet__content" :class="classMods">
      <slot />
      <!--      <label-->
      <!--        v-for="({ value, name, description }, index) of doughs"-->
      <!--        :key="index"-->
      <!--        class="dough__input"-->
      <!--        :class="`dough__input&#45;&#45;${value}`"-->
      <!--      >-->
      <!--        <input-->
      <!--          type="radio"-->
      <!--          name="dough"-->
      <!--          :value="value"-->
      <!--          class="visually-hidden"-->
      <!--          :checked="index === 0"-->
      <!--        />-->
      <!--        <b>{{ name }}</b>-->
      <!--        <span>{{ description }}</span>-->
      <!--      </label>-->
    </div>
  </div>
</template>
<script>
export default {
  name: "Widget",
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
