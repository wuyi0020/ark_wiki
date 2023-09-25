const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV ==='production'
  ? '/ark_wiki/'
  : '/',
  transpileDependencies: true,
  lintOnSave: false
})
