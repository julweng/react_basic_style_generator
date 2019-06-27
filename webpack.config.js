const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const DotenvPlugin = require('webpack-dotenv-plugin')

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
    })
  ],
  resolve: {
    extensions: [".js", ".jsx"],
    modules: ["node_modules"],
    alias: {
      components: path.resolve(__dirname, "src/components/"),
      style: path.resolve(__dirname, "src/style/"),
      reducers: path.resolve(__dirname, "src/reducers"),
      __testing__: path.resolve(__dirname, "__testing__")
    }
  }
}
