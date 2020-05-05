const isProd = process.env.NODE_ENV === "production"
const path = require('path');

module.exports = {
  // 选项...
  configureWebpack: config => {
    if (isProd) {
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
    config.resolve.alias
        .set('CC', path.resolve(__dirname, 'src/components/common'))
        .set('Utils', path.resolve(__dirname, 'src/utils'));
        // 在html中嵌入一个 isProduction 变量, 可通过模板语法读取
    config.plugin('html').tap(args => {
      args[0].isProduction = true
      return args
    })
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
      
}