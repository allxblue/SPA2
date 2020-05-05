import baseApi from "./baseApi";
const BaseApiUrl = process.env.VIE_APP_G_API ? process.env.VIE_APP_G_API : "";

export default {
  ...baseApi,
  BaseApiUrl
};
