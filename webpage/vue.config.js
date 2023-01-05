module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
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
  },
  pwa: {
    themeColor: '#35d6d0',
    workboxOptions: {
      skipWaiting: true
    }
  },
}
