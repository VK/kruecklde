module.exports = {
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
  }
}
