<template>
  <div class="content__dough">
    <AppWidget title="Выберите тесто" class="dough">
      <label
        v-for="({ value, name, description, isChecked }, index) of doughs"
        :key="index"
        class="dough__input"
        :class="`dough__input--${value.name}`"
      >
        <input
          type="radio"
          name="dough"
          :value="value"
          class="visually-hidden"
          :checked="isChecked"
          @change="onDoughChange(value)"
        />
        <b>{{ name }}</b>
        <span>{{ description }}</span>
      </label>
    </AppWidget>
  </div>
</template>
<script>
import AppWidget from "../../../common/components/AppWidget";

export default {
  name: "BuilderDoughSelector",

  components: {
    AppWidget,
  },

  props: {
    doughs: {
      type: Array,
      required: true,
    },
  },

  methods: {
    onDoughChange(currentDough) {
      this.$emit("onDoughChange", currentDough);
    },
  },
};
</script>
