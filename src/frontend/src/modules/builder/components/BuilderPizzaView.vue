<template>
  <div class="ingridients__filling">
    <p>Начинка:</p>

    <ul class="ingridients__list">
      <li
        class="ingridients__item"
        v-for="({ mod, name }, index) of ingredients"
        :key="index"
      >
        <span class="filling" :class="`filling--${mod}`">{{ name }}</span>

        <AppCounter
          :class-mods="['counter--orange', 'ingridients__counter']"
          :max-inc="3"
          @onCountUpdate="onCountUpdate($event, name)"
        />
      </li>
    </ul>
  </div>
</template>
<script>
import AppCounter from "../../../common/components/AppCounter";

export default {
  name: "BuilderPizzaView",

  components: {
    AppCounter,
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
    onCountUpdate(count, countName) {
      this.$emit("onCountUpdate", this.getTotalPrice(count, countName));
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
