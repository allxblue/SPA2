const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
const path = require('path');
const PurgecssPlugin = require("purgecss-webpack-plugin");
const glob = require('glob-all');
const mocker = require('./mock');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const smp = new SpeedMeasurePlugin();
const zopfli = require('@gfx/zopfli');

module.exports = {
  configureWebpack: config => {
    if (IS_PROD) {
      config.plugins.push( // 拔掉不需要的 css
        new PurgecssPlugin({
          paths: glob.sync([path.join(__dirname, "./**/*.vue")]),
          extractors: [
            {
              extractor: class Extractor {
                static extract(content) {
                  const validSection = content.replace(
                    /<style([\s\S]*?)<\/style>+/gim,
                    ""
                  );
                  return validSection.match(/[A-Za-z0-9-_:/]+/g) || [];
                }
              },
              extensions: ["html", "vue"]
            }
          ],
          whitelist: ["html", "body"],
          whitelistPatterns: [/el-.*/, /^icon/],
          // whitelistPatternsChildren: [/^token/, /^pre/, /^code/]
        })
      );

      config.plugins.push(
        // 輸出 Gzip
        new CompressionWebpackPlugin({
          filename: "[path].gz[query]",
          algorithm: "gzip",
          test: /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i,
          threshold: 10240,
          minRatio: 0.8,
        })
        // 啟用 Zopfli 壓縮演算法
        // new CompressionWebpackPlugin({
        //   algorithm(input, compressionOptions, callback) {
        //     return zopfli.gzip(input, compressionOptions, callback);
        //   },
        //   compressionOptions: {
        //     numiterations: 15
        //   },
        //   minRatio: 0.99,
        //   test: /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i,
        // })
      );
    }else{

    }
  },
  chainWebpack: config => {
    config.module
      .rule('eslint')
      .use('eslint-loader')
      .loader('eslint-loader')
      .tap(options => {
        options.fix = true
        return options
      })

    // 指定 alias
    config.resolve.alias
      .set('CC', path.resolve(__dirname, 'src/components/common'))
      .set('Utils', path.resolve(__dirname, 'src/utils'));

    if(IS_PROD){

      config
        // 在 html 中使用 isProd 語法, 可透過樣板語法取得
        .plugin('html').tap(args => {
          args[0].isProd = IS_PROD
          return args
        })
    }

  },
  css: {
    loaderOptions: {
      css: {},
      scss: {
        prependData: ` 
          @import '@/assets/sass/includes/_variable.scss';
          @import '@/assets/sass/common/_mixin.scss';
          @import '@/assets/sass/common/_style-effects.scss';
        `
      }
    }
  },
  devServer: {
    compress: false,
    open: true,
    hot: true,
    stats: {
      colors: true,
      hash: false,
      version: false,
      timings: false,
      assets: false,
      chunks: false,
      modules: false,
      reasons: false,
      children: false,
      source: false,
      errors: false,
      errorDetails: false,
      warnings: false,
    },
    before: mocker,
  },
  productionSourceMap: false,

}