import { getPokemon, getPokeInfo } from '../apis/apiClient'

export const SET_POKEMON = 'SET_POKEMON'
export const SET_JOE_HP = 'SET_JOE_HP'
export const SET_JOE_ATK = 'SET_JOE_ATK'
export const SET_JOE_DEF = 'SET_JOE_DEF'

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

export function setJoeHp(damage, pokemon) {
  return {
    type: SET_JOE_HP,
    payload: damage,
    pokemon,
  }
}

export function setJoeAtk(attack, pokemon) {
  return {
    type: SET_JOE_ATK,
    payload: attack,
    pokemon,
  }
}

export function setJoeDef(defense, pokemon) {
  return {
    type: SET_JOE_DEF,
    payload: defense,
    pokemon,
  }
}
