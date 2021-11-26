import React from 'react'
import {
    Img,
    PokemonImg,
    Name
    
  
  } from './styled';


const PokeCard = (props) => {
    return(
        <PokemonImg>
        <Name>{props.name}</Name>
      </PokemonImg>
    )
}

export default PokeCard