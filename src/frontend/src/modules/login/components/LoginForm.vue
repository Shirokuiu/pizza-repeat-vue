<template>
  <form>
    <div class="sign-form__input">
      <AppInput
        label="E-mail"
        type="email"
        name="email"
        placeholder="example@mail.ru"
      />
    </div>

    <div class="sign-form__input">
      <AppInput
        label="Пароль"
        type="password"
        name="pass"
        placeholder="***********"
      />
    </div>
    <button type="submit" class="button">Авторизоваться</button>
  </form>
</template>

<script>
import AppInput from "@/common/components/AppInput";

export default {
  name: "LoginForm",

  components: {
    AppInput,
  },
};
</script>
