<template>
  <div class="layout__address">
    <form class="address-form address-form--opened sheet">
      <div class="address-form__header">
        <b>Адрес №{{ addressNumber }}</b>
      </div>

      <div class="address-form__wrapper">
        <div class="address-form__input">
          <AppInput
            v-model="name"
            :name="form.name.name"
            :label="form.name.label"
            :placeholder="form.name.placeholder"
          />
          <span v-if="!$v.name.required && $v.name.$dirty">{{
            form.name.errorText
          }}</span>
        </div>
        <div class="address-form__input address-form__input--size--normal">
          <AppInput
            v-model="street"
            :name="form.street.name"
            :label="form.street.label"
            :placeholder="form.street.placeholder"
          />
          <span v-if="!$v.street.required && $v.street.$dirty">{{
            form.street.errorText
          }}</span>
        </div>
        <div class="address-form__input address-form__input--size--small">
          <AppInput
            v-model="building"
            :name="form.building.name"
            :label="form.building.label"
            :placeholder="form.building.placeholder"
          />
          <span v-if="!$v.building.required && $v.building.$dirty">{{
            form.building.errorText
          }}</span>
        </div>
        <div class="address-form__input address-form__input--size--small">
          <AppInput
            v-model="flat"
            :name="form.flat.name"
            :label="form.flat.label"
            :placeholder="form.flat.placeholder"
          />
        </div>
        <div class="address-form__input">
          <AppInput
            v-model="comment"
            :name="form.comment.name"
            :label="form.comment.label"
            :placeholder="form.comment.placeholder"
          />
        </div>
      </div>

      <div class="address-form__buttons">
        <slot></slot>
      </div>
    </form>
  </div>
</template>

<script>
import AppInput from "@/common/components/AppInput";

export default {
  name: "ProfileAddressForm",

  components: {
    AppInput,
  },

  props: {
    form: {
      type: Object,
      required: true,
    },

    addressNumber: {
      type: Number,
      default: 1,
    },
  },

  computed: {
    name: {
      get() {
        return this.form.name.value;
      },

      set(value) {
        this.updateValue({ key: "name", value });
      },
    },
    street: {
      get() {
        return this.form.street.value;
      },

      set(value) {
        this.updateValue({ key: "street", value });
      },
    },
    building: {
      get() {
        return this.form.building.value;
      },

      set(value) {
        this.updateValue({ key: "building", value });
      },
    },
    flat: {
      get() {
        return this.form.flat.value;
      },

      set(value) {
        this.updateValue({ key: "flat", value });
      },
    },
    comment: {
      get() {
        return this.form.comment.value;
      },

      set(value) {
        this.updateValue({ key: "comment", value });
      },
    },
  },

  created() {
    this.init(this.$v);
  },

  validations() {
    return this.form.validationRule;
  },

  methods: {
    init(validator) {
      this.$emit("init", validator);
    },

    updateValue({ key, value }) {
      this.$v[key]?.$touch();
      this.$emit("updateValue", { key, value });
    },
  },
};
</script>
