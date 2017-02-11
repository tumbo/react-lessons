import React from 'react';
import Search from 'Search';
import TodoList from 'TodoList';
import TodoAdd from 'TodoAdd';

var Main = React.createClass({
  render() {
    return (
      <div className="container">

        <h1 className="align-center">My ToDo List!</h1>
        <Search/>
        <TodoList/>
        <TodoAdd/>

        <div className="row">
          <div className="columns medium-6 large-4 small-centered">
              {this.props.children}
          </div>
        </div>

      </div>

    );
  }
});

module.exports = Main;
