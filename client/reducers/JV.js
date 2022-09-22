import { SET_JV } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_JV:
      return payload
    default:
      return state
  }
}

export default reducer
