import React from "react";
import { useState, useEffect } from "react"
import axios from "axios"
import { BASE_URL } from "../Constants/urls";
import PokeCard from "../Components/PokeCard";

const Home = () =>{
    const [pokemon, setPokemon] = useState([])
    const getPokemons = () => {
        axios
        .get(`${BASE_URL}/pokemon?limit=30&offset=200`)
        .then((res) => {
            console.log(res.data.results)
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getPokemons()
    }, [])

    return(
        <div>
            {pokemon.map((pokemon, i)=>{
        return(
          <PokeCard
            key={i}
            pokemon={pokemon}
            img={pokemon.sprites.front_default} 
            alt={pokemon.name} 
            PokemonName={pokemon.name}>            
          </PokeCard>
        )
      })}
        </div>
    )
}

export default Home