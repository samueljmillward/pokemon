const URL = 'https://pokeapi.co/api/v2/pokemon'

export const fetchPokemon = (offset) => {
  return fetch(`${URL}?offset=${offset}&limit=20`).then((response) =>
    response.json()
  )
}
