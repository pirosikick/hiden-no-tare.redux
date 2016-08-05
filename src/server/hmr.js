import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';
import config from '../../webpack.config';

const compiler = webpack(config);
const devMiddleware = webpackDevMiddleware(compiler, {
  hot: true,
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
    chunks: false,
  },
});
const hotMiddleware = webpackHotMiddleware(compiler);

export function attachMiddlewares(app) {
  app.use(devMiddleware);
  app.use(hotMiddleware);
}
