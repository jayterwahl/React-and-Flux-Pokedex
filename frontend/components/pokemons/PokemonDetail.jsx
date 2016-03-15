var React = require('react');
var PropTypes = React.PropTypes;
var PokemonStore = require('../../stores/pokemonStore');
var ApiUtil = require('../../util/apiUtil');

var PokemonDetail = React.createClass({
  getInitialState: function () {
    return ({currentPokemon: this.getStateFromStore()});
  },

  getStateFromStore: function () {
    return PokemonStore.find(parseInt(this.props.params.pokemonId));
  },

  componentDidMount: function(){
    this.ListenerToken = PokemonStore.addListener(this.updatePokemonDetail);
  },

  updatePokemonDetail: function(){
    this.setState({
      currentPokemon: this.getStateFromStore()
    });
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchSinglePokemon(newProps.params.pokemonId);
  },

  render: function() {
    var currentPokemon = this.state.currentPokemon;
    var pokeinfo = "";

    if (!this.state.currentPokemon) {
      pokeinfo = "";
    }
    else {
      pokeinfo = (
        <div className="pokemon-detail-pane">
          <div className="detail">
            {currentPokemon.name}
            <hr></hr>
            <img src={currentPokemon.image_url}/>
          </div>
        </div>
      );
  }

    return (
      <div >
        {pokeinfo}
      </div>
    );
  }

});

module.exports = PokemonDetail;
