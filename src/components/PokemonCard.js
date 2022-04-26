import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { fetchPokemonStats } from '../services/fetchPokemonStats'

const PokemonCard = () => {
  const [pokemonStats, setPokemonStats] = useState([])
  let { id } = useParams()

  useEffect(() => {
    fetchPokemonStats(id).then((data) => setPokemonStats(data))
  }, [id])
  console.log(pokemonStats);

  return (
    
    <div className="flex justify-center">
      <img
        className="h-80"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt="Pokemon"
      />
    </div>
  )
}

export default PokemonCard
