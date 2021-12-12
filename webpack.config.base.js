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
    title: 'webpai',
    template: 'src/assets/index.html' // 引用这个路径的模板HTML文件 生成dist HTML文件
  }),
  ],
  module:{
    rules:{
      test: /\.scss$/i,
      use: [
        'style-loader',
        'css-loader',
        {
          test: /\.less$/,
          loader: ["style-loader", "css-loader", "less-loader"]
        },
        {
          loader: 'sass-loader',
          options: {
            implementation: require('dart-sass')
          }
        }
      ]
    }
  }
};
