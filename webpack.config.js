const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  // entry: path.resolve(__dirname, "assets/js/index.js"), if we are going to add the name in the filename output manually
  entry: {
    bundle: path.resolve(__dirname, "src/assets/js/index.js"),
  }, // the file where the webpack will start to bundle
  output: {
    path: path.resolve(__dirname, "dist"), // the place where the bundle.js will be created
    // filename: "bundle.js", if we are going to add the name in the filename output manually
    filename: "[name].[contenthash].js", // the name of the bundle.js object ni entry // to add chasing cache we add [contentHash]
    clean: true, // to clean the dist folder before create the bundle.js
    assetModuleFilename: "[name][ext]", // to create a folder for the images
  },
  // devTool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(style|css|scss)$/, // all the files that end with .js
        use: [
          "style-loader", // 3. inject styles into DOM
          "css-loader", // 2. turns css into commonjs
          "sass-loader", // 1. turns sass into css
        ],
      },
      {
        test: /\.js$/, // all the files that end with .js
        exclude: /node_modules/, // exclude the node_modules folder
        use: {
          loader: "babel-loader", // use the babel-loader to transpile the js files
          options: {
            presets: ["@babel/preset-env"], // use the preset-env to transpile the js files
          },
        },
      },
      {
        test: /\.(jpg|png|svg|webm)$/, // all the files that end with .jpg, .png, .svg
        type: "asset/resource", // use the asset/resource to transpile the files
      },
      {
        test: /fontawesome-free\.(svg|eot|ttf|woff|woff2)$/,
        type: "asset/resource",
        generator: {
          filename: "[path][name][ext]",
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      filename: "index.html", // the name of the file that will be created
      template: "src/template.html", // the file that will be used as template
    }),
  ],
};
