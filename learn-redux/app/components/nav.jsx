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
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather</li>
            
          </ul>
        </div>

      </div>
    );
  }
});

module.exports = Nav;
