<template>
  <AppDoughSelector
    :doughs="doughs"
    title="Выберите тесто"
    @onDoughChange="onDoughChange"
  />
</template>

<script>
import AppDoughSelector from "@/common/components/AppDoughSelector";
import { mapState, mapActions } from "vuex";

export default {
  name: "BuilderDough",

  components: {
    AppDoughSelector,
  },

  computed: {
    ...mapState("Builder/BuilderDough", ["doughs"]),
  },

  created() {
    this.fetchDoughs();
  },

  methods: {
    ...mapActions("Builder/BuilderDough", ["fetchDoughs", "changeDough"]),

    onDoughChange(id) {
      this.changeDough(id);
    },
  },
};
</script>
