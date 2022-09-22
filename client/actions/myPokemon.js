import { getPokemon, getPokeInfo } from '../apis/apiClient'

export const SET_POKEMON = 'SET_POKEMON'
export const SET_HP = 'SET_HP'

export function setPokemon(pokemon) {
  return {
    type: SET_POKEMON,
    payload: pokemon,
  }
}

export function fetchPokemon() {
  return (dispatch) => {
    return getPokemon().then((pokemon) => {
      dispatch(setPokemon(pokemon))
      return null
    })
  }
}

export function setPokeHP(attack, pokemon) {
  return {
    type: SET_HP,
    payload: attack,
    pokemon,
  }
}
