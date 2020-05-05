import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { i18n } from "@/locale";
import API from "@/api";

Vue.prototype.$api = API; // 彙整 API
Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
