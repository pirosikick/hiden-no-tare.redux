import React, {Component} from 'react';
import {connect} from 'react-redux';

export class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.onSubmit = this.onSubmit.bind(this);
  }

  getMessage() {
    return this.refs.message.value;
  }

  onSubmit(e) {
    e.preventDefault();

    const message = this.getMessage();
    if (message) {
      this.props.onAdd(message);
    }
  }

  render() {
    const {tasks, onAdd} = this.props;
    return (
      <div className="app">
        <h1>Hello! app!</h1>
        <form onSubmit={this.onSubmit}>
          <input type="text" ref="message"/>
          <button>Add</button>
        </form>
        <ul>
          {tasks.map(task => <li>{task}</li>)}
          </ul>
        </div>
    );
  }
}

const mapStateToProps = state => ({ tasks: state.tasks.toArray() });
const mapDispatchToProps = dispatch => ({
  onAdd: message => dispatch({ type: 'ADD_TASK', message })
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
