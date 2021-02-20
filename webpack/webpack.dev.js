const { merge } = require("webpack-merge");

const paths = require("./paths");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "js/[name].js",
    path: paths.build,
    pathinfo: false,
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: paths.build,
    // writeToDisk: true,
  },
  // improve runtime build performance
  optimization: {
    runtimeChunk: true,
  },
});
