const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const webpackConfig = require("./webpack.config");
const entryPoint = path.join(__dirname, "src/js/index.js");


module.exports = merge(webpackConfig, {
  devtool: "eval",
  entry: [entryPoint],

  output: {
    pathinfo: true,
    publicPath: "/",
    path: "/",
    filename:  '[name].[contenthash].js'
  },

  watch: true,
  watchOptions: {
    poll: true,
    ignored: ['node_modules']
  },

  devServer: {
    host: "localhost",
    port: 8888,
    hot: true,
  },

  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]
});
