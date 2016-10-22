import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Story from './Story';

const App = ({ news }) => (
  <div>
    <h1>Hello, World!</h1>
    <h2>New</h2>
    <ul>
      {news.map(n => <li key={n}><Story id={n} /></li>)}
    </ul>
  </div>
);
App.propTypes = {
  news: PropTypes.arrayOf(PropTypes.number),
};

const mapStateToProps = state => ({
  news: state.app.get('newStories'),
  tops: state.app.get('topStories'),
});
const Container = connect(mapStateToProps)(App);

export default Container;
