import request from "./request";
export const BaseApiUrl = process.env.VUE_APP_G_API
  ? process.env.VUE_APP_G_API
  : "";

export const userLogin = data => request.post(`${BaseApiUrl}/api/login`, data);
export const getUserInfo = data =>
  request.get(`${BaseApiUrl}/api/userProfile`, data);

export default {
  userLogin: userLogin,
  getUserInfo: getUserInfo
};
