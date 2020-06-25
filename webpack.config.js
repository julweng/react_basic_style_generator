const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const dotenv = require("dotenv").config()

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./build"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve("./index.html")
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(dotenv.parsed)
    })
  ],
  resolve: {
    extensions: [".js", ".jsx"],
    modules: ["node_modules"],
    alias: {
      components: path.resolve(__dirname, "src/components/"),
      styles: path.resolve(__dirname, "src/styles"),
      reducers: path.resolve(__dirname, "src/reducers"),
      actions: path.resolve(__dirname, "src/actions"),
      constants: path.resolve(__dirname, "src/constants"),
      __testing__: path.resolve(__dirname, "__testing__"),
      __mocks__: path.resolve(__dirname, "__mocks__")
    }
  },
  devtool: "inline-source-map"
}
