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
    component: _import(/* webpackChunkName: "about" */ "Home")
  },
  {
    path: "/about",
    name: "About",
    component: _import(/* webpackChunkName: "about" */ "About")
  },
  {
    path: "/admin",
    name: "Admin",
    component: _import(/* webpackChunkName: "admin" */ "Admin")
  }
];

const router = new VueRouter({
  mode: "history",
  base: baseUrl,
  routes
});

export default router;
