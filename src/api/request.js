import axios from "axios";

const tip = msg => {
  console.log(msg);
};

const errorHandle = (status, other) => {
  // status code
  switch (status) {
    case 401:
      tip("401");
      break;
    case 403:
      tip("403");
      break;
    case 404:
      tip("404");
      break;
    case 500:
      tip("500");
      break;
    default:
      console.log(other);
  }
};

var instance = axios.create({ timeout: 1000 * 12 });
// instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

instance.interceptors.request.use(
  config => {
    // const token = store.state.token;
    // token && (config.headers.Authorization = token);
    return config;
  },
  error => Promise.error(error)
);

instance.interceptors.response.use(
  res => (res.status === 200 ? Promise.resolve(res.data) : Promise.reject(res.data)),
  error => {
    const { response } = error;
    if (response) {
      errorHandle(response.status, response.data.message);
      return Promise.reject(response);
    } else {
      // 斷網處理
      if (!window.navigator.onLine) {
        return Promise.reject(error);
      }
    }
  }
);

export default instance;
