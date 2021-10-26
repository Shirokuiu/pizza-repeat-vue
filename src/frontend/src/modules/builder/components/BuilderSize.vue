<template>
  <AppSizeSelector
    title="Выберите размер"
    :sizes="sizes"
    @onSizeChange="onSizeChange"
  />
</template>

<script>
import AppSizeSelector from "@/common/components/AppSizeSelector";
import { mapActions, mapState } from "vuex";

export default {
  name: "BuilderSize",

  components: {
    AppSizeSelector,
  },

  computed: {
    ...mapState("Builder/BuilderSize", ["sizes"]),
  },

  created() {
    this.fetchSizes();
  },

  methods: {
    ...mapActions("Builder/BuilderSize", ["fetchSizes", "changeSize"]),

    onSizeChange(id) {
      this.changeSize(id);
    },
  },
};
</script>
