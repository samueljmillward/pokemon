import React, { useState, useEffect } from 'react'
import Pokemon from './components/Pokemon';

import { fetchPokemon } from './services/fetchPokemon'

const AllPokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonId, setPokemonId] = useState(1);

  useEffect(() => {
    fetchPokemon().then((data) => {
      setPokemon(data);
    });
  }, []);

  return (
    <>
        <div>
            {pokemon['results'] &&
            pokemon['results'].map((pokemon, index) => {
                return <Pokemon {...pokemon} id={pokemonId + index} key={index} />
            })}
        </div>
        <button onClick={() => {
            fetchPokemon(pokemonId - 21)
            .then((data) => {
                setPokemon(data);
                setPokemonId((initialState) => {
                  return initialState - 20 
                });
              });
        }}>Previous</button>
        <button onClick={() => {
            fetchPokemon(pokemonId + 19)
            .then((data) => {
                setPokemon(data);
                setPokemonId((initialState) => {
                  return initialState + 20 
                });
              });
        }}>Next</button>     
    </>
  )
}

export default AllPokemon;
