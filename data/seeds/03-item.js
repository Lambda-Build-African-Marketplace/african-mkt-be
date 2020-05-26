exports.seed = function(knex) {
  // Inserts seed entries
  return knex('item').insert([
    {id: 1, name: 'honey', description: 'USDA Organic honey', city: 'Nairobi', country:'Kenya', price: 10.50, category_id:2}, 
    {id: 2, name: 'cracked corn', description: 'Sweet yellow cracked corn', city: 'Nairobi', country:'Kenya', price: 10.50, category_id:1}
  ]);
};