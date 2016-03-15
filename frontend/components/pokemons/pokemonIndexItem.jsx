var React = require('react');
var PropTypes = React.PropTypes;
var History = require('react-router').History;

var PokemonIndexItem = React.createClass({
  mixins: [History],

  handleClick: function (e) {
    this.history.push("pokemon/" + this.props.pokemon.id);
  },

  render: function() {
    return (
      <div onClick={this.handleClick} className="poke-list-item">

        {this.props.pokemon.name + ", " + this.props.pokemon.poke_type}

      </div>

    );
  }

});

module.exports = PokemonIndexItem;
