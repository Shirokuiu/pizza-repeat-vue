<template>
  <div class="content__ingridients">
    <Widget title="Выберите ингридиенты" :class-mods="['ingridients']">
      <div class="ingridients__sauce">
        <p>Основной соус:</p>
        <RadioButton
          v-for="({ value, name }, index) of sauces"
          :key="index"
          :class-mods="['ingridients__input']"
          radio-name="sauce"
          :value="value"
          :is-checked="index === 0"
          :name="name"
        />
      </div>

      <BuilderPizzaView />
    </Widget>
  </div>
</template>
<script>
import pizza from "../../../static/pizza";
import Widget from "../../../common/components/Widget";
import RadioButton from "../../../common/components/RadioButton";
import { normalizeSauces } from "../../../common";
import BuilderPizzaView from "./BuilderPizzaView";

export default {
  name: "BuilderIngredientsSelector",
  components: {
    Widget,
    RadioButton,
    BuilderPizzaView,
  },
  data() {
    return {
      sauces: normalizeSauces(pizza.sauces),
    };
  },
};
</script>
