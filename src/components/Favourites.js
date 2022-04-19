import React from 'react'
import { Link } from 'react-router-dom'

const Favourites = () => {
  const pokemonData = JSON.parse(localStorage.getItem("Pokemon"));

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-4 gap-x-64 gap-y-8">{pokemonData.map((pokemon) => {
          return (
            <div className="flex flex-col items-center">
              <Link to={`/pokemoncard/${pokemon.id}`}>
              <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              alt="Pokemon"
            />
              {pokemon.name.replace(/\b\w/g, (capitalFirstCharacter) =>
                capitalFirstCharacter.toUpperCase()
              )}
              </Link>
            </div>
          )
        })}</div>
      </div>
    </>
  )
}

export default Favourites
