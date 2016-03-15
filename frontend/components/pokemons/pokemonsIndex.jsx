var PokemonStore = require('../../stores/pokemonStore');
var ApiUtil = require('../../util/apiUtil');
var React = require('react');
var PokemonIndexItem = require('./PokemonIndexItem');

var PropTypes = React.PropTypes;

var PokemonsIndex = React.createClass({

  componentDidMount: function(){
    this.ListenerToken = PokemonStore.addListener(this.updatePokemon);
    ApiUtil.fetch();
  },

  getInitialState: function(){
    return {allPokemons: PokemonStore.all()};
  },

  updatePokemon: function(){
    this.setState({allPokemons: PokemonStore.all()});
  },

  componentWillUnmount: function(){
    this.ListenerToken.remove();
  },


  render: function() {

    var pokemonIndexItems = this.state.allPokemons.map(function(pokemon) {

      return <PokemonIndexItem pokemon={pokemon} key={pokemon.id} />;

    });

    return (
      <div>
       <ul>
        {pokemonIndexItems}
        </ul>
      </div>
    );
  }

});

module.exports = PokemonsIndex;
