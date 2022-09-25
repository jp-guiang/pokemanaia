import { getPokemon, getPokeInfo } from '../apis/apiClient'

export const SET_POKEMON = 'SET_POKEMON'
export const SET_RHN_HP = 'SET_RHN_HP'
export const SET_RHN_ATK = 'SET_RHN_ATK'
export const SET_RHN_DEF = 'SET_RHN_DEF'

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

export function setRhnHp(damage, pokemon) {
  return {
    type: SET_RHN_HP,
    payload: damage,
    pokemon,
  }
}

export function setRhnAtk(attack, pokemon) {
  return {
    type: SET_RHN_ATK,
    payload: attack,
    pokemon,
  }
}

export function setRhnDef(defense, pokemon) {
  return {
    type: SET_RHN_DEF,
    payload: defense,
    pokemon,
  }
}
