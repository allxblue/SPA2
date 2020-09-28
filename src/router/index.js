import Vue from "vue";
import VueRouter from "vue-router";
import { baseUrl, getValFromUrl } from "@/utils";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/pages/Home/Index.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "@/pages/Login/Index.vue")
  },
  {
    path: "/admin",
    name: "Admin",
    component: () =>
      import(/* webpackChunkName: "admin" */ "@/pages/Admin/Index.vue")
  },
  {
    path: "/layout/base2col",
    name: "base2col",
    component: () =>
      import(/* webpackChunkName: "admin" */ "@/pages/Layout/base2col.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: baseUrl,
  routes
});

export default router;
