const { defineConfig } = require('@vue/cli-service')
<<<<<<< HEAD
const target = 'http://127.0.0.1:3000';
=======
>>>>>>> 2112133d1533d5d43073333b53b7d4cfb8c358c0
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  },

<<<<<<< HEAD
  devServer: {
    port: 8080,
    proxy: {
      '^/api': {
        target,
        changeOrigin: true,
      },
      '^/upload': {
        target,
        changeOrigin: true,
      },
      '^/download': {
        target,
        changeOrigin: true,
      }
    }
  }

=======
>>>>>>> 2112133d1533d5d43073333b53b7d4cfb8c358c0
})
