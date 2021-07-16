<template>
  <div class="ingridients__filling">
    <p>Начинка:</p>

    <ul class="ingridients__list">
      <BuilderPizzaViewItem
        v-for="(ingredient, index) of ingredients"
        :key="index"
        :ingredient="ingredient"
        :idx="index"
        @onCountUpdate="onCountUpdate($event, index)"
      >
      </BuilderPizzaViewItem>
    </ul>
  </div>
</template>
<script>
import BuilderPizzaViewItem from "./BuilderPizzaViewItem";

export default {
  name: "BuilderPizzaView",

  components: {
    BuilderPizzaViewItem,
  },

  props: {
    ingredients: {
      type: Array,
      required: true,
    },
  },

  methods: {
    onCountUpdate(actionCountData, currentIngredientIndex) {
      this.$emit("onCountUpdate", { actionCountData, currentIngredientIndex });
    },
  },
};
</script>
