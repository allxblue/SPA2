import { userLogin, logout } from "@/api/user";
import Cookie from "@/utils/cookie";
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
    login({ commit }, payload) {
      commit("CALL_API_LOADING", true);
      userLogin({
        uuid: payload.uuid
      }).then(res => {
        if (String(res.data.error_code) === "0") {
          let userInfo = {
            // 吃網址
            uuid: payload.uuid,
            token: payload.token
          };
          commit("RECEIVE_USER_INFO", userInfo);
        } else if (String(res.data.error_code) === "110") {
          // token 錯誤
          commit("USER_TOKEN_ERROR", true);
        }
        commit("CALL_API_LOADING", false);
      });
    },
    logout({ commit }, payload) {
      commit("CALL_API_LOADING", true);
      logout({}).then(res => {});
    }
  },
  mutations: {
    [RECEIVE_USER_INFO](state, result) {
      state.profile = result;
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
