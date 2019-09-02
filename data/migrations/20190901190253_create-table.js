exports.up = function(knex) {
    return knex.schema
      .createTable('projects', tbl => {
        tbl.increments();
        tbl
          .string('projName', 128)
          .unique()
          .notNullable();
        tbl.boolean('completed').notNullable();
      })
      .createTable('tasks', tbl => {
        tbl.increments();
        tbl
          .string('taskName', 128)
          .notNullable()
          .unique();
        tbl.string('description', 288).notNullable();
        tbl.string('notes', 288);
        tbl.boolean('completed').notNullable();
        tbl
          .integer('projId')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');
      })
      .createTable('resources', tbl => {
        tbl.increments();
        tbl
          .string('resourceName', 128)
          .notNullable()
          .unique();
        tbl.string('description', 288).notNullable();
        tbl
          .integer('projId')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects')
          .onDelete('RESTRICT')
          .onUpdate('CASCADE');
      });
  };
  
  exports.down = function(knex) {
      // order upside-down
    return knex.schema
      .dropTableIfExists('resources')
      .dropTableIfExists('tasks')
      .dropTableIfExists('projects');
  };