import request from 'superagent'
const rootUrl = '/api/v1'

export function getPokemon(currentPage, limit) {
  return request
    .get(
      `https://pokeapi.co/api/v2/pokemon?offset=${
        currentPage * 20
      }&limit=${limit}`
    )
    .then((res) => {
      return res.body
    })
}

export function getPokeInfo(name) {
  return request
    .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((res) => {
      return res.body
    })
}

export function saveTeam(team) {
  console.log('api', team)
  return request
    .post(rootUrl + '/teamHistory')
    .send({ team })
    .then((res) => {
      console.log(res.body)
      return res.body
    })
}

export function deleteEntireTeamHistory() {
  return request.delete(rootUrl + '/teamHistory').then((res) => {
    console.log('delete', res.body)
    return res.body
  })
}
export function getAllTeamHistory() {
  return request.get(rootUrl + '/teamHistory').then((res) => {
    console.log('add', res.body)
    return res.body
  })
}
