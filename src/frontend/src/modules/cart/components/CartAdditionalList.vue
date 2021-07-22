<template>
  <ul class="additional-list">
    <CartAdditionalItem
      v-for="(additional, idx) of additionalItems"
      :key="idx"
      :additional-item="additional"
    />
    <!--    <li class="additional-list__item sheet">-->
    <!--      <p class="additional-list__description">-->
    <!--        <img-->
    <!--          src="../../../assets/img/cola.svg"-->
    <!--          width="39"-->
    <!--          height="60"-->
    <!--          alt="Coca-Cola 0,5 литра"-->
    <!--        />-->
    <!--        <span>Coca-Cola 0,5 литра</span>-->
    <!--      </p>-->

    <!--      <div class="additional-list__wrapper">-->
    <!--        <div class="counter additional-list__counter">-->
    <!--          <button type="button" class="counter__button counter__button&#45;&#45;minus">-->
    <!--            <span class="visually-hidden">Меньше</span>-->
    <!--          </button>-->
    <!--          <input type="text" name="counter" class="counter__input" value="2" />-->
    <!--          <button-->
    <!--            type="button"-->
    <!--            class="-->
    <!--              counter__button counter__button&#45;&#45;plus counter__button&#45;&#45;orange-->
    <!--            "-->
    <!--          >-->
    <!--            <span class="visually-hidden">Больше</span>-->
    <!--          </button>-->
    <!--        </div>-->

    <!--        <div class="additional-list__price">-->
    <!--          <b>56 ₽</b>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </li>-->
    <!--    <li class="additional-list__item sheet">-->
    <!--      <p class="additional-list__description">-->
    <!--        <img-->
    <!--          src="../../../assets/img/sauce.svg"-->
    <!--          width="39"-->
    <!--          height="60"-->
    <!--          alt="Острый соус"-->
    <!--        />-->
    <!--        <span>Острый соус</span>-->
    <!--      </p>-->

    <!--      <div class="additional-list__wrapper">-->
    <!--        <div class="counter additional-list__counter">-->
    <!--          <button type="button" class="counter__button counter__button&#45;&#45;minus">-->
    <!--            <span class="visually-hidden">Меньше</span>-->
    <!--          </button>-->
    <!--          <input type="text" name="counter" class="counter__input" value="2" />-->
    <!--          <button-->
    <!--            type="button"-->
    <!--            class="-->
    <!--              counter__button counter__button&#45;&#45;plus counter__button&#45;&#45;orange-->
    <!--            "-->
    <!--          >-->
    <!--            <span class="visually-hidden">Больше</span>-->
    <!--          </button>-->
    <!--        </div>-->

    <!--        <div class="additional-list__price">-->
    <!--          <b>30 ₽</b>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </li>-->
    <!--    <li class="additional-list__item sheet">-->
    <!--      <p class="additional-list__description">-->
    <!--        <img-->
    <!--          src="../../../assets/img/potato.svg"-->
    <!--          width="39"-->
    <!--          height="60"-->
    <!--          alt="Картошка из печи"-->
    <!--        />-->
    <!--        <span>Картошка из печи</span>-->
    <!--      </p>-->

    <!--      <div class="additional-list__wrapper">-->
    <!--        <div class="counter additional-list__counter">-->
    <!--          <button type="button" class="counter__button counter__button&#45;&#45;minus">-->
    <!--            <span class="visually-hidden">Меньше</span>-->
    <!--          </button>-->
    <!--          <input type="text" name="counter" class="counter__input" value="2" />-->
    <!--          <button-->
    <!--            type="button"-->
    <!--            class="-->
    <!--              counter__button counter__button&#45;&#45;plus counter__button&#45;&#45;orange-->
    <!--            "-->
    <!--          >-->
    <!--            <span class="visually-hidden">Больше</span>-->
    <!--          </button>-->
    <!--        </div>-->

    <!--        <div class="additional-list__price">-->
    <!--          <b>56 ₽</b>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </li>-->
  </ul>
</template>

<script>
import { mapState } from "vuex";
import CartAdditionalItem from "src/modules/cart/components/CartAddtionalItem";

export default {
  name: "CartAdditionalList",

  components: {
    CartAdditionalItem,
  },

  computed: {
    ...mapState("Cart", ["additionalItems"]),
  },
};
</script>
