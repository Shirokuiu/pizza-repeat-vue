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

        <ItemCounter
          :class-mods="['counter--orange', 'ingridients__counter']"
        />
      </li>
    </ul>
  </div>
</template>
<script>
import pizza from "../../../static/pizza";
import ItemCounter from "../../../common/components/ItemCounter";
import { normalizeIngredients } from "../../../common";

export default {
  name: "BuilderPizzaView",
  components: {
    ItemCounter,
  },
  data() {
    return {
      ingredients: normalizeIngredients(pizza.ingredients),
    };
  },
};
</script>
