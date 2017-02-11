import React from 'react';
import TodoActive from 'TodoActive';

var TodoList = React.createClass({
  render() {
    return (
      <div>
        <TodoActive/>
        <ul>
          <li>Pick up meds</li>
          <li>Clean apartment</li>
        </ul>
      </div>
    );
  }
});

module.exports = TodoList;
