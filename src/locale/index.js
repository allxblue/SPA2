import Vue from "vue";
import VueI18n from "vue-i18n";
import zh_TW from "./zh_TW";

const messages = {
  def_Lang: zh_TW,
  zh_TW: zh_TW
};

Vue.use(VueI18n);
import Cookie from "@/utils/cookie";

// 本站 || 主站 || 預設
let lang = Cookie.get("site_lang") || Cookie.get("lan") || "zh_TW";

export const i18n = new VueI18n({
  locale: lang,
  fallbackLocale: "zh_TW", // 預設沒有的語系
  messages
});

export const langListObj = {
  zh_TW: "繁體中文"
};

export const langList = Object.entries(langListObj).map(([key, value]) => ({
  key,
  value
}));
