const { merge } = require("webpack-merge");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const paths = require("./paths");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  output: {
    filename: "js/[name].[chunkhash].min.js",
    path: paths.build,
  },
  optimization: {
    minimize: true,
    minimizer: [
      `...`, // syntax to extend existing minimizers (i.e. `terser-webpack-plugin`)
      new CssMinimizerPlugin(),
    ],
    // Once your build outputs multiple chunks, this option will ensure they share the webpack runtime
    // instead of having their own. This also helps with long-term caching, since the chunks will only
    // change when actual code changes, not the webpack runtime.
    runtimeChunk: {
      name: "runtime",
    },
  },
});
