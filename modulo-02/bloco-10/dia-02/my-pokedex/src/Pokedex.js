import React, { Component } from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';

class Pokedex extends Component {
  render() {
    const mapFunct = (pkmn) => (
      <Pokemon pokemonData={pkmn} key={pkmn.id}/>
    );

    return pokemons.map(mapFunct);
  }
}
 
export default Pokedex;
