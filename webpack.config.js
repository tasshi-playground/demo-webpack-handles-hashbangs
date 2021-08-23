const path = require("path");

/** @type {import('webpack').Configuration} */
const config = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
};

module.exports = config;
