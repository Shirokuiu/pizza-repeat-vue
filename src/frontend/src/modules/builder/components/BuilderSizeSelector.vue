<template>
  <div class="content__diameter">
    <AppWidget title="Выберите размер" class="diameter">
      <label
        v-for="({ value, name, isChecked }, index) of sizes"
        :key="index"
        class="diameter__input"
        :class="`diameter__input--${value.name}`"
      >
        <input
          type="radio"
          name="diameter"
          :value="value.multiplier"
          :checked="isChecked"
          @change="onSizeChange(value)"
          class="visually-hidden"
        />
        <span>{{ name }}</span>
      </label>
    </AppWidget>
  </div>
</template>
<script>
import AppWidget from "../../../common/components/AppWidget";

export default {
  name: "BuilderSizeSelector",

  components: {
    AppWidget,
  },

  props: {
    sizes: {
      type: Array,
      required: true,
    },
  },

  methods: {
    onSizeChange(currentSize) {
      this.$emit("onSizeChange", currentSize);
    },
  },
};
</script>
