exports.seed = function(knex) {
  // Inserts seed entries
  return knex('category').insert([
    {id: 1, type: 'grain'}, 
    {id: 2, type: 'sugar'}
  ]);
};

