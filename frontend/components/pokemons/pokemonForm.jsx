var LinkedStateMixin = require('react-addons-linked-state-mixin');
var React = require('react');
var PropTypes = React.PropTypes;
var apiUtil = require("../../util/apiUtil");


var PokemonForm = React.createClass({

  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return {
      name: "",
      attack: "",
      defense: "",
      image_url: "",
      poke_type: "bug",
      moves: ["tackle"]
    };
  },

  handleClick: function(e) {
    apiUtil.create(this.state);
  },

  render: function() {
    var pokemonTypeOptions = window.pokemonTypes.map(function(type) {

      return <option value={type}>{type}</option>;
    });

    return (
      <form className="new-pokemon">

        Name: <input type="text" valueLink={this.linkState("name")}></input>
        <br></br>

        Attack: <input type="text" valueLink={this.linkState("attack")}></input>
        <br></br>

        Defense: <input type="text" valueLink={this.linkState("defense")}></input>
        <br></br>
        {"Image Url:"} <input type="text" valueLink={this.linkState("image_url")}></input>
        <br></br>

        Type: <select valueLink={this.linkState("poke_type")}>
          {pokemonTypeOptions}
        </select>
        <br></br>

        <input type="submit" onClick={this.handleClick}></input>
      </form>
    );
  }

});

module.exports = PokemonForm;
