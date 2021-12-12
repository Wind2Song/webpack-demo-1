const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const loader = require('sass-loader');
const base = require('./webpack.config.base.js')

module.exports = {
  ...base,
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    // static: './dist',
    // static: {
      // directory: path.join('./dist', 'public'),
    // },
    // compress: true,
    // port: 9000,
  },
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
           'style-loader', // 从 JS 中创建样式节点
            'css-loader', // 转化 CSS 为 CommonJS
           'less-loader', // 编译 Less 为 CSS          
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
          test: /\.css$/,
          use:[
            'style-loader',
            'css-loader'
          ],
        },
    ]
  }
};
