const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      // {
      //   test: /\.(js|jsx)$/,
      //   loader: 'eslint-loader',
      //   enforce: 'pre',
      //   exclude: [
      //     path.resolve(__dirname, '../node_modules')
      //   ],
      // },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, '../client')
      },
      // {
      //   test: /.js$/,
      //   loader: 'babel-loader',
      //   include: path.join(__dirname, '../client'),
      //   exclude: [
      //     path.join(__dirname, '../node_modules'),
      //   ],
      // },
    ],
  },
};
