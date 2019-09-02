
exports.seed = function(knex) {
  return knex('resources').insert([
    {
      resourceName: 'Google',
      description: 'How to create a server projects.',
      projId: (1, 2)
    },
    {
      resourceName: 'YouTube',
      description:
        ' instructions on how to add online payments on website.',
      projId: 1
    }
  ]);
};