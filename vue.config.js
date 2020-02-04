const API_URL = 'https://api.douban.com/v2/'
module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '': {
        target: API_URL,
        ws: true,
        changeOrigin: true
      }
    }
  }
}
