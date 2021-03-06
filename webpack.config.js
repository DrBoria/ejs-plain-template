const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

const dirSrc = path.join(__dirname, "src");
const dirBuild = path.join(__dirname, "build");
const dirNode = path.join(__dirname, "node_modules");

module.exports = {
  resolve: {
    modules: [dirNode, dirSrc, dirBuild]
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        include: path.join(__dirname, "scr/js")
      },
      {
        test: /\.(png|jpg|jpeg|svg)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './public/imgs/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff2?|ttf|otf|eot)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './public/fonts/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader
          },
          { loader: "css-loader" },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
          }
        ],
        include: path.join(__dirname, "src/scss")
      },
      {
        test: /\.ejs$/i,
        use: [{
          loader: 'html-loader', // loader for html files goes here
        }, {
          loader: 'ejs-plain-loader'
        }]
      }
    ]
  },
  optimization: {
    runtimeChunk: true
  },
  // For every new page add info here
  plugins: [

    customHtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/views/index.ejs",
    }),
    customHtmlWebpackPlugin({
      filename: "page2.html",
      template: "./src/views/page2.ejs",
    }),

    new MiniCssExtractPlugin({
      filename: isDevelopment ? "[name].[ext]" : "[name].[contenthash].css"
    })
  ]
};

function customHtmlWebpackPlugin(specificOptions) {
  const defaults = {
    hash: !isDevelopment,
    minify: {
      removeComments: !isDevelopment,
      collapseWhitespace: !isDevelopment
    }
  };

  return new HtmlWebpackPlugin({ ...defaults, ...specificOptions });
}
