const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: { index: path.resolve(__dirname,'../src','index.js') },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [ 'babel-loader' ]
      },
    ]
  },
  optimization: {
    splitChunks: {chunks: 'all', },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Reddit clone',
      template: path.resolve(__dirname, '../static', 'index.html'),
      favicon: path.resolve(__dirname, '../static', 'favicon.ico')
    }),
  ]
}
