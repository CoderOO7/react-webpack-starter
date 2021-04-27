const path = require("path");

module.exports = {
  env: path.resolve(__dirname, ".env"),
  src: path.resolve(__dirname, "../src"),
  build: path.resolve(__dirname, "../dist"),
};
