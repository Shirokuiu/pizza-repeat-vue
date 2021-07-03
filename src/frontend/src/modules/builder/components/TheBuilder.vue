<template>
  <form action="#" method="post">
    <div class="content__wrapper">
      <h1 class="title title--big">Конструктор пиццы</h1>

      <BuilderDoughSelector
        :doughs="doughs"
        @onDoughChange="updateCurrentDough($event)"
      />

      <BuilderSizeSelector
        :sizes="sizes"
        @onSizeChange="updateCurrentSize($event)"
      />

      <BuilderIngredientsSelector
        :sauces="sauces"
        :ingredients="ingredients"
        @onSauceChange="updateCurrentSauce($event)"
        @onCountUpdate="updateIngredientsPrice($event)"
      />

      <BuilderPriceCounter :total-price="totalPrice" />
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

      ingredientsPrice: 0,

      totalPrice: 0,
    };
  },

  created() {
    this.currentDough = this.getCurrentItem(this.doughs);
    this.currentSize = this.getCurrentItem(this.sizes);
    this.currentSauce = this.getCurrentItem(this.sauces);
    this.totalPrice = this.updateTotalPrice();
  },

  methods: {
    updateCurrentDough(currentDough) {
      this.currentDough = currentDough;
      this.totalPrice = this.updateTotalPrice();
    },

    updateCurrentSize(currentSize) {
      this.currentSize = currentSize;
    },

    updateCurrentSauce(currentSauce) {
      this.currentSauce = currentSauce;
      this.totalPrice = this.updateTotalPrice();
    },

    updateIngredientsPrice(totalIngredientsPrice) {
      this.ingredientsPrice = totalIngredientsPrice;
      this.totalPrice = this.updateTotalPrice();
    },

    getCurrentItem(arr) {
      return arr
        .filter(({ isChecked }) => isChecked)
        .map(({ value }) => value)[0];
    },

    updateTotalPrice() {
      return (
        this.currentDough.price +
        this.currentSauce.price +
        this.ingredientsPrice
      );
    },
  },
};
</script>
