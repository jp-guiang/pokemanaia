const connection = require('./connection')

function addTeam(team, db = connection) {
  const tempString = JSON.stringify(team)
  console.log(tempString)
  return db('teamHistory').insert(team)
}

function getTeamHistory(db = connection) {
  return db('teamHistory').select()
  // return 'test'
}

function deleteAllTeamHistory(db = connection) {
  return db('teamHistory').del()
}

module.exports = {
  addTeam,
  getTeamHistory,
  deleteAllTeamHistory,
}
