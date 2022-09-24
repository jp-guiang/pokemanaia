import { getPokemon, getPokeInfo } from '../apis/apiClient'

export const SET_POKEMON = 'SET_POKEMON'
export const SET_DVD_HP = 'SET_DVD_HP'
export const SET_DVD_ATK = 'SET_DVD_ATK'
export const SET_DVD_DEF = 'SET_DVD_DEF'

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

export function setDvdHp(damage, pokemon) {
  return {
    type: SET_DVD_HP,
    payload: damage,
    pokemon,
  }
}

export function setDvdAtk(attack, pokemon) {
  return {
    type: SET_DVD_ATK,
    payload: attack,
    pokemon,
  }
}

export function setDvdDef(defense, pokemon) {
  return {
    type: SET_DVD_DEF,
    payload: defense,
    pokemon,
  }
}
