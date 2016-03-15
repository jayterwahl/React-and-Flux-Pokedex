var pokemonActions = require('../actions/pokemonActions');

var ApiUtil = {

  fetch: function(){

    $.get(
        "api/pokemon",
        function(payload){
          pokemonActions.receiveAllPokemons(payload);
        }
    );

  },

  create: function(pokemonObject) {
    var pokePackage = {"pokemon": pokemonObject};

    $.post(
      "api/pokemon",
      pokePackage,
      function(payload){
        pokemonActions.createPokemon(payload);
      }
    );
  },

  fetchSinglePokemon: function (pokemonId) {
    $.get(
      "api/pokemon/" + pokemonId,
      function(payload){
        pokemonActions.receiveSinglePokemon(payload);
      }
    );
  }
};


module.exports = ApiUtil;
