import React from "react";
import { useState, useEffect } from "react"
import axios from "axios"
import { BASE_URL } from "../Constants/urls";
import PokeCard from "../Components/PokeCard";

const Home = () =>{
    const [pokemon, setPokemon] = useState([])
    const [pokemonData, setPokemonData] = useState([])
    const [urls, setUrls] = useState([])

    const getPokemons = () => {
        const pokeList = urls
        const getUrls = () => {
            pokemonData.map((item) => {
                pokeList.push(item.url)
                setUrls(pokeList)
            })
        }
        axios
        .get(`${BASE_URL}/pokemon?limit=30&offset=200`)
        .then((res) => {
            setPokemonData(res.data.results)
            console.log(urls)
        }).catch((err) => {
            console.log(err)
        })

        getUrls()
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