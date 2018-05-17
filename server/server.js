// 视频中的版本
const Koa = require('koa');
const koaStatic = require('koa-static');
const router = require('koa-router')();
const ReactSSR = require('react-dom/server');
const fs = require('fs');
const path = require('path');
// const proxy = require('http-proxy-middleware');
const proxy = require('koa-proxies');
const app = new Koa();

const isDev = process.env.NODE_ENV === 'development';

if (!isDev) {
  const serverEntry = require('../dist/server-entry').default;
  const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf-8');
  // 处理静态文件请求(不知道这样写对不对， 待验证)
  app.use(koaStatic(path.join(__dirname, '../dist/public')));
  router.get('*', async (ctx) => {
    const appString = ReactSSR.renderToString(serverEntry);
    ctx.body = template.replace('<!-- app -->', appString);
  });
} else {
  // 开发环境
  const devStatic = require('./util/devStatic');
  // 处理静态文件
  // 使用./public下的静态文件
  app.use(proxy('/public', {
    target: 'http://0.0.0.0:8888'
  }));
  devStatic(app, router);
  app.use(router.routes());
}
app.listen(3333, () => {
  console.log('server is listening on 3333');
});
