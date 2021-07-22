<template>
  <AppDrag
    :transfer-data="{
      currentIngredientIndex: idx,
      actionCountData: {
        action: countAction.DROP,
        value: null,
      },
    }"
  >
    <li class="ingridients__item">
      <span class="filling" :class="`filling--${ingredient.mod}`">{{
        ingredient.name
      }}</span>

      <AppCounter
        class="counter--orange ingridients__counter"
        :count="ingredient.count"
        @onCountUpdate="onCountUpdate($event, idx, 'ingredients', countAction)"
        :disable-inc="ingredient.count === ingredient.maxInc"
        :disable-dec="ingredient.count === ingredient.maxDec"
      />
    </li>
  </AppDrag>
</template>

<script>
import { mapActions } from "vuex";
import { onCountUpdate } from "src/common/helpers";
import AppCounter from "src/common/components/AppCounter";
import AppDrag from "src/common/components/AppDrag";

export default {
  name: "BuilderPizzaViewItem",

  components: {
    AppCounter,
    AppDrag,
  },

  props: {
    ingredient: {
      type: Object,
      required: true,
    },
    idx: {
      type: Number,
      required: true,
    },
  },

  methods: {
    ...mapActions("Builder", {
      inc: "inc",
      dec: "dec",
      countAction: "countAction",
      inputChange: "inputChange",
    }),

    onCountUpdate(countActionData, currentIngredientIndex, entity, action) {
      onCountUpdate(countActionData, currentIngredientIndex, entity, action);
    },
  },
};
</script>
