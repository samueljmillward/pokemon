import AllPokemon from './AllPokemon'

import PokemonLogo from './assets/PokemonLogo.png'

const App = () => {
  return (
    <>
      <div className="App">
        <div class="flex justify-center items-center mb-12">
          <img class="max-h-72" src={PokemonLogo} alt="logo" />
        </div>
        <AllPokemon />
      </div>
    </>
  )
}

export default App
