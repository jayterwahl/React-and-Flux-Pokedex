var React = require('react');
var PropTypes = React.PropTypes;
var PokemonIndex = require('./pokemons/pokemonsIndex');
var PokemonForm = require('./pokemons/PokemonForm');

var App = React.createClass({

  render: function () {
    return (
      <div id="pokedex">

        <div className="pokemon-index-pane">
          <PokemonForm />

          <PokemonIndex />
        </div>
          {this.props.children}
       </div>
    );
  }

});

module.exports = App;
