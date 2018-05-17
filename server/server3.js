// 第三个版本
require("babel-register")({
  extensions: [".es6", ".es", ".jsx", ".js"],
});

const Koa = require('koa');
const router = require('koa-router')();
const fs = require('fs');
const path = require('path');
const proxy = require('koa-proxies');
const axios = require('axios');
const ReactSSR = require('react-dom/server');
const serverEntry = require('../client/server-entry').default;
const app = new Koa();

const getTemplate = () => {
  return new Promise((resolve, reject) => {
    axios.get('http://0.0.0.0:8888/public/index.html')
      .then(res => {
        resolve(res.data);
      })
      .catch(reject);
  })
}

// 代理转发
app.use(proxy('/public', {
  target: 'http://0.0.0.0:8888'
}));

router.get('*', async ctx => {
  const content = ReactSSR.renderToString(serverEntry);
  // 获取开发环境生成的index.html的内容
  ctx.body = await getTemplate()
    .then(template => {
      return template.replace('<!-- app -->', content);
    })
});

app.use(router.routes());

// app.use(async ctx => {
//   // 先获取开发环境生成的index.html的内容
//   // await ctx.render('index1', {
//   //   root: html,
//   // });
// });

app.listen(3333, () => {
  console.log('server is listening on 3333');
});
