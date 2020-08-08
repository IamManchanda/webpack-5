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
    entry: {
      homePage: "./src/index.js",
      aboutPage: "./src/about.js",
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: "babel-loader",
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/,
          use: ["file-loader"],
        },
      ],
    },
    plugins: [new HtmlWebpackPlugin(htmlConfig)],
  };
};
