import request from "./request";

export const BeApiUrl = process.env.VUE_APP_BE_API_URL
  ? process.env.VUE_APP_BE_API_URL
  : "";

// API 視為已登入
export const userLogin = data => request.post(`${BeApiUrl}/userLogin`, data);

export default {
  userLogin
};
