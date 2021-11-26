import React from 'react'
import {
    Img,
    PokemonImg,
    Name
    
  
  } from './styled';


const PokeCard = (props) => {
    return(
        <PokemonImg>
          <Img
            src={props.pokemon && props.pokemon.sprites.front_default}
            alt={props.pokemon.name}
          />
          <Name>{props.name}</Name>
      </PokemonImg>
    )
}

export default PokeCard