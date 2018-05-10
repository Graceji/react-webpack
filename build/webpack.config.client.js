const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// __dirname: /Users/jina194/Desktop/react-webpack/build

const isDev = process.env.NODE_ENV === 'development';

const config = {
  mode: 'development',
  entry: {
    app: path.join(__dirname, '../client/app.js'),
  },
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, '../dist'),
    publicPath: '/public/', // 静态资源文件引用时的路径
  },
  module: {
    rules: [
      {
        test: /.jsx$/,
        loader: 'babel-loader',
      },
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: [
          path.join(__dirname, '../node_modules'),
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../client/index.html'),
    }),
  ],
};

if (isDev) {
  // Code is automatically patched, you can safely remove react-hot-loader/patch from your Webpack config.
  // config.entry = {
  //   app: [
  //     'react-hot-loader/patch',
  //     path.join(__dirname, '../client/app.js'),
  //   ],
  // };
  config.devServer = {
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
  };
  // 添加NamedModulesPlugin，以便更容易查看要修补(patch)的依赖)
  config.plugins.push(new webpack.NamedModulesPlugin());
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = config;
