<template>
  <AppDrop @drop="drop($event)">
    <div class="content__pizza">
      <label class="input">
        <span class="visually-hidden">Название пиццы</span>
        <input
          type="text"
          name="pizza_name"
          placeholder="Введите название пиццы"
        />
      </label>

      <div class="content__constructor">
        <div class="pizza pizza--foundation--big-tomato">
          <div class="pizza__wrapper">
            <div class="pizza__filling pizza__filling--ananas"></div>
            <div class="pizza__filling pizza__filling--bacon"></div>
            <div class="pizza__filling pizza__filling--cheddar"></div>
          </div>
        </div>
      </div>

      <div class="content__result">
        <p>Итого: {{ totalPrice }} ₽</p>
        <AppBtn description="Готовьте!" is-disabled></AppBtn>
      </div>
    </div>
  </AppDrop>
</template>

<script>
import AppBtn from "@/common/components/AppBtn";
import AppDrop from "@/common/components/AppDrop";
import { mapGetters, mapActions } from "vuex";
import { CountEvent } from "@/common/constants";

export default {
  name: "BuilderMakeForm",

  components: {
    AppBtn,
    AppDrop,
  },

  computed: {
    ...mapGetters("Builder", ["totalPrice"]),
  },

  methods: {
    ...mapActions("Ingredients", ["countChange"]),

    drop(ingredient) {
      const dropData = {
        evtData: {
          evtType: CountEvent.DROP,
          value: ingredient.counter.value,
        },
        ingredientId: ingredient.id,
      };

      this.countChange(dropData);
    },
  },
};
</script>
