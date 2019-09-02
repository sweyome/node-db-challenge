exports.seed = function(knex) {
  return knex('projects').insert([
    { projName: 'create A Server', completed: 0 },
    { projName: 'Online payment', completed: 0 }
  ]);
};