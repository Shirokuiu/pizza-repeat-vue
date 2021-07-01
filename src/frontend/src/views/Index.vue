<template>
  <div>
    <Header />

    <main class="content">
      <Builder />
    </main>
  </div>
</template>

<script>
import Header from "../modules/header/components/Header";
import Builder from "../modules/builder/components/Builder";

export default {
  name: "Index",
  components: {
    Header,
    Builder,
  },
};
</script>

<style scoped></style>
