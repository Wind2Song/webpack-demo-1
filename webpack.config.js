const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const base = require('./webpack.config.base.js')

module.exports = {
  ...base,
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    // static: './dist',
    // static: {
    //   directory: path.join('./dist', 'public'),
    // },
    // compress: true,
    // port: 9000,
  },
  module: {
    rules: [
        {
          test: /\.css$/,
          use:[
            'style-loader',
            'css-loader'
          ],
        },
    ]
  }
};
