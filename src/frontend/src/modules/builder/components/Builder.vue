<template>
  <form action="#" method="post">
    <div class="content__wrapper">
      <h1 class="title title--big">Конструктор пиццы</h1>

      <BuilderDoughSelector />

      <BuilderSizeSelector />

      <BuilderIngredientsSelector />

      <BuilderPriceCounter />
    </div>
  </form>
</template>
<script>
import BuilderDoughSelector from "./BuilderDoughSelector";
import BuilderSizeSelector from "./BuilderSizeSelector";
import BuilderIngredientsSelector from "./BuilderIngredientsSelector";
import BuilderPriceCounter from "./BuilderPriceCounter";

export default {
  name: "Builder",
  components: {
    BuilderDoughSelector,
    BuilderSizeSelector,
    BuilderIngredientsSelector,
    BuilderPriceCounter,
  },
};
</script>
