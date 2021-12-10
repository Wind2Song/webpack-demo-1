const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const loader = require('sass-loader');

module.exports = {
  entry: {index:'./src/index.js'},
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
    title: 'Development',
    template: 'src/assets/index.html' // 引用这个路径的模板HTML文件 生成dist HTML文件
  }),
  ],
};
