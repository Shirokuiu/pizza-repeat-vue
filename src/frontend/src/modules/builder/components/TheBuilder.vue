<template>
  <form action="#" method="post">
    <div class="content__wrapper">
      <h1 class="title title--big">Конструктор пиццы</h1>

      <BuilderDoughSelector />

      <BuilderSizeSelector />

      <BuilderIngredientsSelector />

      <BuilderPriceCounter @addToCart="addToCart" />
    </div>
  </form>
</template>

<script>
import BuilderDoughSelector from "./BuilderDoughSelector";
import BuilderSizeSelector from "./BuilderSizeSelector";
import BuilderIngredientsSelector from "./BuilderIngredientsSelector";
import BuilderPriceCounter from "./BuilderPriceCounter";
import { mapState } from "vuex";

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
      cartItems: [],
    };
  },

  computed: {
    ...mapState("Builder", ["currentDough", "currentSize", "currentSauce"]),

    totalPriceCart() {
      return this.cartItems.reduce((a, b) => a + (b["price"] || 0), 0);
    },
  },

  methods: {
    addToCart() {
      this.cartItems.push({
        name: this.pizzaName,
        price: this.totalPricePizza,
      });

      this.$emit("addToCart", this.totalPriceCart);
    },
  },
};
</script>
