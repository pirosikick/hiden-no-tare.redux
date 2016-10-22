import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

function Story(props) {
  if (props.item) {
    return <div><pre>{JSON.stringify(props.item)}</pre></div>;
  }
  return <div>{props.id}: loading</div>;
}

Story.propTypes = {
  id: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired, // eslint-disable-line
};

export default connect((state, props) => ({
  id: props.id,
  item: state.app.getIn(['items', props.id]),
}))(Story);
