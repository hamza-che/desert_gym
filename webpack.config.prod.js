const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    bundle: path.resolve(__dirname, "src/index.jsx"),
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name][contenthash].js",
    assetModuleFilename: "[name][ext]",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [ "style-loader", "css-loader", "sass-loader" ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              [ "@babel/preset-react", { runtime: "automatic" } ],
            ],
          },
        },
      },
      {
        test: /\.(jpeg|svg|png|jpg|gif)/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Gym Station",
      filename: "index.html",
      template: "src/index.html",
    }),
  ],
  resolve: {
    extensions: [ ".js", ".jsx" ],
  },
};
