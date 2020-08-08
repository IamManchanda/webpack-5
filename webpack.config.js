const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  const htmlConfig = {
    filename: "index.html",
    inject: "body",
    scriptLoading: "defer",
    favicon: "favicon.ico",
    template: "./src/template.html",
  };

  return {
    entry: {
      main: "./src/index.js",
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].[hash].bundle.js",
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
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[hash].[ext]",
              },
            },
          ],
        },
      ],
    },
    plugins: [new HtmlWebpackPlugin(htmlConfig)],
  };
};
