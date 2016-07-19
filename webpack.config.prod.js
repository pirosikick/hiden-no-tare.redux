const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    client: ['./src/client.js']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist', 'scripts'),
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
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.UglifyJsPlugin(),
  ]
};
