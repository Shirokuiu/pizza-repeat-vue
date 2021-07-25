<template>
  <form action="#" method="post">
    <div class="content__wrapper">
      <h1 class="title title--big">Конструктор пиццы</h1>

      <BuilderDoughSelector />

      <BuilderSizeSelector />

      <BuilderIngredientsSelector />

      <BuilderPriceCounter />
    </div>
  </form>
</template>

<script>
import { mapState, mapActions } from "vuex";
import BuilderDoughSelector from "src/modules/builder/components/BuilderDoughSelector";
import BuilderSizeSelector from "src/modules/builder/components/BuilderSizeSelector";
import BuilderIngredientsSelector from "src/modules/builder/components/BuilderIngredientsSelector";
import BuilderPriceCounter from "src/modules/builder/components/BuilderPriceCounter";

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
  },

  destroyed() {
    this.resetState();
  },

  methods: {
    ...mapActions("Builder", ["resetState"]),
  },
};
</script>
