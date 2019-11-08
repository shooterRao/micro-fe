// Temporary until we can use https://github.com/webpack/webpack-dev-server/pull/2143
module.exports = {
  css: {
    extract: false // 把 css.xxx.js 打包到 app.js 里面
  },
  devServer: {
    port: 9001,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    disableHostCheck: true
  },
  css: {
    // loaderOptions: {
    //   // 给 sass-loader 传递选项
    //   sass: {
    //     prependData: `@import "@/styles/index.scss";`
    //   }
    // }
  },
  chainWebpack: config => {
    // config.devServer.set('inline', false)
    // config.devServer.set('hot', false)

    config.optimization.delete('splitChunks');

    // 必须打包成umd或者amd，才能由system.js加载
    config.output.libraryTarget('umd');

    config.set('devtool', 'sourcemap');

    config.externals(['vue', 'vue-router', 'vuex', 'micro-store']); // 全局共用一个vue、vue-router
  }
  // filenameHashing: false,
};
