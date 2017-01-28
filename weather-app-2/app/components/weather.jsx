var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState() {
    return {
      location: 'Miami',
      temp: 88
    }
  },

  // convention is to prefix with "handle"
  // then in child... prefix with "on"... ie, handleSearch and onSearch
  handleSearch(location) {
    // we're getting a promise back
    openWeatherMap.getTemp(location).then((response) => {
      this.setState({
        location: response.location,
        temp: response.temp
      });
    }, (err) => {
      console.log(err)
    });

  },
  render() {
    // var {temp, location} = this.state;
    return (
      <div>
        <h3>Get Weather</h3>
        <WeatherForm onSearch={this.handleSearch} />
        <WeatherMessage temp={this.state.temp} location={this.state.location}/>
      </div>
    );
  }
});

module.exports = Weather;
