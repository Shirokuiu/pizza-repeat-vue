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
        @onCountUpdate="onCountUpdate($event, idx)"
      />
    </li>
  </AppDrag>
</template>

<script>
import { mapActions } from "vuex";
import AppCounter from "src/common/components/AppCounter";
import AppDrag from "src/common/components/AppDrag";
import { countAction } from "src/common/constants";

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

  data() {
    return {
      countAction,
    };
  },

  methods: {
    ...mapActions("Builder", {
      inc: "inc",
      dec: "dec",
      inputChange: "inputChange",
    }),

    onCountUpdate(countActionData, currentIngredientIndex) {
      const { action, value } = countActionData;

      switch (action) {
        case countAction.INC:
          this.inc(currentIngredientIndex);
          break;
        case countAction.DEC:
          this.dec(currentIngredientIndex);
          break;
        case countAction.INPUT_CHANGE:
          this.inputChange({ currentIngredientIndex, value });
          break;
      }
    },
  },
};
</script>
