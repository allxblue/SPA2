const svgtofont = require("svgtofont");
const path = require("path");
const pkg = require("../package.json");

svgtofont({
  src: path.resolve(process.cwd(), "src/assets/svg"), // svg icon 資料夾路徑
  dist: path.resolve(process.cwd(), "src/assets/fonts"), // 輸出到指定資料夾中
  fontName: "icon", // 設置字體名稱
  clssaNamePrefix: "spa-icon",
  css: true, // 輸出字體文件
  startNumber: 20000, // unicode 開始編號
  svgicons2svgfont: {
    fontHeight: 1000,
    normalize: true
  },
  // website = null, 沒有 demo html文件
  website: {
    title: "icon",
    logo: "",
    version: pkg.version,
    meta: {
      description: "",
      keywords: ""
    },
    description: ``,
    links: [{
        title: "Font Class",
        url: "index.html"
      },
      {
        title: "Unicode",
        url: "unicode.html"
      }
    ],
    footerInfo: ``
  }
}).then(() => {
  console.log("done!");
});