const connection = require('./connection')

function addTeam(team, db = connection) {
  return db('teamHistory').insert(team)
}

function getTeamHistory(db = connection) {
  return db('teamHistory').select()
}

function deleteAllTeamHistory(db = connection) {
  return db('teamHistory').del()
}

module.exports = {
  addTeam,
  getTeamHistory,
  deleteAllTeamHistory,
}
