const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/site/',
  transpileDependencies: true,
  devServer: {
    hot: true,
    watchFiles: ['src/**/*'],
  },
})
