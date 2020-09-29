const baseUrl = process.env.VUE_APP_SITE_URL;

const checkLoginStatus = () => {};
const routerCheckLoginStatus = (to, from, next) => {
  next(vm => {
    checkLoginStatus()
      .then(next)
      .catch(() => {
        next({ name: "login" });
      });
  });
};

const withPrefix = (prefix, routes) =>
  routes.map(route => {
    route.path = prefix + route.path;
    return route;
  });

const getPrefix = () => "site";
const getValFromUrl = key =>
  (location.search.substring(1) !== ""
    ? JSON.parse(
        '{"' +
          decodeURI(
            location.search
              .substring(1)
              .replace(/&/g, '","')
              .replace(/=/g, '":"')
          ) +
          '"}'
      )
    : {})[key];

const objToUrlQuery = obj =>
  Object.keys(obj)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`)
    .join("&");

export {
  baseUrl,
  checkLoginStatus,
  withPrefix,
  getPrefix,
  getValFromUrl,
  objToUrlQuery
};
