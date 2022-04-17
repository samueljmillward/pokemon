import { Route, Routes } from 'react-router-dom'

import AllPokemon from './AllPokemon'
import Header from './components/Header'
import ErrorPage from './components/ErrorPage'

const App = () => {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<AllPokemon />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
