const path = require("path");

module.exports = {
  mode: "development",
  entry: "../SRC/JS/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "../DIST/"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
