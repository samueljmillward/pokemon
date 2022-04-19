import React, { useContext } from 'react'
import PokemonContext from '../PokemonContext'

const Favourites = () => {
  const { favourites } = useContext(PokemonContext)

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-4 gap-x-64 gap-y-8">{/*  */}</div>
      </div>
    </>
  )
}

export default Favourites
