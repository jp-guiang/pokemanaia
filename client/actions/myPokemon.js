import { getPokemon, saveTeam, getAllTeamHistory } from '../apis/apiClient'

export const SET_POKEMON = 'SET_POKEMON'
export const SET_HP = 'SET_HP'
export const SET_MY_DEF = 'SET_MY_DEF'
export const SET_MY_ATK = 'SET_MY_ATK'
export const SAVE_TEAM = 'SAVE_TEAM'
export const SET_TEAM = 'SET_TEAM'

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

export function setPokeHp(attack, pokemon) {
  return {
    type: SET_HP,
    payload: attack,
    pokemon,
  }
}

export function setMyDef(defense, pokemon) {
  return {
    type: SET_MY_DEF,
    payload: defense,
    pokemon,
  }
}

export function setMyAtk(attack, pokemon) {
  return {
    type: SET_MY_ATK,
    payload: attack,
    pokemon,
  }
}

export function returnTeam(team) {
  return {
    type: SAVE_TEAM,
    payload: team,
  }
}

export function saveDbTeam(team) {
  const tempArray = team.map((pokemon) => {
    return { name: pokemon.name, picture: pokemon.sprites.front_default }
  })

  return (dispatch) => {
    return saveTeam(tempArray).then(dispatch(returnTeam(team)))
  }
}

export function setTeam(team) {
  return {
    type: SET_TEAM,
    payload: team,
  }
}

export function fetchTeam() {
  return (dispatch) => {
    return getAllTeamHistory((team) => {
      dispatch(setTeam(team))
    })
  }
}
