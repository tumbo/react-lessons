var redux = require('redux');

// one arugument in this method... needs to be pure function
/*
called a reducer
.. going to take actions and current state, and reduce?
*/
// using ES2016
var stateDefault = {
  name: 'anonymous',
  searchText:'',
  showCompleted: false,
  todos: []};

// created to pass into createStore call
// changing or generating new state happens here
var reducer = (state = stateDefault, action) => {

  switch(action.type) {
    case 'CHANGE_NAME':
      console.log('change name detected');
      return {
        ...state,
        name: action.name
      }
    break;

    case 'CHANGE_FOO':
     return {
       ...state,
       foo: action.foo
     }
    break;

    default:
    return state;
  }
};
var store = redux.createStore(reducer);

// subscribe to changes to this store... run code if detected
var unsub = store.subscribe(() => {
  console.log('state...', store.getState())
});
var currentState = store.getState();

console.log('currentState', currentState);

var action = {
  type: 'CHANGE_NAME',
  name: 'Tamsyn'
}

var akshun = {
  type: 'CHANGE_FOO',
  foo: 'I am foo'
}

console.log('about to call dispatch');
// this causes reducer to be called
store.dispatch(action);
// unsub();
store.dispatch(akshun);
