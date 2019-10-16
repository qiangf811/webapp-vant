const path = require('path')

const resolve = dir => {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  publicPath: './',
  // productionSourceMap: true,
  configureWebpack: {
    devServer: {
      disableHostCheck: true
      // port: process.env.VUE_APP_PORT,
      // proxy: {
      //   [process.env.VUE_APP_BASE_API_URL]: {
      //     target: process.env.VUE_APP_PROXY_TARGET,
      //     changeOrigin: true
      //   },
      //   '/pic': {
      //     target: process.env.VUE_APP_PROXY_TARGET
      //   }
      // }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('utils', resolve('src/utils'))
      .set('components', resolve('src/components'))
      .set('api', resolve('src/api'))
      .set('assets', resolve('src/assets'))
  }
}
