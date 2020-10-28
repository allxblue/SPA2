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

const isMobile = () =>
  window.matchMedia("(max-width: 780px)").matches ||
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
    navigator.userAgent
  );

const loadInfo = () => {
  let name = "🎲" + process.env.VUE_APP_SITENAME,
    ver = process.env.VUE_APP_VERSION || "0.0.1",
    bg = "BLUEVIOLET";

  console.log(
    "%c ".concat(name, " %c ").concat(ver, " %c "),
    "background:#35495E; padding: 2px; border-radius: 3px 0 0 3px; color: #fff;",
    "background:".concat(
      bg,
      "; padding: 2px; border-radius: 0 3px 3px 0;  color: #fff;"
    ),
    "background:transparent"
  );
};
loadInfo();
export {
  baseUrl,
  checkLoginStatus,
  withPrefix,
  getPrefix,
  getValFromUrl,
  objToUrlQuery,
  isMobile
};
