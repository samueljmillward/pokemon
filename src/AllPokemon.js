import React, { useState, useEffect } from 'react'
import Pokemon from './components/Pokemon'

import { fetchPokemon } from './services/fetchPokemon'

const AllPokemon = () => {
  const [pokemon, setPokemon] = useState([])
  const [pokemonId, setPokemonId] = useState(1)

  useEffect(() => {
    fetchPokemon().then((data) => setPokemon(data))
  }, [])

  const pagination = (event) => {
    return event.target === 'Next'
      ? fetchPokemon(pokemonId - 21).then((data) => {
          setPokemon(data)
          setPokemonId((initialState) => initialState - 20)
        })
      : fetchPokemon(pokemonId + 19).then((data) => {
          setPokemon(data)
          setPokemonId((initialState) => initialState + 20)
        })
  }

  return (
    <>
      <div class="flex justify-center items-center">
        <div class="grid grid-cols-4 gap-x-64">
          {pokemon['results'] &&
            pokemon['results'].map((pokemon, index) => {
              return <Pokemon {...pokemon} id={pokemonId + index} key={index} />
            })}
        </div>
      </div>
      <div class="flex justify-center mt-16">
        <button
          class="px-6 py-2 text-orange-100 bg-orange-400 rounded hover:bg-orange-500 m-2"
          onClick={pagination}
        >
          Previous
        </button>
        <button
          class="px-6 py-2 rounded bg-rose-400 hover:bg-rose-500 text-rose-100 m-2"
          onClick={pagination}
        >
          Next
        </button>
      </div>
    </>
  )
}

export default AllPokemon
