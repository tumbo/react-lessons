var redux = require('redux');

console.log('redux!!');

// one arugument in this method... needs to be pure function
/*
called a reducer
.. going to take actions and current state, and reduce?
*/
// using ES2016
var reducer = (state = {name: 'anonymous'}, action) => {
  // es5, but we're using es6 convention in arg list
  // state = state ||  {name: 'anonymous'}

  // reducers always return state
  return state;
};
var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState', currentState);
