var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/Dispatcher');
var pokemonConstants = require('../constants/pokemonConstants');

var _pokemons = {};
var PokemonStore = new Store(Dispatcher);

PokemonStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case pokemonConstants.POKEMONS_RECEIVED:
      resetPokemons(payload.pokemons);
      PokemonStore.__emitChange();
      break;
    case pokemonConstants.SINGLE_POKEMON_RECEIVED:
      resetSinglePokemon(payload.singlePokemon);
      PokemonStore.__emitChange();
      break;
    case pokemonConstants.MAKE_NEW_POKEMON:
    resetSinglePokemon(payload.createdPokemon);
      PokemonStore.__emitChange();
      break;
  }
};

function resetPokemons (pokemons) {
  _pokemons = {};
  pokemons.forEach(function (pokemon) {
    _pokemons[pokemon.id] = pokemon;
  });
}

function resetSinglePokemon(pokemon) {
  _pokemons[pokemon.id] = pokemon;
}





PokemonStore.all = function(){

  var arrOfPokemons = Object.keys(_pokemons).map(function(pokemonId) {
    return _pokemons[pokemonId];
  });
  return arrOfPokemons;

};

PokemonStore.find = function(id) {
  return _pokemons[id];
};






module.exports = PokemonStore;
