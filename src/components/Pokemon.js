import React from 'react'

const Pokemon = ({ name, id }) => {
  return (
    <div>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt="Pokemon"
      />
      <h4>
        {name.replace(/\b\w/g, (capitalFirstCharacter) =>
          capitalFirstCharacter.toUpperCase()
        )}
      </h4>
    </div>
  )
}

export default Pokemon
