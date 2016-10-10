import React, { PropTypes } from 'react';

const HTML = ({ env }) => {
  let scripts = [
    'lib/react.js',
    'lib/react-dom.js',
    'scripts/client.bundle.js',
  ];
  if (env === 'production') {
    scripts = scripts.map(src => src.replace(/\.js$/, '.min.js'));
  }

  return (
    <html lang="ja">
      <head>
        <title>Hello</title>
      </head>
      <body>
        <div id="app" />
        {scripts.map(src => <script key={src} src={src} />)}
      </body>
    </html>
  );
};

HTML.propTypes = {
  env: PropTypes.string.isRequired,
};

export default HTML;
