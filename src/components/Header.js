import React from 'react'

import PokemonLogo from '../assets/PokemonLogo.png'

const Header = () => {
  return (
    <div>
      <div class="flex justify-center items-center mb-12">
        <img class="max-h-72" src={PokemonLogo} alt="logo" />
      </div>
    </div>
  )
}

export default Header
