import React from 'react';

var TodoAdd = React.createClass({
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Search todos" />
          <input type="button" value="Add Todo"/>
        </form>
      </div>
    );
  }
});

module.exports = TodoAdd;
