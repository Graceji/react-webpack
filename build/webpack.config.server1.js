const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

const isDev = process.env.NODE_ENV === 'development';

const config = webpackMerge(baseConfig, {
  mode: 'development',
  entry: {
    app: path.join(__dirname, '../client/app.js'),
  },
  output: {
    filename: 'serverEntry.js',
    path: path.join(__dirname, '../dist'),
    publicPath: '/', // 静态资源文件引用时的路径
  },
  plugins: [
  ],
});

module.exports = config;
