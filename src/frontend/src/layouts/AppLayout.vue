<template>
  <div>
    <TheHeader />

    <Index />
  </div>
</template>
<script>
import TheHeader from "../modules/header/components/TheHeader";
import Index from "../views/Index";

export default {
  name: "AppLayout",

  components: {
    TheHeader,
    Index,
  },
};
</script>
<style></style>
