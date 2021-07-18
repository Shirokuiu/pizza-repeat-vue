<template>
  <AppDrop @drop="onIngredientDrop">
    <div class="content__pizza">
      <label class="input">
        <span class="visually-hidden">Название пиццы</span>
        <AppInputText
          name="pizza_name"
          placeholder="Введите название пиццы"
          @onInput="onInputTitle"
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
        <button
          type="button"
          class="button button--disabled"
          :disabled="isDisabled"
          @click="onCLickBtn"
        >
          Готовьте!
        </button>
      </div>
    </div>
  </AppDrop>
</template>

<script>
import AppDrop from "../../../common/components/AppDrop";
import AppInputText from "../../../common/components/AppInputText";

export default {
  name: "BuilderPriceCounter",

  components: {
    AppDrop,
    AppInputText,
  },

  props: {
    totalPrice: {
      type: Number,
      required: true,
    },

    isDisabled: {
      type: Boolean,
      default: true,
    },
  },

  methods: {
    onIngredientDrop(ingredientData) {
      this.$emit("onIngredientDrop", ingredientData);
    },

    onInputTitle(value) {
      this.$emit("onInputTitle", value);
    },

    onCLickBtn() {
      this.$emit("addToCart");
    },
  },
};
</script>
