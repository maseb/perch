const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');
const buildOut = path.join(__dirname, "build");
const jsOut = path.join(buildOut, "js");
const publicShared = path.join(__dirname, "resources", "public")

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  entry: './src/Index.bs.js',
  mode: isProd ? 'production' : 'development',
  output: {
    path: jsOut,
    publicPath: path.join("static", "js"),
    filename: 'app.js',
  },
  devServer: {
    contentBase: [publicShared],
    port: 8080,
    compress: true
  }
};
