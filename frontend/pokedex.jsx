var React = require('react');
var ReactDOM = require('react-dom');
var Route = require('react-router').Route;
var Router = require('react-router').Router;


var PokemonIndex = require('./components/pokemons/pokemonsIndex');
var PokemonDetail = require('./components/pokemons/PokemonDetail');
var App = require('./components/app');


window.PokemonStore = require('./stores/pokemonStore');
window.ApiUtil = require('./util/apiUtil');
window.Dispatcher = require('./dispatcher/Dispatcher');


// var routes = (
//   <Route component={App} path="/">
//     <Route component={Restaurant} path="restaurants/:id">
//       <Route component={Order} path="order" />
//     </Route>
//   </Route>
// );



var routes = (

  <Route component={App} path="/">
    <Route component={PokemonDetail} path="pokemon/:pokemonId"> </Route>
  </Route>

);

document.addEventListener('DOMContentLoaded', function(){
  var content = document.querySelector('#root');
  ReactDOM.render( <Router>{routes}</Router>, content);

});
