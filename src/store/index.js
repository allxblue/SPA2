import Vue from "vue";
import Vuex from "vuex";
import userInfo from "./userInfo";
import env from "./env";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {
    siteName: state => {
      return state.env.VUE_APP_SITENAME;
    },
    version: state => {
      return state.env.VUE_APP_VERSION;
    },
    needCheckLogin: state => {
      return !state.user.isRecieved;
    }
  },
  modules: {
    userInfo,
    env
  }
});
