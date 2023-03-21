const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");

module.exports = {
  devServer: {
    port: 9000,
    hot: true,
  },
  entry: "./src/js/main.js",
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "js/bundle.js",
    assetModuleFilename: "assets/[hash][ext][query]",
  },
  target: "web",
  devtool: "source-map",
  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        loader: "img-optimize-loader",
        options: {
          compress: {
            mode: "high",
            webp: true,
            gifsicle: true,
            disableOnDevelopment: false,
          },
        },
      },
      {
        test: /\.(mp[3|4])$/i,
        loader: "file-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: "index.html",
      excludeChunks: ["server"],
    }),
  ],
};
