const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const { createProxyMiddleware } = require('http-proxy-middleware');

app.use('/', createProxyMiddleware({
  target: 'https://api.bilibili.com', // 目标服务器
  changeOrigin: true,             // 修改请求头中的 Origin
  pathRewrite: { '^/': '/' },     // 可选：重写路径
}));

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})
