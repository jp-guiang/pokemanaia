import { SET_POKEMON } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_POKEMON:
      return payload
    default:
      return state
  }
}

export default reducer
