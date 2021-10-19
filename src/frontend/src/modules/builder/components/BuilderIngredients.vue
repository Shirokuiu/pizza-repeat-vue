<template>
  <div class="content__ingridients">
    <AppWidget title="Выберите ингридиенты">
      <div class="sheet__content ingridients">
        <div class="ingridients__sauce">
          <p>Основной соус:</p>

          <label
            v-for="sauce in sauces"
            :key="sauce.value"
            class="radio ingridients__input"
          >
            <input
              type="radio"
              name="sauce"
              :value="sauce.value"
              :checked="sauce.isChecked"
            />
            <span>{{ sauce.name }}</span>
          </label>
        </div>

        <div class="ingridients__filling">
          <p>Начинка:</p>

          <ul class="ingridients__list">
            <IngredientItem
              v-for="ingredient in ingredients"
              :key="ingredient.id"
              :ingredient="ingredient"
              @onCountChange="onCountChange($event, ingredient.id)"
            />
          </ul>
        </div>
      </div>
    </AppWidget>
  </div>
</template>

<script>
import AppWidget from "@/common/components/AppWidget";
import IngredientItem from "@/modules/builder/components/IngredientItem";

export default {
  name: "BuilderIngredients",

  components: {
    AppWidget,
    IngredientItem,
  },

  props: {
    sauces: {
      type: Array,
      default: () => [],
    },
    ingredients: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    onCountChange({ evtType, value }, ingredientId) {
      this.$emit("onCountChange", {
        evtType,
        ingredientId,
        value,
      });
    },
  },
};
</script>
