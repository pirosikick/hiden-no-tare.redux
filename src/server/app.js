import express from 'express';
import path from 'path';
import { createEngine } from 'express-react-views';
import bodyParser from 'body-parser';
import { middleware as fetchrMiddleware } from './fetchr';

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jsx');
app.engine('jsx', createEngine());

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  require('./development').default(app);
}

app.use(express.static(path.resolve(__dirname, '../..', 'dist')));
app.use(bodyParser.json());
app.use('/api-proxy', fetchrMiddleware());
app.use((req, res) => {
  res.render('html', {
    env: process.env.NODE_ENV || 'development',
  });
});

export default app;
