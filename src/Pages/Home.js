import React from "react";
import { useState, useEffect } from "react"
import axios from "axios"
import { BASE_URL } from "../Constants/urls";
import PokeCard from "../Components/PokeCard";

const Home = () =>{
    const [pokemon, setPokemon] = useState([])
    const [pokemonData, setPokemonData] = useState([])
    
    const getPokemons = () => {
        axios
        .get(`${BASE_URL}/pokemon?limit=30&offset=200`)
        .then((res) => {
            setPokemonData(res.data.results)
            console.log(res.data.results)
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getPokemons();
    }, [])

    return(
        <div>
            {pokemonData.map((pokemon) => {
                return(
                    <div>
                        {pokemon.name}
                        {pokemon.sprites}
                    </div>
                )
                
            })}
        </div>
    )
}

export default Home