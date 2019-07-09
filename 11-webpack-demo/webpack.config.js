const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "build")
  },
  devServer: {
    hot: true,
    contentBase: "./public",
    watchContentBase: true
  }
};
