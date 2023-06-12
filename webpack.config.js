const path = require("path");

module.exports = {
  mode: "development",
  // entry: path.resolve(__dirname, "assets/js/index.js"), if we are going to add the name in the filename output manually
  entry: {
    bundle: path.resolve(__dirname, "src/assets/js/index.js"),
  }, // the file where the webpack will start to bundle
  output: {
    path: path.resolve(__dirname, "dist"), // the place where the bundle.js will be created
    // filename: "bundle.js", if we are going to add the name in the filename output manually
    filename: '[name].js', // the name of the bundle.js object ni entry
  },
};
