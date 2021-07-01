<template>
  <form action="#" method="post">
    <div class="content__wrapper">
      <h1 class="title title--big">Конструктор пиццы</h1>

      <div class="content__dough">
        <Widget title="Выберите тесто" :class-mods="['dough']">
          <label
            v-for="({ value, name, description }, index) of doughs"
            :key="index"
            class="dough__input"
            :class="`dough__input--${value}`"
          >
            <input
              type="radio"
              name="dough"
              :value="value"
              class="visually-hidden"
              :checked="index === 0"
            />
            <b>{{ name }}</b>
            <span>{{ description }}</span>
          </label>
        </Widget>
      </div>

      <div class="content__diameter">
        <Widget title="Выберите размер" :class-mods="['diameter']">
          <label
            v-for="({ value, name }, index) of sizes"
            :key="index"
            class="diameter__input"
            :class="`diameter__input--${value}`"
          >
            <input
              type="radio"
              name="diameter"
              :value="value"
              :checked="index === 1"
              class="visually-hidden"
            />
            <span>{{ name }}</span>
          </label>
        </Widget>
      </div>

      <div class="content__ingridients">
        <Widget title="Выберите ингридиенты" :class-mods="['ingridients']">
          <div class="ingridients__sauce">
            <p>Основной соус:</p>
            <RadioButton
              v-for="({ value, name }, index) of sauces"
              :key="index"
              :class-mods="['ingridients__input']"
              radio-name="sauce"
              :value="value"
              :is-checked="index === 0"
              :name="name"
            />
          </div>

          <div class="ingridients__filling">
            <p>Начинка:</p>

            <ul class="ingridients__list">
              <li
                class="ingridients__item"
                v-for="({ mod, name }, index) of ingredients"
                :key="index"
              >
                <span class="filling" :class="`filling--${mod}`">{{
                  name
                }}</span>

                <ItemCounter
                  :class-mods="['counter--orange', 'ingridients__counter']"
                />
              </li>
            </ul>
          </div>
        </Widget>
      </div>

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
          <p>Итого: 0 ₽</p>
          <button type="button" class="button button--disabled" disabled>
            Готовьте!
          </button>
        </div>
      </div>
    </div>
  </form>
</template>
<script>
import ItemCounter from "../../../common/components/ItemCounter";
import RadioButton from "../../../common/components/RadioButton";
import Widget from "../../../common/components/Widget";
import {
  normalizeDoughs,
  normalizeIngredients,
  normalizeSauces,
  normalizeSizes,
} from "../../../common";

export default {
  name: "Builder",
  components: {
    ItemCounter,
    RadioButton,
    Widget,
  },
  props: {
    pizza: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      doughs: normalizeDoughs(this.pizza.dough),
      sizes: normalizeSizes(this.pizza.sizes),
      sauces: normalizeSauces(this.pizza.sauces),
      ingredients: normalizeIngredients(this.pizza.ingredients),
    };
  },
};
</script>
