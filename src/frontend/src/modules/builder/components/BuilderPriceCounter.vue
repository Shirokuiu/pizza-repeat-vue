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
        <div :class="['pizza', `${currentDoughPizzaMod}`]">
          <div class="pizza__wrapper">
            <div class="pizza__filling pizza__filling--ananas"></div>
            <div class="pizza__filling pizza__filling--bacon"></div>
            <div class="pizza__filling pizza__filling--cheddar"></div>
          </div>
        </div>
      </div>

      <div class="content__result">
        <p>Итого: {{ totalPricePizza }} ₽</p>
        <button
          type="button"
          class="button button--disabled"
          :disabled="!this.isIngredientsExist || pizzaName.length === 0"
          @click="onCLickBtn"
        >
          Готовьте!
        </button>
      </div>
    </div>
  </AppDrop>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import AppDrop from "src/common/components/AppDrop";
import AppInputText from "src/common/components/AppInputText";

export default {
  name: "BuilderPriceCounter",

  components: {
    AppDrop,
    AppInputText,
  },

  computed: {
    ...mapGetters("Builder", [
      "totalPricePizza",
      "isIngredientsExist",
      "currentDoughPizzaMod",
    ]),
    ...mapState("Builder", ["pizzaName"]),
  },

  methods: {
    ...mapActions("Builder", {
      inc: "inc",
      setPizzaName: "setPizzaName",
    }),
    ...mapActions("Cart", {
      addToCart: "addToCart",
    }),

    onIngredientDrop(ingredientData) {
      const { currentIngredientIndex } = ingredientData;

      this.inc(currentIngredientIndex);
    },

    onInputTitle(value) {
      this.setPizzaName(value);
    },

    onCLickBtn() {
      this.addToCart({
        name: this.pizzaName,
        price: this.totalPricePizza,
      });
    },
  },
};
</script>
