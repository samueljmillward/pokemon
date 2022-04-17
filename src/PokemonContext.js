import { useState, createContext } from 'react'

const PokemonContext = createContext()

export function PokemonProvider({ children }) {
  const [favourites, setFavourites] = useState([])

  const addToFavourites = (name, id) => {
    setFavourites((initialState) => [...initialState, { name, id }])
    console.log(favourites)
  }

  return (
    <PokemonContext.Provider value={{ favourites, addToFavourites }}>
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonContext
