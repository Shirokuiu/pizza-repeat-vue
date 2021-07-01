<template>
  <div class="content__diameter">
    <Widget title="Выберите размер" :class-mods="['diameter']">
      <label
        v-for="({ value, name }, index) of sizes"
        :key="index"
        class="diameter__input"
        :class="`diameter__input--${value}`"
      >
        <input
          type="radio"
          name="diameter"
          :value="value"
          :checked="index === 1"
          class="visually-hidden"
        />
        <span>{{ name }}</span>
      </label>
    </Widget>
  </div>
</template>
<script>
import pizza from "../../../static/pizza";
import Widget from "../../../common/components/Widget";
import { normalizeSizes } from "../../../common";

export default {
  name: "BuilderSizeSelector",
  components: {
    Widget,
  },
  data() {
    return {
      sizes: normalizeSizes(pizza.sizes),
    };
  },
};
</script>
