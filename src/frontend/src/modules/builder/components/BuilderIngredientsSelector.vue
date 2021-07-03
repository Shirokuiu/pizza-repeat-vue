<template>
  <div class="content__ingridients">
    <AppWidget title="Выберите ингридиенты" :class-mods="['ingridients']">
      <div class="ingridients__sauce">
        <p>Основной соус:</p>
        <AppRadioButton
          v-for="({ value, name, isChecked }, index) of sauces"
          :key="index"
          :class-mods="['ingridients__input']"
          radio-name="sauce"
          :value="value"
          :is-checked="isChecked"
          :name="name"
          @onRadioChange="onSauceChange($event)"
        />
      </div>

      <BuilderPizzaView
        :ingredients="ingredients"
        @onCountUpdate="onCountUpdate($event)"
      />
    </AppWidget>
  </div>
</template>
<script>
import AppWidget from "../../../common/components/AppWidget";
import AppRadioButton from "../../../common/components/AppRadioButton";
import BuilderPizzaView from "./BuilderPizzaView";

export default {
  name: "BuilderIngredientsSelector",

  components: {
    AppWidget,
    AppRadioButton,
    BuilderPizzaView,
  },

  props: {
    sauces: {
      type: Array,
      required: true,
    },

    ingredients: {
      type: Array,
      required: true,
    },
  },

  methods: {
    onSauceChange(currentSauce) {
      this.$emit("onSauceChange", currentSauce);
    },

    onCountUpdate(count) {
      this.$emit("onCountUpdate", count);
    },
  },
};
</script>
