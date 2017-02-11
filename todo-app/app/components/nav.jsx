var React = require('react');
var {Link, IndexLink} = require('react-router');
// same as...
// var Link = require('react-router').Link

var Nav = React.createClass({
  onSearch(e) {
    e.preventDefault();
  },
  render() {
    return (
      <div>
        <div>
          <ul>
            <li>Nav Menu</li>
          </ul>
        </div>

      </div>
    );
  }
});

module.exports = Nav;
