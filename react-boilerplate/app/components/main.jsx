var React = require('react');
var Nav = require('Nav');

var Main = React.createClass({
  render() {
    return (
      <div className="container">
        <Nav/>
        <h2>React App Boilerplate</h2>
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
