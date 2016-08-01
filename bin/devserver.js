const path = require('path');
const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('../webpack.config');
const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
  hot: true,
  contentBase: path.resolve(__dirname, '../public'),
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
    chunks: false,
  },
});
server.listen(8080);
