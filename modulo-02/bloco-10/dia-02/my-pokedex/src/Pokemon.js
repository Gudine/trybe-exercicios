import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const {id, name, type, averageWeight: weight, image, moreInfo} = this.props.pokemonData;
    return (
      <div className="pkmn-cont" key={id}>
        <div className="pkmn-left">
          <p className="pkmn-name">{name}</p>
          <p className="pkmn-type">{type}</p>
          <p className="pkmn-weight">Average weight: {weight.value} {weight.measurementUnit}</p>
          <p className="pkmn-more"><a href={moreInfo}>Read more</a></p>
        </div>
        <div className="pkmn-img">
          <img src={image} alt={name}/>
        </div>
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemonData: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    }).isRequired,
    image: PropTypes.string.isRequired,
    moreInfo: PropTypes.string,
  }).isRequired,
}

export default Pokemon;