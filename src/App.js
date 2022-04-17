import { Route, Routes } from 'react-router-dom'

import AllPokemon from './AllPokemon'
import Header from './components/Header'
import ErrorPage from './components/ErrorPage'
import PokemonCard from './components/PokemonCard'

const App = () => {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<AllPokemon />} />
          <Route path="/pokemoncard/:id" element={<PokemonCard />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
