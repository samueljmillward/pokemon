import React, { useState, useEffect } from 'react'
import Pokemon from './components/Pokemon';

import { fetchPokemon } from './services/fetchPokemon'

const AllPokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonId, setPokemonId] = useState(1);

  useEffect(() => {
    fetchPokemon().then((data) => setPokemon(data));
  }, []);

  const pagination = (event) => {
    return event.target === 'Next' ? 
        fetchPokemon(pokemonId - 21)
        .then((data) => {
            setPokemon(data);
            setPokemonId(initialState => initialState - 20); 
        }) :
        fetchPokemon(pokemonId + 19)
            .then((data) => {
                setPokemon(data);
                setPokemonId(initialState => initialState + 20);
    });
  };

  return (
    <>
        <div>
            {pokemon['results'] &&
            pokemon['results'].map((pokemon, index) => {
                return <Pokemon {...pokemon} id={pokemonId + index} key={index} />
            })}
        </div>
        <button onClick={pagination}>Previous</button>
        <button onClick={pagination}>Next</button>     
    </>
  )
}

export default AllPokemon;
