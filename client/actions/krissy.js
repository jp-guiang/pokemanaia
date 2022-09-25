import { getPokemon, getPokeInfo } from '../apis/apiClient'

export const SET_POKEMON = 'SET_POKEMON'
export const SET_KRS_HP = 'SET_KRS_HP'
export const SET_KRS_ATK = 'SET_KRS_ATK'
export const SET_KRS_DEF = 'SET_KRS_DEF'

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

export function setKrsHp(damage, pokemon) {
  return {
    type: SET_KRS_HP,
    payload: damage,
    pokemon,
  }
}

export function setKrsAtk(attack, pokemon) {
  return {
    type: SET_KRS_ATK,
    payload: attack,
    pokemon,
  }
}

export function setKrsDef(defense, pokemon) {
  return {
    type: SET_KRS_DEF,
    payload: defense,
    pokemon,
  }
}
