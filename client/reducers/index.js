import { combineReducers } from 'redux'

import myPokemon from './myPokemon'
import JV from './JV'
import david from './david'
import team from './team.reducer'

export default combineReducers({
  myPokemon,
  JV,
  david,
  team,
})
