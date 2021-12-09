const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {index:'./src/index.js'},
  devtool: 'inline-source-map',
  devServer: {
    // static: './dist',
    // static: {
    //   directory: path.join('./dist', 'public'),
    // },
    // compress: true,
    // port: 9000,
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Development',
    template: 'src/assets/index.html' // 引用这个路径的模板HTML文件 生成dist HTML文件
  })],
  module: {
    rules: [
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        },
    ]
  }
};
