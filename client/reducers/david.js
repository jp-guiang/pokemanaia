import { SET_DAVID } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_DAVID:
      return payload
    default:
      return state
  }
}

export default reducer
