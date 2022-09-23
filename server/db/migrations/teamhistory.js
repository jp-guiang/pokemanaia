exports.up = function (knex) {
  return knex.schema.createTable('teamHistory', (table) => {
    table.increments('id')
    table.string('team')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('teamHistory')
}
