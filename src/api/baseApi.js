import request from "./request";
export const BaseApiUrl = process.env.VIE_APP_G_API
  ? process.env.VIE_APP_G_API
  : "";
export const getUserInfo = (key, query) =>
  request.get(`${BaseApiUrl}/api/${key}`, query);

export default {
  getUserInfo: getUserInfo
};
