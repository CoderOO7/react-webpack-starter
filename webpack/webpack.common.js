const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const paths = require("./paths");

module.exports = {
  entry: {
    main: `${paths.src}/index.jsx`,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"], // postcss loader require for tailwind, webpack will auto detect postcss.config.js,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: {
          // file types you are using in your application
          extensions: [".js", ".jsx"],
        },
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            cacheCompression: false,
          },
        },
      },
      // Images: Copy image files to build folder
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: "asset/resource" },
    ],
  },

  plugins: [
    // prevent deletion of assets define in CopyWebpackPlugin
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${paths.src}/assets`,
          to: "assets",
          noErrorOnMissing: true,
        },
      ],
    }),

    new HtmlWebpackPlugin({
      template: `${paths.src}/index.html`,
    }),
  ],

  cache: {
    type: "filesystem",
  },
};
