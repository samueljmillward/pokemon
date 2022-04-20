import { useState, useEffect, createContext } from 'react'

const PokemonContext = createContext()

export function PokemonProvider({ children }) {
  const [favourites, setFavourites] = useState([])

  const addToFavourites = (name, id) => {
    setFavourites((initialState) => [...initialState, { name, id }])
    console.log(favourites)
  }

  useEffect(() => {
    const localStorageData = window.localStorage.getItem('Pokemon');
    if (localStorageData !== null) setFavourites(JSON.parse(localStorageData))
  }, []);

  useEffect(() => {
    window.localStorage.setItem('Pokemon', JSON.stringify(favourites))
  }, [favourites])

  return (
    <PokemonContext.Provider value={{ favourites, addToFavourites }}>
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonContext
