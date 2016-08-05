const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    client: [
      'webpack/hot/dev-server',
      'webpack-hot-middleware/client',
      './src/client.js'
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, '.tmp', 'scripts'),
    publicPath: '/scripts/'
  },
  module: {
    loaders: [
      {
        loader: 'babel',
        test: /\.jsx?$/,
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
