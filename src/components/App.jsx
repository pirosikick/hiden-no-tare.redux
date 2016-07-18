import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const message = this.getMessage();
    if (message) {
      this.props.onAdd(message);
    }
  }

  getMessage() {
    return this.refs.message.value;
  }

  render() {
    const { tasks } = this.props;
    return (
      <div className="app">
        <h1>Hello! app!</h1>
        <form onSubmit={this.onSubmit}>
          <input type="text" ref="message" />
          <button>Add</button>
        </form>
        <ul>
          {tasks.map(task => <li>{task}</li>)}
        </ul>
      </div>
    );
  }
}

App.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAdd: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ tasks: state.tasks.toArray() });
const mapDispatchToProps = dispatch => ({
  onAdd: message => dispatch({ type: 'ADD_TASK', message }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
