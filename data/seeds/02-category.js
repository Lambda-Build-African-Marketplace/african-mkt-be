exports.seed = function(knex) {
  // Inserts seed entries
  return knex('category').insert([
    {type: 'grain'}, 
    {type: 'sugar'}
  ]);
};

