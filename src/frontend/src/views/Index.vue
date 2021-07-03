<template>
  <div>
    <TheHeader />

    <main class="content">
      <TheBuilder />
    </main>
  </div>
</template>

<script>
import TheHeader from "../modules/header/components/TheHeader";
import TheBuilder from "../modules/builder/components/TheBuilder";

export default {
  name: "Index",
  components: {
    TheHeader,
    TheBuilder,
  },
};
</script>

<style scoped></style>
