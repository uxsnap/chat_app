const path = require("path");

module.exports = {
  entry: "./index.js",
  mode: "development",
  output: {
    filename: "./main.js"
  },
  devServer: {  
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3000,
    watchContentBase: true,
    progress: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      'containers': path.resolve(__dirname, './src/containers'),
      'components': path.resolve(__dirname, './src/components'),
      'reduxMain': path.resolve(__dirname, './src/redux')
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  }
};