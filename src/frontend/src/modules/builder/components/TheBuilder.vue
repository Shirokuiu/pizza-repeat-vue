<template>
  <form action="#" method="post">
    <div class="content__wrapper">
      <h1 class="title title--big">Конструктор пиццы</h1>

      <BuilderDoughSelector
        :doughs="doughs"
        @onDoughChange="updateCurrentDough"
      />

      <BuilderSizeSelector :sizes="sizes" @onSizeChange="updateCurrentSize" />

      <BuilderIngredientsSelector
        :sauces="sauces"
        :ingredients="ingredients"
        @onSauceChange="updateCurrentSauce"
        @onCountUpdate="updateIngredientsPrice"
      />

      <BuilderPriceCounter
        :total-price="totalPrice"
        @onIngredientDrop="updateIngredientsPrice"
      />
    </div>
  </form>
</template>
<script>
import pizza from "../../../static/pizza";
import BuilderDoughSelector from "./BuilderDoughSelector";
import BuilderSizeSelector from "./BuilderSizeSelector";
import BuilderIngredientsSelector from "./BuilderIngredientsSelector";
import BuilderPriceCounter from "./BuilderPriceCounter";
import {
  normalizeDoughs,
  normalizeIngredients,
  normalizeSauces,
  normalizeSizes,
} from "../../../common";
import { countAction } from "../../../common/constants";

export default {
  name: "TheBuilder",

  components: {
    BuilderDoughSelector,
    BuilderSizeSelector,
    BuilderIngredientsSelector,
    BuilderPriceCounter,
  },

  data() {
    return {
      doughs: normalizeDoughs(pizza.dough),

      sizes: normalizeSizes(pizza.sizes),

      sauces: normalizeSauces(pizza.sauces),

      ingredients: normalizeIngredients(pizza.ingredients),

      currentDough: {
        price: 0,
        image: "",
        name: "",
      },

      currentSize: {
        multiplier: 0,
        image: "",
        name: "",
      },

      currentSauce: {
        price: 0,
        name: "",
      },
    };
  },

  computed: {
    totalPrice() {
      return (
        this.currentDough.price +
        this.currentSauce.price +
        this.ingredients.reduce((a, b) => a + (b["totalPrice"] || 0), 0)
      );
    },
  },

  created() {
    this.currentDough = this.getCurrentItem(this.doughs);
    this.currentSize = this.getCurrentItem(this.sizes);
    this.currentSauce = this.getCurrentItem(this.sauces);
  },

  methods: {
    updateCurrentDough(currentDough) {
      this.currentDough = currentDough;
    },

    updateCurrentSize(currentSize) {
      this.currentSize = currentSize;
    },

    updateCurrentSauce(currentSauce) {
      this.currentSauce = currentSauce;
    },

    updateIngredientsPrice(ingredientData) {
      const { currentIngredientIndex, actionCountData } = ingredientData;

      switch (actionCountData.action) {
        case countAction.INC:
          this.ingredientInc(currentIngredientIndex);
          break;
        case countAction.DEC:
          this.ingredientDec(currentIngredientIndex);
          break;
        case countAction.INPUT_CHANGE:
          this.ingredientInputChange(currentIngredientIndex, actionCountData);
          break;
        case countAction.DROP:
          this.ingredientInc(currentIngredientIndex);
          break;
      }
    },

    getCurrentItem(arr) {
      return arr
        .filter(({ isChecked }) => isChecked)
        .map(({ value }) => value)[0];
    },

    ingredientInc(currentIngredientIndex) {
      if (this.canIncOrDec(countAction.INC, currentIngredientIndex)) {
        this.$set(this.ingredients, currentIngredientIndex, {
          ...this.ingredients[currentIngredientIndex],
          count: ++this.ingredients[currentIngredientIndex].count,
          totalPrice:
            this.ingredients[currentIngredientIndex].count *
            this.ingredients[currentIngredientIndex].price,
        });
      }
    },

    ingredientDec(currentIngredientIndex) {
      if (this.canIncOrDec(countAction.DEC, currentIngredientIndex)) {
        this.$set(this.ingredients, currentIngredientIndex, {
          ...this.ingredients[currentIngredientIndex],
          count: --this.ingredients[currentIngredientIndex].count,
          totalPrice:
            this.ingredients[currentIngredientIndex].count *
            this.ingredients[currentIngredientIndex].price,
        });
      }
    },

    ingredientInputChange(currentIngredientIndex, actionCountData) {
      const value = parseInt(actionCountData.value, 10);

      if (isNaN(value)) {
        this.$set(this.ingredients, currentIngredientIndex, {
          ...this.ingredients[currentIngredientIndex],
          count: 0,
          totalPrice: 0,
        });

        return;
      }

      this.$set(this.ingredients, currentIngredientIndex, {
        ...this.ingredients[currentIngredientIndex],
        count:
          value > this.ingredients[currentIngredientIndex].maxInc ||
          value < this.ingredients[currentIngredientIndex].maxDec
            ? this.ingredients[currentIngredientIndex].count
            : value,
        totalPrice:
          value > this.ingredients[currentIngredientIndex].maxInc ||
          value < this.ingredients[currentIngredientIndex].maxDec
            ? this.ingredients[currentIngredientIndex].price *
              this.ingredients[currentIngredientIndex].count
            : this.ingredients[currentIngredientIndex].price * value,
      });
    },

    canIncOrDec(action, currentIngredientIndex) {
      switch (action) {
        case countAction.INC:
          return (
            this.ingredients[currentIngredientIndex].count <
            this.ingredients[currentIngredientIndex].maxInc
          );
        case countAction.DEC:
          return (
            this.ingredients[currentIngredientIndex].count >
            this.ingredients[currentIngredientIndex].maxDec
          );
      }
    },
  },
};
</script>
