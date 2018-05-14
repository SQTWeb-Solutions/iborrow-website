const webpack = require('webpack')

module.exports = {
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 9000,
    https: false,
    hotOnly: false,
    overlay: true,
    useLocalIp: true,
    proxy: {
      '/api': {
        target: 'http://loaclhost:3000',
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
        Popper: ['popper.js', 'default']
      })
    ]
  }
}
