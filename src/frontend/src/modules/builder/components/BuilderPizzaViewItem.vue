<template>
  <li class="ingridients__item">
    <span class="filling" :class="`filling--${ingredient.mod}`">{{
      ingredient.name
    }}</span>

    <AppCounter
      :class-mods="['counter--orange', 'ingridients__counter']"
      :max-inc="3"
      @onCountUpdate="onCountUpdate($event, ingredient.name)"
    />
  </li>
</template>

<script>
import AppCounter from "../../../common/components/AppCounter";

export default {
  name: "BuilderPizzaViewItem",

  components: {
    AppCounter,
  },

  props: {
    ingredient: {
      type: Object,
      required: true,
    },
  },

  methods: {
    onCountUpdate(count, name) {
      this.$emit("onCountUpdate", { count, name });
    },
  },
};
</script>
