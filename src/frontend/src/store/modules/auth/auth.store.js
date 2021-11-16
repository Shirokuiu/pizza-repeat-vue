import { GET_ME, IS_AUTH, LOGOUT } from "@/store/modules/auth/mutation-types";
import { JWT } from "@/services";
import router from "@/router";

const initialState = () => ({
  isAuth: false,
  user: undefined,
});

export default {
  namespaced: true,

  state: initialState(),

  mutations: {
    // eslint-disable-next-line no-unused-vars
    [LOGOUT](state) {
      state = Object.assign(state, initialState());
      console.log("logout");
    },

    [GET_ME](state, user) {
      state.user = user;
    },

    [IS_AUTH](state, isAuth) {
      state.isAuth = isAuth;
    },
  },

  actions: {
    async login({ dispatch }, userForBack) {
      try {
        const data = await this.$api.auth.login(userForBack);

        JWT.saveToken(data.token);
        this.$api.auth.setAuthHeader();

        router.push("/");
        dispatch("getMe").then(() => {
          dispatch("setIsAuth", true);
        });
      } catch (e) {
        return Promise.reject(e);
      }
    },

    async logout({ commit }) {
      await this.$api.auth.logout();

      JWT.destroyToken();
      this.$api.auth.setAuthHeader();

      commit(LOGOUT);
    },

    async getMe({ commit, dispatch }) {
      try {
        const user = await this.$api.auth.getMe();

        commit(GET_ME, user);
        dispatch("setIsAuth", true);

        return Promise.resolve();
      } catch (e) {
        JWT.destroyToken();
        this.$api.auth.setAuthHeader();
        dispatch("logout");
      }
    },

    setIsAuth({ commit }, isAuth) {
      commit(IS_AUTH, isAuth);
    },

    checkIsAuth({ dispatch }) {
      if (JWT.getToken()) {
        this.$api.auth.setAuthHeader();
        dispatch("getMe");
      }
    },
  },
};
