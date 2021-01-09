const path = require("path");
const merge = require("webpack-merge");
const webpackConfig = require("./webpack.config");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const entryPoint = path.join(__dirname, "src/js/index.js");

module.exports = merge(webpackConfig, {
  devtool: "source-map",
  entry: [entryPoint],

  output: {
    path: path.join(__dirname, "build"),
    filename: "[name].[contenthash].js"
  },

  plugins: [new CleanWebpackPlugin(), new OptimizeCssAssetsPlugin()]
});
