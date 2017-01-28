var React = require('react');
var {Link, IndexLink} = require('react-router');
// same as...
// var Link = require('react-router').Link

var Nav = React.createClass({
  render() {
    return (
      <div>
        <ul className="nav nav-tabs">
          {/* Link generates anchor tag*/}

          <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink></li>
          <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
          <li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
        </ul>
      </div>
    );
  }
});

module.exports = Nav;
