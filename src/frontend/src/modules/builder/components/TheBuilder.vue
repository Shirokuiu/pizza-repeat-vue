<template>
  <form action="#" method="post">
    <div class="content__wrapper">
      <h1 class="title title--big">Конструктор пиццы</h1>

      <BuilderDough :dougs="pizza.dougs" />

      <BuilderSize :sizes="pizza.sizes"></BuilderSize>

      <BuilderIngredients
        :sauces="pizza.sauces"
        :ingredients="pizza.ingredients"
        @onCountChange="onCountChange"
      ></BuilderIngredients>

      <BuilderMakeForm
        @onDrop="
          onCountChange({
            evtType: CountEvent.DROP,
            ingredientId: $event.id,
            value: $event.counter.value,
          })
        "
      />
    </div>
  </form>
</template>

<script>
import pizza from "@/static/pizza.json";
import BuilderDough from "@/modules/builder/components/BuilderDough";
import BuilderSize from "@/modules/builder/components/BuilderSize";
import BuilderIngredients from "@/modules/builder/components/BuilderIngredients";
import BuilderMakeForm from "@/modules/builder/components/BuilderMakeForm";
import {
  normalizeDougs,
  normalizeIngredients,
  normalizeSauces,
  normalizeSizes,
} from "@/modules/builder/helpers/index";
import { CountEvent } from "@/common/constants";
import Vue from "vue";

export default {
  name: "TheBuilder",

  components: {
    BuilderDough,
    BuilderSize,
    BuilderIngredients,
    BuilderMakeForm,
  },

  data() {
    return {
      pizza: {
        dougs: normalizeDougs(pizza.dough),
        ingredients: normalizeIngredients(pizza.ingredients),
        sauces: normalizeSauces(pizza.sauces),
        sizes: normalizeSizes(pizza.sizes),
      },
      CountEvent: Object.freeze(CountEvent),
    };
  },

  methods: {
    onCountChange(ingredientData) {
      const { evtType, ingredientId, value } = ingredientData;
      const valueToInt = parseInt(value, 10);
      const currentIngredientIdx = this.pizza.ingredients.findIndex(
        ({ id }) => id === ingredientId
      );

      switch (evtType) {
        case CountEvent.INC:
          this.incDec(CountEvent.INC, currentIngredientIdx);
          break;
        case CountEvent.DEC:
          this.incDec(CountEvent.DEC, currentIngredientIdx);
          break;
        case CountEvent.CHANGE:
          this.change(currentIngredientIdx, valueToInt);
          break;
        case CountEvent.DROP:
          if (!this.validateIncDecDrop(valueToInt, currentIngredientIdx)) {
            this.incDec(CountEvent.INC, currentIngredientIdx);
          }
          break;
      }
    },

    incDec(type, currentIngredientIdx) {
      const value =
        type === CountEvent.INC
          ? ++this.pizza.ingredients[currentIngredientIdx].counter.value
          : --this.pizza.ingredients[currentIngredientIdx].counter.value;

      Vue.set(this.pizza.ingredients, currentIngredientIdx, {
        ...this.pizza.ingredients[currentIngredientIdx],
        counter: {
          ...this.pizza.ingredients[currentIngredientIdx].counter,
          value,
        },
      });
    },

    change(currentIngredientIdx, valueToInt) {
      Vue.set(this.pizza.ingredients, currentIngredientIdx, {
        ...this.pizza.ingredients[currentIngredientIdx],
        counter: {
          ...this.pizza.ingredients[currentIngredientIdx].counter,
          value: this.validateIncDec(valueToInt, currentIngredientIdx)
            ? this.pizza.ingredients[currentIngredientIdx].counter.value
            : valueToInt,
        },
      });
    },

    validateIncDec(valueToInt, currentIngredientIdx) {
      return (
        valueToInt >
          this.pizza.ingredients[currentIngredientIdx].counter.maxInc ||
        valueToInt < this.pizza.ingredients[currentIngredientIdx].counter.maxDec
      );
    },

    validateIncDecDrop(valueToInt, currentIngredientIdx) {
      return (
        valueToInt >=
        this.pizza.ingredients[currentIngredientIdx].counter.maxInc
      );
    },
  },
};
</script>
