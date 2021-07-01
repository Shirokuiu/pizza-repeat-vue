<template>
  <div>
    <Header />

    <main class="content">
      <Builder :pizza="pizza" />
    </main>
  </div>
</template>

<script>
import pizza from "../static/pizza";
import Header from "../modules/header/components/Header";
import Builder from "../modules/builder/components/Builder";

export default {
  name: "Index",
  components: {
    Header,
    Builder,
  },
  data() {
    return {
      pizza,
    };
  },
};
</script>

<style scoped></style>
