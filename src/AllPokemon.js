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
    return event.target.value === 'Previous'
      ? fetchPokemon(pokemonId - 17).then((data) => {
          setPokemon(data)
          setPokemonId((initialState) => initialState - 16)
        })
      : fetchPokemon(pokemonId + 15).then((data) => {
          setPokemon(data)
          setPokemonId((initialState) => initialState + 16)
        })
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-4 gap-x-64 gap-y-8">
          {pokemon['results'] &&
            pokemon['results'].map((pokemon, index) => {
              return <Pokemon {...pokemon} id={pokemonId + index} key={index} />
            })}
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <button
          className="px-6 py-2 text-orange-100 bg-orange-400 rounded hover:bg-orange-500 m-2"
          onClick={pagination}
          value="Previous"
        >
          Previous
        </button>
        <button
          className="px-6 py-2 rounded bg-rose-400 hover:bg-rose-500 text-rose-100 m-2"
          onClick={pagination}
          value="Next"
        >
          Next
        </button>
      </div>
    </>
  )
}

export default AllPokemon
