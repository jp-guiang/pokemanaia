import { getPokemon, getPokeInfo } from '../apis/apiClient'

export const SET_POKEMON = 'SET_POKEMON'
export const SET_JV_HP = 'SET_JV_HP'
export const SET_JV_ATK = 'SET_JV_ATK'
export const SET_JV_DEF = 'SET_JV_DEF'

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

export function setJVHp(damage, pokemon) {
  return {
    type: SET_JV_HP,
    payload: damage,
    pokemon,
  }
}

export function setJVAtk(attack, pokemon) {
  return {
    type: SET_JV_ATK,
    payload: attack,
    pokemon,
  }
}

export function setJVDef(defense, pokemon) {
  return {
    type: SET_JV_DEF,
    payload: defense,
    pokemon,
  }
}
