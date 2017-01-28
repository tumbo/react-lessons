var React = require('react');
// temp and location are passed in
var WeatherMessage = React.createClass({
  render() {
    var {temp, location} = this.props;
    {/* you can also just say this.props.temp below and not above */}
    return (      
      <p>It's {temp} in {location}</p>
    );
  }
});

module.exports = WeatherMessage;
