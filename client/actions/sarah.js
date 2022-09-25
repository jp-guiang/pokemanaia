import { getPokemon, getPokeInfo } from '../apis/apiClient'

export const SET_POKEMON = 'SET_POKEMON'
export const SET_SRH_HP = 'SET_SRH_HP'
export const SET_SRH_ATK = 'SET_SRH_ATK'
export const SET_SRH_DEF = 'SET_SRH_DEF'

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

export function setSrhHp(damage, pokemon) {
  return {
    type: SET_SRH_HP,
    payload: damage,
    pokemon,
  }
}

export function setSrhAtk(attack, pokemon) {
  return {
    type: SET_SRH_ATK,
    payload: attack,
    pokemon,
  }
}

export function setSrhDef(defense, pokemon) {
  return {
    type: SET_SRH_DEF,
    payload: defense,
    pokemon,
  }
}
