import path from 'path';
import express from 'express';

const app = express();

app.set('views', path.resolve(__dirname, '../components'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

if (process.env.NODE_ENV !== 'production') {
  const hmr = require('./hmr');
  hmr.attachMiddlewares(app);
}

app.use((req, res) => {
  res.render('Wrapper', {});
});

export default app;
