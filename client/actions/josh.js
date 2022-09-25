import { getPokemon, getPokeInfo } from '../apis/apiClient'

export const SET_POKEMON = 'SET_POKEMON'
export const SET_JSH_HP = 'SET_JSH_HP'
export const SET_JSH_ATK = 'SET_JSH_ATK'
export const SET_JSH_DEF = 'SET_JSH_DEF'

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

export function setJshHp(damage, pokemon) {
  return {
    type: SET_JSH_HP,
    payload: damage,
    pokemon,
  }
}

export function setJshAtk(attack, pokemon) {
  return {
    type: SET_JSH_ATK,
    payload: attack,
    pokemon,
  }
}

export function setJshDef(defense, pokemon) {
  return {
    type: SET_JSH_DEF,
    payload: defense,
    pokemon,
  }
}
