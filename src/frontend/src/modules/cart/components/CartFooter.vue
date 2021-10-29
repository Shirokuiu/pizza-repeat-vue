<template>
  <section class="footer">
    <div class="footer__more">
      <a href="#" class="button button--border button--arrow">Хочу еще одну</a>
    </div>
    <p class="footer__text">
      Перейти к конструктору<br />чтоб собрать ещё одну пиццу
    </p>
    <div class="footer__price">
      <b>Итого: {{ totalPrice }} ₽</b>
    </div>

    <div class="footer__submit">
      <button type="submit" class="button">Оформить заказ</button>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CartFooter.vue",

  computed: {
    ...mapGetters("Cart", ["totalPrice"]),
  },
};
</script>
