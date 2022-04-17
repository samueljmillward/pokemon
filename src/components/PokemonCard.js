import React from 'react'
import { useParams } from 'react-router-dom'

const PokemonCard = () => {
  let { id } = useParams()

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
