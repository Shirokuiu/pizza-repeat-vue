<template>
  <div class="ingridients__filling">
    <p>Начинка:</p>

    <ul class="ingridients__list">
      <BuilderPizzaViewItem
        v-for="(ingredient, index) of ingredients"
        :key="index"
        :ingredient="ingredient"
        @onCountUpdate="onCountUpdate($event)"
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

  data() {
    return {
      counters: [],
    };
  },

  created() {
    this.counters = this.ingredients.map(({ name, price }) => ({
      price,
      name,
      count: 0,
      totalPrice: 0,
    }));
  },

  methods: {
    onCountUpdate({ count, name }) {
      this.$emit("onCountUpdate", this.getTotalPrice(count, name));
    },

    getTotalPrice(count, countName) {
      const currentCountIndex = this.counters.findIndex(
        ({ name }) => name === countName
      );

      this.counters[currentCountIndex] = {
        ...this.counters[currentCountIndex],
        count: count,
        totalPrice: count * this.counters[currentCountIndex].price,
      };

      return this.counters.reduce((a, b) => a + (b["totalPrice"] || 0), 0);
    },
  },
};
</script>
