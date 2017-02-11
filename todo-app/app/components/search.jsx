import React from 'react';

var Search = React.createClass({
  render() {
    return (
      <div className="container">
        <form>
          <input className="form-control" type="text" placeholder="Search todos" />
          <input type="checkbox" value="Show completed todos"/>
        </form>

      </div>
    );
  }
});

module.exports = Search;
