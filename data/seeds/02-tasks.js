exports.seed = function(knex) {
  return knex('tasks').insert([
    {
      taskName: 'Server setup',
      description: 'install all library',
      notes: 'check if it works.',
      completed: 0,
      projId: 1
    },
    {
      taskName: 'create a marketing web',
      description: 'n/a ',
      notes: 'looks good ?',
      completed: 1,
      projId: 2
    },
    {
      taskName: 'merge ',
      description: 'merge marketing page and server together.',
      notes: 'n/a',
      completed: 0,
      projId: (1, 2)
    },
    {
      taskName: 'Cart',
      description: 'add some item to the cart',
      notes: 'try to Purchase',
      completed: 0,
      projId: 1
    }
  ]);
};