module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/kruecklde/'
    : '/',
  productionSourceMap: false,
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    // other webpack options to merge in ...
  },
  devServer: {
    host: '0.0.0.0',
    hot: true,
    disableHostCheck: true,
  },
  pwa: {
    themeColor: '#35d6d0',
    workboxOptions: {
      skipWaiting: true
    }
  },
}