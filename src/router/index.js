import Vue from "vue";
import VueRouter from "vue-router";
import { baseUrl, getValFromUrl } from "@/utils";
import load from "./load";

// lazyload 在 dev 運算會拖速，所以只在 prod 環境使用
const _import = load;

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: _import(/* webpackChunkName: "about" */ "pages/Home/Index")
  },
  {
    path: "/login",
    name: "Login",
    component: _import(/* webpackChunkName: "about" */ "pages/Login/Index")
  },
  {
    path: "/admin",
    name: "Admin",
    component: _import(/* webpackChunkName: "admin" */ "pages/Admin/Index")
  }
];

const router = new VueRouter({
  mode: "history",
  base: baseUrl,
  routes
});

export default router;
