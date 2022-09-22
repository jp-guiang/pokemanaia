export const SET_TEAM = 'SET_TEAM'

export function returnTeam(team) {
  return {
    type: SET_TEAM,
    payload: {
      team,
    },
  }
}
