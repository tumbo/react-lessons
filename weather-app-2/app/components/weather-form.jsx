var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit(e) {
    e.preventDefault();

    var location = this.refs.location.value;
    if(location.length >0) {
      this.refs.location.value=''; // clear input
      this.props.onSearch(location); // will be passed in by parent
    }
  },
  render() {
    return (
      <div className="row">
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="location" placeholder="Enter a city"/>
          <button className="btn btn-primary">Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
