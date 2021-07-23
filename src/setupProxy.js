// 配置代理
const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    proxy(process.env.REACT_APP_BASE_URL, {
      target: 'http://localhost:4000',
      changeOrigin: true,
      pathRewrite: {
        ['^'+ process.env.REACT_APP_BASE_URL]: ''
      }
    })
  )
}