const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { basename } = require('path');

const base = require('./webpack.config.base.js')

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
          test: /\.css$/,
          use:[
            {
              loader:MiniCssExtractPlugin.loader,
              options:{
                publicPath:'../',
                // hmr:process.env.NODE_ENV === 'development',
              },
            },
            'css-loader'
          ],
        },
    ]
  }
};
