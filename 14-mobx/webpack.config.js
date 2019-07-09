const path = require("path");
var webpack = require("webpack");
module.exports = {
  entry: "./src/index",
  output: {
    filename: "main.js",
    path: path.join(__dirname, "build")
  },
  devServer: {
    hot: true,
    contentBase: "./public",
    watchContentBase: true
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
  }
};
