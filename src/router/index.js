import Vue from "vue";
import VueRouter from "vue-router";
import { baseUrl, getValFromUrl } from "@/utils";
import { objToUrlQuery } from "@/utils";
import HFLayout from "@/pages/Layout/baseHF"; // 基本天地
import base2col from "@/pages/Layout/base2col"; // 基本雙欄
import NProgress from "nprogress";
import { getToken } from "@/utils/auth"; // get token from cookie
import store from "@/store";
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
          class: "index"
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
          class: "news",
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
  routes,
  scrollBehavior: (to, from, savedPosition) => { // 切換頁面回上
    return { x: 0, y: 0 };
  }
});

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  let siteName = process.env.VUE_APP_SITENAME;
  document.title = to.meta.title ? to.meta.title : siteName;

  const hasToken = getToken();
  if (hasToken && store.getters.needCheckLogin) {
    // 有 token vuex 尚未有紀錄
    store.dispatch("getUserInfo");
  }
  if (hasToken && to.path === "/login") {
    // 有登入去登入頁則轉走

    next({ path: "/" });
    NProgress.done();
  }

  if (to.matched.some(r => r.meta.auth)) {
    // 需要驗證的頁面
    if (hasToken) {
      // 有登入
      next();
      NProgress.done();
    } else {
      next(`/login?redirect=${to.path}`);
      NProgress.done();
    }
  } else {
    next();
    NProgress.done();
  }
});

export default router;
