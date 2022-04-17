import React from 'react'
import { Link } from 'react-router-dom'

import PokemonLogo from '../assets/PokemonLogo.png'

const Header = () => {
  return (
    <div>
      <div className="flex justify-center items-center mb-12">
        <Link to="/">
          <img className="max-h-32" src={PokemonLogo} alt="logo" />
        </Link>
      </div>
    </div>
  )
}

export default Header
