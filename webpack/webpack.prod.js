const { merge } = require("webpack-merge");

const paths = require("./paths");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  output: {
    filename: "js/[name].[chunkhash].min.js",
    path: paths.src,
  },
});
