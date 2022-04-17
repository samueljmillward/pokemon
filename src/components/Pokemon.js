import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import pokeball from '../assets/pokeball.png'

const Pokemon = ({ name, id }) => {
  const [favourites, setFavourites] = useState([])

  return (
    <>
      <div>
        <button
          type="button"
          onClick={() => {
            setFavourites([...favourites, id])
            console.log(id)
            console.log(favourites)
          }}
        >
          <img src={pokeball} className="h-9 w-9 flex" alt="" />
        </button>
        <div className="flex flex-col items-center">
          <Link to={`/pokemoncard/${id}`}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
              alt="Pokemon"
            />
            <h4 className="text-2xl">
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
