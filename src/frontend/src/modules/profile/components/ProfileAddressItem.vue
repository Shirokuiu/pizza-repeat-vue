<template>
  <div>
    <div class="layout__address">
      <div class="sheet address-form">
        <div class="address-form__header">
          <b>Адрес №1. Тест</b>
          <div class="address-form__edit">
            <button @click="onEditClick" type="button" class="icon">
              <span class="visually-hidden">Изменить адрес</span>
            </button>
          </div>
        </div>
        <p>Невский пр., д. 22, оф. 46</p>
        <small>Позвоните, пожалуйста, от проходной</small>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ProfileAddressItem",

  props: {
    address: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      needClose: false,
    };
  },

  methods: {
    onEditClick() {
      this.$emit("onEdit", { id: this.address.id, needClose: this.needClose });

      this.needClose = !this.needClose;
    },
  },
};
</script>
