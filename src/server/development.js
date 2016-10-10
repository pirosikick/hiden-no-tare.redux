/* eslint-disable import/no-extraneous-dependencies */
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../../webpack.config';

export default function attachDevMiddlewares(app) {
  app.use(
    webpackDevMiddleware(webpack(webpackConfig), {
      publicPath: webpackConfig.output.publicPath,
      stats: {
        colors: true,
        chunks: false,
      },
    })
  );
}
