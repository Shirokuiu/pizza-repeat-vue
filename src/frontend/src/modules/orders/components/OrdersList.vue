<template>
  <div>
    <OrdersItem v-for="order in orders" :key="order.id" :order="order" />
  </div>
</template>

<script>
import OrdersItem from "@/modules/orders/components/OrdersItem";
import { mapState } from "vuex";

export default {
  name: "OrdersList",

  components: {
    OrdersItem,
  },

  computed: {
    ...mapState("Orders/OrdersList", ["orders"]),
  },
};
</script>
