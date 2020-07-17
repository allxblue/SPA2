import request from "./request";
export const BaseApiUrl = process.env.VUE_APP_BE_API_URL
  ? process.env.VUE_APP_BE_API_URL
  : "";

export const userLogin = data => request.post(`${BaseApiUrl}/api/login`, data);
export const getUserInfo = data =>
  request.get(`${BaseApiUrl}/api/userProfile`, data);

export default {
  userLogin: userLogin,
  getUserInfo: getUserInfo
};
