<template>
  <div class="content__ingridients">
    <AppWidget title="Выберите ингридиенты" class="ingridients">
      <div class="ingridients__sauce">
        <p>Основной соус:</p>
        <AppRadioButton
          v-for="({ value, name, isChecked }, index) of sauces"
          :key="index"
          class="ingridients__input"
          radio-name="sauce"
          :value="value"
          :is-checked="isChecked"
          :name="name"
          @onRadioChange="onSauceChange"
        />
      </div>

      <BuilderPizzaView />
    </AppWidget>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

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

  computed: {
    ...mapState("Builder", ["sauces"]),
  },

  methods: {
    ...mapActions("Builder", {
      setCurrentSauce: "setCurrentSauce",
    }),

    onSauceChange(currentSauce) {
      this.setCurrentSauce(currentSauce);
    },
  },
};
</script>
