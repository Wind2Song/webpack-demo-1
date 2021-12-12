const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { basename } = require('path');
// const loader = require('sass-loader');
// const loader1 = require('less-loader')
const base = require('./webpack.config.base.js');
const loader = require('sass-loader');

module.exports = {
  ...base,
  mode: 'production',
  plugins: [
    ...base.plugins,
    new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css',
    chunkFilename: '[id].[contenthash].css',
    ignoreOrder: false, // Enable to remove warnings about conflicting order
  }),],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.styl$/,
        use: ['style-loader', 'css-loader', 'stylus-loader']
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader', // 从 JS 中创建样式节点
          },
          {
            loader: 'css-loader', // 转化 CSS 为 CommonJS
          },
          {
            loader: 'less-loader', // 编译 Less 为 CSS
          },
        ],
      },
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('dart-sass')
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          'css-loader',
        ],
      }
    ]
  }
};
