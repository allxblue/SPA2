import request from "./request";
export const BaseApiUrl = process.env.VUE_APP_BE_API_URL
  ? process.env.VUE_APP_BE_API_URL
  : "";

// 登入相關
export const userLogin = data => request.post(`${BaseApiUrl}/login`, data);
export const getUserInfo = data =>
  request.get(`${BaseApiUrl}/api/get-user-info`);
export const logout = data => request.post(`${BaseApiUrl}/logout`);
export const checkLogin = data => request.get(`${BaseApiUrl}/check-state`);

// 註冊
export const register = data => request.post(`${BaseApiUrl}/register`);

export default {
  userLogin,
  getUserInfo,
  logout,
  checkLogin,
  register
};
