const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].[contenthash].js',
    publicPath: '/',
    clean: true,
  },
  mode: 'development',
  plugins: [
    new HtmlPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|mp3|wav)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][hash][ext]'
        }
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
