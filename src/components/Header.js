import React from 'react'
import { Link } from 'react-router-dom'

import PokemonFileIcon from '../assets/PokemonFileIcon.jpg'
import PokemonLogo from '../assets/PokemonLogo.png'

const Header = () => {
  return (
    <>
      <Link to="/favourites">
          <img className="max-h-12" src={PokemonFileIcon} alt="logo" />
      </Link>
      <div className="flex justify-center items-center mb-12">
        <Link to="/">
          <img className="max-h-32" src={PokemonLogo} alt="logo" />
        </Link>
      </div>
    </>
  )
}

export default Header
