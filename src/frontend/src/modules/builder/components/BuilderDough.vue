<template>
  <div class="content__dough">
    <AppWidget title="Выберите тесто">
      <div class="sheet__content dough">
        <label
          v-for="dough in doughs"
          class="dough__input"
          :class="`dough__input--${dough.classMod}`"
          :key="dough.id"
        >
          <input
            type="radio"
            name="dought"
            :value="dough.classMod"
            class="visually-hidden"
            :checked="dough.isChecked"
            @change="onDoughChange(dough.id)"
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
import { mapState, mapActions } from "vuex";

export default {
  name: "BuilderDough",

  components: {
    AppWidget,
  },

  computed: {
    ...mapState("Doughs", ["doughs"]),
  },

  created() {
    this.fetchDoughs();
  },

  methods: {
    ...mapActions("Doughs", ["fetchDoughs", "changeDough"]),

    onDoughChange(id) {
      this.changeDough(id);
    },
  },
};
</script>
