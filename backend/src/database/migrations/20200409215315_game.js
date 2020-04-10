
exports.up = function(knex) {
  return knex.schema.createTable('games', function (table) {
    table.increments().createTable
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.string('developer').notNullable();
    table.string('photo').notNullable();
  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('games');
};
