import { SET_TEAM } from '../actions/team.actions'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_TEAM:
      return payload
    default:
      return state
  }
}

export default reducer
