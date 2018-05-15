// 首屏服务端渲染
const path = require('path');
const baseConfig = require('./webpack.config.base');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(baseConfig, {
  target: 'node', // webpack构建目标
  entry: {
    app: path.join(__dirname, '../client/server-entry.js'),
  },
  output: {
    filename: 'server-entery.js',
    path: path.join(__dirname, '../dist'),
    publicPath: '', // 静态资源文件引用时的路径
    libraryTarget: 'commonjs2', // 打包出来的js使用的模块方案
  },
  plugins: [
  ],
});
