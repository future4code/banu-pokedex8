import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Pokedex from '../Pages/Pokedex'
import PokemonDetails from '../Pages/PokemonDetails'

const Router = () => {
    return(
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/pokedex" element={<Pokedex />}/>
            <Route path="/pokemon-details" element={<PokemonDetails />}/>
        </Routes>
    </BrowserRouter>
    )
} 

export default Router