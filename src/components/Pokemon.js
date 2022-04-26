import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import PokemonContext from '../PokemonContext'

import pokeball from '../assets/pokeball.png'

const Pokemon = ({ name, id }) => {
  const { addToFavourites } = useContext(PokemonContext)

  return (
    <>
      <div>
        <button
          type="button"
          onClick={() => {
            addToFavourites(name, id)
          }}
        >
          <img src={pokeball} className="h-6 flex" alt="Add to favourites" />
        </button>
        <div className="flex flex-col items-center">
          <Link to={`/pokemoncard/${id}`}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
              alt="Pokemon"
            />
            <h4 className="text-lg">
              {name.replace(/\b\w/g, (capitalFirstCharacter) =>
                capitalFirstCharacter.toUpperCase()
              )}
            </h4>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Pokemon
