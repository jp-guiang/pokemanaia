export const SET_MY_POKEMON = 'SET_MY_POKEMON'
export const MY_POKEMON_HP = 'MY_POKEMON_HP'

export function setCurrentPokemon(payload) {
  return {
    type: 'SET_MY_POKEMON',
    payload,
  }
}
