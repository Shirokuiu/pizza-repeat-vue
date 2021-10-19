<template>
  <div class="content__diameter">
    <AppWidget title="Выберите размер">
      <div class="sheet__content diameter">
        <label
          v-for="size in sizes"
          :key="size.multiplier"
          class="diameter__input"
          :class="`diameter__input--${size.classMod}`"
        >
          <input
            type="radio"
            name="diameter"
            :value="size.classMod"
            class="visually-hidden"
            :checked="size.isChecked"
          />
          <span>{{ size.name }}</span>
        </label>
      </div>
    </AppWidget>
  </div>
</template>

<script>
import AppWidget from "@/common/components/AppWidget";

export default {
  name: "BuilderSize",

  components: {
    AppWidget,
  },

  props: {
    sizes: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
