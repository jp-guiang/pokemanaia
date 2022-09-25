import { getPokemon, getPokeInfo } from '../apis/apiClient'

export const SET_POKEMON = 'SET_POKEMON'
export const SET_GRD_HP = 'SET_GRD_HP'
export const SET_GRD_ATK = 'SET_GRD_ATK'
export const SET_GRD_DEF = 'SET_GRD_DEF'

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

export function setGrdHp(damage, pokemon) {
  return {
    type: SET_GRD_HP,
    payload: damage,
    pokemon,
  }
}

export function setGrdAtk(attack, pokemon) {
  return {
    type: SET_GRD_ATK,
    payload: attack,
    pokemon,
  }
}

export function setGrdDef(defense, pokemon) {
  return {
    type: SET_GRD_DEF,
    payload: defense,
    pokemon,
  }
}
