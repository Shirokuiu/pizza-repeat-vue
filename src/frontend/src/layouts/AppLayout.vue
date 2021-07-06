<template>
  <div>
    <TheHeader />

    <router-view />
  </div>
</template>
<script>
import TheHeader from "../modules/header/components/TheHeader";
export default {
  name: "AppLayout",

  components: {
    TheHeader,
  },
};
</script>
<style></style>
