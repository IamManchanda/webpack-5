const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  const htmlConfig = {
    title: "Webpack 5 App",
    filename: "index.html",
    inject: "body",
    scriptLoading: "defer",
    favicon: "favicon.ico",
    meta: {
      viewport: "width=device-width,initial-scale=1",
    },
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
