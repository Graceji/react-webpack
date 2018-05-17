const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

const isDev = process.env.NODE_ENV === 'development';

const config = webpackMerge(baseConfig, {
  mode: 'development',
  entry: {
    app: path.join(__dirname, '../client/app.js'),
  },
  output: {
    filename: '[name].[hash].js', // 这里不能写成固定文件名，如serverEntry.js, 否则不能实现热加载？？
    path: path.join(__dirname, '../dist'),
    publicPath: '/public/', // 静态资源文件引用时的路径
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../views/index.html'),
      inject: true,
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    host: '0.0.0.0',
    port: '8888',
    contentBase: path.join(__dirname, '../dist'), // 告诉服务器从哪里提供内容
    hot: true, // 启动 Hot module replacement
    overlay: {
      error: true,
    },
    publicPath: '/public/',
    // historyApiFallback: true,
    historyApiFallback: {
      index: '/public/index.html',
    },
  },
});

module.exports = config;
