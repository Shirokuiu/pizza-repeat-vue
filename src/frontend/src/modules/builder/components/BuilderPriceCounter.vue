<template>
  <AppDrop @drop="onIngredientDrop">
    <div class="content__pizza">
      <label class="input">
        <span class="visually-hidden">Название пиццы</span>
        <input
          type="text"
          name="pizza_name"
          placeholder="Введите название пиццы"
        />
      </label>

      <div class="content__constructor">
        <div class="pizza pizza--foundation--big-tomato">
          <div class="pizza__wrapper">
            <div class="pizza__filling pizza__filling--ananas"></div>
            <div class="pizza__filling pizza__filling--bacon"></div>
            <div class="pizza__filling pizza__filling--cheddar"></div>
          </div>
        </div>
      </div>

      <div class="content__result">
        <p>Итого: {{ totalPrice }} ₽</p>
        <button type="button" class="button button--disabled" disabled>
          Готовьте!
        </button>
      </div>
    </div>
  </AppDrop>
</template>
<script>
import AppDrop from "../../../common/components/AppDrop";

export default {
  name: "BuilderPriceCounter",

  components: {
    AppDrop,
  },

  props: {
    totalPrice: {
      type: Number,
      required: true,
    },
  },

  methods: {
    onIngredientDrop(ingredientData) {
      this.$emit("onIngredientDrop", ingredientData);
    },
  },
};
</script>
