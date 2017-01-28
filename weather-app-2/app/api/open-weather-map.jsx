var axios = require('axios');

const API_KEY = '5db200cd441d5babd1faa23927dacb7a';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=${API_KEY}`;

module.exports = {
  getTemp(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${ROOT_URL}&q=${encodedLocation}`;
    console.log(requestUrl);

    // returns promise
    return axios.get(requestUrl).then((response) => {
      console.log('response==>',response);
      // special thing we need with this particular api
      if(response.data.cod && response.data.message) {
        throw new Error(response.data.message);
      } else {
        return { temp: response.data.main.temp,
                 location: response.data.name
               }; //
      }
    }, (err) => {
      console.log('error==>',err);
      throw new Error(err.data.message);
    })
  }
}
