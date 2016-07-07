require('babel-register')({
  ignore: /node_modules/
});

const path = require('path');
const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('../webpack.config');

const app = require('../src/server').default;
app.listen(8081);

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
  hot: true,
  proxy: {
    '*': 'http://localhost:8081'
  },
  publicPath: config.output.publicPath
});
server.listen(8080);
