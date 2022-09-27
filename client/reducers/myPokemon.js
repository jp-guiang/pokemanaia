import { SET_HP, SET_MY_DEF, SET_MY_ATK, SAVE_TEAM } from '../actions/myPokemon'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload, pokemon } = action
  switch (type) {
    case SAVE_TEAM:
      return payload

    case SET_HP:
      return state.map((myPokemon) => {
        if (myPokemon.id == pokemon.id) {
          const tempPokemon = myPokemon
          tempPokemon.stats[0].base_stat = payload
          return tempPokemon
        }
        return myPokemon
      })
    case SET_MY_DEF:
      return state.map((myPokemon) => {
        if (myPokemon.id == pokemon.id) {
          const tempPokemon = myPokemon
          tempPokemon.stats[2].base_stat = payload
          return tempPokemon
        }
        return myPokemon
      })
    case SET_MY_ATK:
      return state.map((myPokemon) => {
        if (myPokemon.id == pokemon.id) {
          const tempPokemon = myPokemon
          tempPokemon.stats[1].base_stat = payload
          return tempPokemon
        }
        return myPokemon
      })
    default:
      return state
  }
}

export default reducer
