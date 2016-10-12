import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const App = ({ news, tops }) => (
  <div>
    <h1>Hello, World!</h1>
    <h2>New</h2>
    <ul>
      {news.map(n => <li key={n}>{n}</li>)}
    </ul>
    <h2>Top</h2>
    <ul>
      {tops.map(n => <li key={n}>{n}</li>)}
    </ul>
  </div>
);
App.propTypes = {
  news: PropTypes.arrayOf(PropTypes.number),
  tops: PropTypes.arrayOf(PropTypes.number),
};

const mapStateToProps = state => ({
  news: state.story.news,
  tops: state.story.tops,
});
const Container = connect(mapStateToProps)(App);

export default Container;
