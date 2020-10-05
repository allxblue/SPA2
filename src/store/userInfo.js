import { userLogin, logout, getUserInfo, checkLogin } from "@/api/base";
import Cookie from "@/utils/cookie"; // copy from js.cookie
import { getValFromUrl } from "@/utils";

const RECEIVE_USER_INFO = "RECEIVE_USER_INFO";
const CALL_API_LOADING = "CALL_API_LOADING";
const USER_TOKEN_ERROR = "USER_TOKEN_ERROR";

export default {
  // namespaced: true,
  state: {
    profile: null,
    isRecieved: false,
    isLogin: false
  },
  actions: {
    login({ dispatch, commit }, payload) {
      return new Promise((resolve, reject) => {
        commit("CALL_API_LOADING", true);
        userLogin(payload)
          .then(res => {
            console.log(res);
            if (String(res.status) === "1") {
              // 登入去取資料
              dispatch("getUserInfo");
              resolve();
            } else {
              commit("USER_TOKEN_ERROR", false);
            }
            commit("CALL_API_LOADING", false);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    logout({ commit }, payload) {
      commit("CALL_API_LOADING", true);
      logout({}).then(res => {});
    },
    getUserInfo({ commit }, payload) {
      getUserInfo().then(res => {
        commit("RECEIVE_USER_INFO", res.data);
        commit("CALL_API_LOADING", false);
      });
    },
    checkLogin({ dispatch, commit }, payload) {
      checkLogin().then(res => {
        if (res.status) {
          dispatch("getUserInfo");
        } else {
          commit("USER_TOKEN_ERROR", "已登出");
        }
        commit("CALL_API_LOADING", false);
      });
    }
  },
  mutations: {
    [RECEIVE_USER_INFO](state, val) {
      state.profile = val;
      state.isLogin = true;
      state.isRecieved = true;
    },
    [CALL_API_LOADING](state, val) {
      state.isAjaxLoading = val;
    },
    [USER_TOKEN_ERROR](state, val) {
      state.userTokenErr = val;
      state.isRecieved = true;
      state.isLogin = false;
      state.userInfo = null;
    }
  }
};
