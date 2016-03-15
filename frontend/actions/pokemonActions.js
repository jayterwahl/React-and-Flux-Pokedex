var Dispatcher = require("../dispatcher/Dispatcher");
var pokemonConstants = require('../constants/pokemonConstants');


var pokemonActions = {

  receiveAllPokemons: function(pokemons){
    Dispatcher.dispatch({
      actionType: pokemonConstants.POKEMONS_RECEIVED,
      pokemons: pokemons
    });
  },
  receiveSinglePokemon: function(pokemon){
    Dispatcher.dispatch({
      actionType: pokemonConstants.SINGLE_POKEMON_RECEIVED,
      singlePokemon : pokemon
    });
  },

  createPokemon: function(pokemonObject){
    debugger
    Dispatcher.dispatch({
      actionType: pokemonConstants.MAKE_NEW_POKEMON,
      createdPokemon: pokemonObject

    });
  }

};

module.exports = pokemonActions;
