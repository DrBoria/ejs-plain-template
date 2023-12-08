const { ProvidePlugin, DefinePlugin } = require('webpack');
const path = require('path');
const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  // Fix for fixed element to be in block
  styles: {
    StyleGuide: {
      '@global body': {
        fontFamily: 'Helvetica',
      },
    },
    Playground: {
      preview: {
        position: 'relative',
        transform: 'translate3d(0, 0, 0)',
        outline: '1px solid #661',
      },
    },
  },

  moduleAliases: {
    components: path.resolve(__dirname, 'src/components'),
    rootStore: path.resolve(__dirname, 'src/rootStore'),
    styles: path.resolve(__dirname, 'src/styles'),
    public: path.resolve(__dirname, 'public'),
    widgets: path.resolve(__dirname, 'src/widgets'),
    models: path.resolve(__dirname, 'src/models'),
    api: path.resolve(__dirname, 'src/api'),
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/,
          type: 'asset/resource'
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
            },
          ],
          include: path.join(__dirname, "src/scss")
        },
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: ['@svgr/webpack', 'url-loader'],
        },
        {
          test: /\.ejs$/i,
          use: [{
            loader: 'html-loader', // loader for html files goes here
          }, {
            loader: 'ejs-plain-loader'
          }]
        }
      ],
    },
    plugins: [
      new ProvidePlugin({
        React: 'react', // automatically import react where needed
      }),
      new DefinePlugin({
        process: { env: {} },
      }),
    ],
    resolve: {
      extensions: ['.js', 'jsx', '.ts', '.tsx', '.json'],
    },
  },

  // Sections that is displayed in styleguidelist
  sections: [
    {
      name: 'Components',
      components: 'src/components/**/styleguide/*.jsx',
    },
  ],

  // Styles provider
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/scss/index.js'),
  },
};
