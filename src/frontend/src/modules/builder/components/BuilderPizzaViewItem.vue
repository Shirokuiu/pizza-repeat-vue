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
        @onCountUpdate="onCountUpdate"
      />
    </li>
  </AppDrag>
</template>

<script>
import AppCounter from "../../../common/components/AppCounter";
import AppDrag from "../../../common/components/AppDrag";
import { countAction } from "../../../common/constants";

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
    onCountUpdate(countActionData) {
      this.$emit("onCountUpdate", countActionData);
    },
  },
};
</script>
