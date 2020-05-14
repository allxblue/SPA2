const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
const plugins = [
  "@babel/syntax-dynamic-import"
];

if (IS_PROD) { // 拔 console
  plugins.push("transform-remove-console");
}
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: plugins
};
