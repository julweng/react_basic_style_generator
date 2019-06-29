const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const DotenvPlugin = require("webpack-dotenv-plugin")

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
    new DotenvPlugin({
      sample: path.resolve(__dirname, ".env.default"),
      path: path.resolve(__dirname, ".env")
    }),
    new webpack.DefinePlugin({
      SERVER_URL: JSON.stringify(process.env.SERVER_URL)
    })
  ],
  resolve: {
    extensions: [".js", ".jsx"],
    modules: ["node_modules"],
    alias: {
      components: path.resolve(__dirname, "src/components/"),
      style: path.resolve(__dirname, "src/style/"),
      reducers: path.resolve(__dirname, "src/reducers"),
      actions: path.resolve(__dirname, "src/actions"),
      constant: path.resolve(__dirname, "src/constant"),
      __testing__: path.resolve(__dirname, "__testing__"),
      __mocks__: path.resolve(__dirname, "__mocks__")
    }
  }
}
