import Vue from "vue";
import VueRouter from "vue-router";
import { baseUrl, getValFromUrl } from "@/utils";
import { objToUrlQuery } from "@/utils";
import HFLayout from "@/pages/Layout/baseHF"; // 基本天地
import base2col from "@/pages/Layout/base2col"; // 基本雙欄

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Base",
    component: HFLayout,
    children: [
      // 首页
      {
        path: "",
        name: "index",
        hidden: true,
        meta: {
          title: "首頁",
          auth: true
        },
        component: () =>
          import(/* webpackChunkName: "Home" */ "@/pages/Home/Index.vue")
      },

      {
        // news
        path: "news",
        name: "index",
        hidden: true,
        meta: {
          title: "最新消息",
          auth: true
        },
        component: () =>
          import(/* webpackChunkName: "News" */ "@/pages/Home/News.vue")
      }
    ]
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
