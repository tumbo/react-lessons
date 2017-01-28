// we removed the script tags from the html, so now need to require
var React = require('react');
var ReactDOM = require('react-dom');
// ES6 de-structuring syntax
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');
// above is done instead of below for each object we want
// var Route = require('react-router').Route;

// seems odd, but just go with it. very inconsistant
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
document.getElementById('app')
);
