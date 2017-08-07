const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    'babel-polyfill',
    __dirname + '/app/index.js'
  ],

  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/',
    overlay: true,
    historyApiFallback: true
  },

  output: {
    path: __dirname + '/public',
    filename: "bundle.js",
    publicPath: '/'
  },
  
  devtool: "inline-source-map",

  module: {
    rules: [
      { test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader'] },
      { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] },
      { test: /\.css$/, use: ['style-loader','css-loader'] },
      { test: /\.scss$/, use: ['style-loader','css-loader', 'sass-loader'] },
      { test: /\.json$/, use: ["json-loader"] },
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    HTMLWebpackPluginConfig
  ]
}
