const URL = 'https://pokeapi.co/api/v2/pokemon/'

export const fetchPokemonStats = (id) => {
  return fetch(`${URL}${id}`).then((response) => 
    response.json()
  )
}

