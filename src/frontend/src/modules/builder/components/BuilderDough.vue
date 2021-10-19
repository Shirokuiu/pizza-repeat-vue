<template>
  <div class="content__dough">
    <AppWidget title="Выберите тесто">
      <div class="sheet__content dough">
        <label
          v-for="dough in dougs"
          class="dough__input"
          :class="`dough__input--${dough.classMod}`"
          :key="dough.price"
        >
          <input
            type="radio"
            name="dought"
            :value="dough.classMod"
            class="visually-hidden"
            :checked="dough.isChecked"
          />
          <b>{{ dough.name }}</b>
          <span>{{ dough.description }}</span>
        </label>
      </div>
    </AppWidget>
  </div>
</template>

<script>
import AppWidget from "@/common/components/AppWidget";

export default {
  name: "BuilderDough",

  components: {
    AppWidget,
  },

  props: {
    dougs: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
