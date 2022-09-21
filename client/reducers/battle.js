import { SET_MY_POKEMON, MY_POKEMON_HP } from '../actions/index.js'

let initialBattleState = []

const battleReducer = (state = initialBattleState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_MY_POKEMON:
      return payload
    case MY_POKEMON_HP:
      return payload
    default:
      return state
  }
}

export default battleReducer
