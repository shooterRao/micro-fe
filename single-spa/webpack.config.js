const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash:8].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/' // 必须设绝对路径，不然 http://localhost:9000/vue/about 路由下刷新找不到 main.js
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      { parser: { system: false } },
      {
        test: /\.jsx?$/i,
        use: [{
          loader: 'babel-loader'
        }],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html')
    })
  ],
  devServer: {
    open: true,
    port: 9000,
    disableHostCheck: true,
    historyApiFallback: true // 需要开启，刷新重定向
  }
}
