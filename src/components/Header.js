import React from 'react'

import PokemonLogo from '../assets/PokemonLogo.png'

const Header = () => {
  return (
    <div>
      <div className="flex justify-center items-center mb-12">
        <img className="max-h-52" src={PokemonLogo} alt="logo" />
      </div>
    </div>
  )
}

export default Header
