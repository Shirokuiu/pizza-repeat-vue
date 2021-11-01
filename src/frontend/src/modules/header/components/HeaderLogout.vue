<template>
  <div class="header__user">
    <a v-if="user" href="user-data.html">
      <picture>
        <source
          type="image/webp"
          srcset="
            ~@/assets/img/users/user5.webp    1x,
            ~@/assets/img/users/user5@2x.webp 2x
          "
        />
        <img
          src="~@/assets/img/users/user5.jpg"
          srcset="~@/assets/img/users/user5@2x.jpg"
          alt="Василий Ложкин"
          width="32"
          height="32"
        />
      </picture>
      <span>{{ user.name }}</span>
    </a>
    <a @click.prevent="onLogout" class="header__logout"><span>Выйти</span></a>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "HeaderLogout",

  computed: {
    ...mapState("Auth", ["user"]),
  },

  methods: {
    ...mapActions("Auth", ["logout"]),

    onLogout() {
      this.logout();
    },
  },
};
</script>

<style lang="scss">
.header__logout {
  cursor: pointer;
}
</style>
