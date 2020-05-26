exports.seed = function(knex) {
  // Inserts seed entries
  return knex('user_item').insert([
    {user_id: 1, item_id: 2}, 
    {user_id: 2, item_id:1}
  ]);
};
