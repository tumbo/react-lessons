var React = require('react');
var Nav = require('Nav');

var Main = React.createClass({
  render() {
    return (
      <div className="container">
        <Nav/>        
        {this.props.children}
      </div>

    );
  }
});

module.exports = Main;
