exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('teamHistory')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('teamHistory').insert([{ team: 'bulby' }])
    })
}
