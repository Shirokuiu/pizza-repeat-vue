<template>
  <div>
    <div class="layout__address">
      <div class="sheet address-form">
        <div class="address-form__header">
          <b>Адрес №{{ addressNumber }}. {{ copyAddress.name.value }}</b>
          <div class="address-form__edit">
            <button @click="onEditClick" type="button" class="icon">
              <span class="visually-hidden">Изменить адрес</span>
            </button>
          </div>
        </div>
        <p>
          {{ copyAddress.street.value }}, д. {{ copyAddress.building.value }},
          оф.
          {{ copyAddress.flat.value }}
        </p>
        <small>{{ copyAddress.comment.value }}</small>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { cloneDeep } from "lodash";

export default {
  name: "ProfileAddressItem",

  props: {
    address: {
      type: Object,
      required: true,
    },
    addressNumber: {
      type: Number,
      default: 1,
    },
  },

  data() {
    return {
      needClose: false,
      copyAddress: cloneDeep(this.address),
    };
  },

  methods: {
    onEditClick() {
      this.$emit("onEdit", this.address.id);
    },
  },
};
</script>
