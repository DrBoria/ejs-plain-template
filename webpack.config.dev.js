const webpack = require("webpack");
const merge = require("webpack-merge");
const webpackConfig = require("./webpack.config");


module.exports = merge(webpackConfig, {
  devtool: "eval",

  output: {
    pathinfo: true,
    publicPath: "/",
    filename: "bundle.js"
  },

  watch: true,
  watchOptions: {
    poll: true,
    ignored: ['node_modules']
  },

  devServer: {
    inline: true,
    watchContentBase: true,
    host: "localhost",
    port: 8888,
    hot: true,
  },

  plugins: [new webpack.HotModuleReplacementPlugin()]
});
