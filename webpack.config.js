const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolvePath = x => path.resolve(__dirname, ...x.split(path.sep));

module.exports = {
  entry: {
    main: resolvePath('src/app.js'),
  },
  output: {
    path: resolvePath('public'),
    uniqueName: 'main',
    clean: true,
  },
  mode: 'development',
  bail: true,
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolvePath('src/index.ejs'),
    }),
  ],
  devServer: {
    static: {
      directory: resolvePath('public'),
    },
    historyApiFallback: true,
    port: 9000,
  },
};
