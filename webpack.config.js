const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  const htmlConfig = {
    filename: "index.html",
    inject: "body",
    scriptLoading: "defer",
    favicon: "favicon.ico",
    template: "./template.html",
  };

  return {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    },
    plugins: [new HtmlWebpackPlugin(htmlConfig)],
  };
};
