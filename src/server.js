import path from 'path';
import express from 'express';

const app = express();

app.set('views', path.join(__dirname, 'components'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use((req, res) => {
  res.render('Wrapper', {});
});

export default app;
