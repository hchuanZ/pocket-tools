const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');
const app = express();
app.use(cors())
app.use('/api', createProxyMiddleware({
  target: 'https://pocketapi.48.cn', // HTTPS 目标服务器
  changeOrigin: true, // 对于虚拟托管的网站，修改源点是必须的
  secure: true, // 如果你的目标服务器自签名证书，可以设置为 false
  pathRewrite: {
    '^/hapi': '', // 可选，重写路径
  },
}));

app.listen(8848, () => {
  console.log('Proxy server is running on http://localhost:8848');
});
