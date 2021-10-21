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
            @change="onChange(size.id)"
          />
          <span>{{ size.name }}</span>
        </label>
      </div>
    </AppWidget>
  </div>
</template>

<script>
import AppWidget from "@/common/components/AppWidget";
import { mapActions, mapState } from "vuex";

export default {
  name: "BuilderSize",

  components: {
    AppWidget,
  },

  computed: {
    ...mapState("Sizes", ["sizes"]),
  },

  created() {
    this.fetchSizes();
  },

  methods: {
    ...mapActions("Sizes", ["changeSize", "fetchSizes"]),

    onChange(id) {
      this.changeSize(id);
    },
  },
};
</script>
