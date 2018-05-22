const webpack = require('webpack')

module.exports = {
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 9020,
    https: false,
    hotOnly: false,
    overlay: true,
    useLocalIp: true,
    proxy: {
      '/api': {
        target: process.env.VUE_APP_PROXY_URL,
        ws: true,
        pathRewrite: {'^/api': ''},
        changeOrigin: true
      }
    },
    before: app => {
      // app is an express instance
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default'],
        masonry: 'masonry-layout',
        WOW: 'wowjs'
      })
    ]
  },
  compiler: true,
  // CSS related options
  css: {
    // extract CSS in components into a single CSS file (only in production)
    // can also be an object of options to pass to extract-text-webpack-plugin
    extract: true,
    // enable CSS source maps?
    sourceMap: true
  }

}
