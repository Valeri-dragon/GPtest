const path = require("path");
const miniCss = require("mini-css-extract-plugin");
module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: "./index.js",
  output: {
    filename: "js/main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [
          miniCss.loader,
          "css-loader",
          "sass-loader",
                 ],
      },
    ],
  },
  plugins: [
    new miniCss({
      filename: "css/style.css",
    }),
  ],

  devServer: {
    hot: true,
    static: {
      directory: "./dist",
      watch: true,
    },
  },
};
