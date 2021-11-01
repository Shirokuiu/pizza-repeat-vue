<template>
  <div class="sign-form">
    <a href="#" class="close close--white">
      <span class="visually-hidden">Закрыть форму авторизации</span>
    </a>
    <div class="sign-form__title">
      <h1 class="title title--small">Авторизуйтесь на сайте</h1>
    </div>
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from "@/modules/login/components/LoginForm";

export default {
  name: "Login",

  components: {
    LoginForm,
  },

  data() {
    return {
      email: "test",
    };
  },
};
</script>
