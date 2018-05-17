// 研究同构的第二个版本
// babel-register模块改写require命令，为它加上一个钩子。此后，每当使用require加载.js、.jsx、.es和.es6后缀名的文件，就会先用Babel进行转码
// 需要注意的是，babel-register只会对require命令加载的文件转码，而不会对当前文件转码。另外，由于它是实时转码，所以只适合在开发环境使用。
require("babel-register")({
  extensions: [".es6", ".es", ".jsx", ".js"],
});
// require('node-jsx').install({ harmony: true });
const path = require('path');
const fs = require('fs');
const Koa = require('koa');
const views = require('koa-views');
const koaStatic = require('koa-static');
const koaWebpack = require('koa-webpack'); // Development and Hot Reload Middleware for Koa2
const webpack = require('webpack');
const app = new Koa();
const ReactSSR = require('react-dom/server');
const serverEntry = require('../client/server-entry').default;
const webpackDevConfig = require('../build/webpack.config.server1');

// console.log(app.listen().address);
// dev 模式热加载
app.use(koaWebpack({
  compiler: webpack(webpackDevConfig),
  hot: {
    autoConfigure: false,
    // server: app.listen(3000), // server的方式不知道怎么配置
    port: 3000,
    log: () => {
      console.log('log....');
    }
  },
  dev: {
    // noInfo: false,
    serverSideRender: true,
    hot: true,
    logLevel: 'error',
    stats: {
      color: true,
    },
    publicPath: '/',
    // writeToDisk: true,
  },
}));

// 配置静态路径
app.use(koaStatic(path.join(__dirname, '../dist')));

// 配置模板引擎
app.use(views(path.resolve(__dirname, '../views'), {
  map: {
    html: 'ejs',
  }
}));
// app.use(async ctx => {
//   // 将组件渲染成字符串
//   const html = ReactSSR.renderToString(serverEntry);
//   ctx.body = html;
// });
app.use(async ctx => {
  // 将组件渲染成字符串
  const html = ReactSSR.renderToString(serverEntry);
  await ctx.render('index1', {
    root: html,
  });
});
app.listen(3000);
