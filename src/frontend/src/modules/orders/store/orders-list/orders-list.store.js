import { SET_ORDERS } from "@/modules/orders/store/orders-list/mutation-types";
import { mapOrderList } from "@/modules/orders/store/orders-list/helpers";
import { normalizeAdditionals } from "@/common/helpers";

export default {
  namespaced: true,

  state: () => ({
    orders: [],
  }),

  mutations: {
    [SET_ORDERS](state, orders) {
      state.orders = orders;
    },
  },

  actions: {
    async fetchOrders({ commit, rootState }) {
      const orders = await this.$api.orders.get();
      const addresses = await this.$api.addresses.get();
      const misc = normalizeAdditionals(await this.$api.misc.get());

      commit(SET_ORDERS, mapOrderList(orders, rootState, addresses, misc));
    },
  },
};
