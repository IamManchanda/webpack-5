const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = merge(commonConfig, {
  mode: "production",
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerPort: 5000,
      defaultSizes: "stat",
    }),
  ],
});