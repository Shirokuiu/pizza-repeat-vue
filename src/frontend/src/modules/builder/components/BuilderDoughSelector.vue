<template>
  <div class="content__dough">
    <Widget title="Выберите тесто" :class-mods="['dough']">
      <label
        v-for="({ value, name, description }, index) of doughs"
        :key="index"
        class="dough__input"
        :class="`dough__input--${value}`"
      >
        <input
          type="radio"
          name="dough"
          :value="value"
          class="visually-hidden"
          :checked="index === 0"
        />
        <b>{{ name }}</b>
        <span>{{ description }}</span>
      </label>
    </Widget>
  </div>
</template>
<script>
import pizza from "../../../static/pizza";
import Widget from "../../../common/components/Widget";
import { normalizeDoughs } from "../../../common";

export default {
  name: "BuilderDoughSelector",
  components: {
    Widget,
  },
  data() {
    return {
      doughs: normalizeDoughs(pizza.dough),
    };
  },
};
</script>
