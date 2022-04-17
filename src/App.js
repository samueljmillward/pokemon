import { Route, Routes } from 'react-router-dom'
import { PokemonProvider } from './PokemonContext'
import AllPokemon from './AllPokemon'
import Header from './components/Header'
import ErrorPage from './components/ErrorPage'
import PokemonCard from './components/PokemonCard'

const App = () => {
  return (
    <>
      <PokemonProvider>
        <Header />
        <Routes>
          <Route path="/" element={<AllPokemon />} />
          <Route path="/pokemoncard/:id" element={<PokemonCard />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </PokemonProvider>
    </>
  )
}

export default App
