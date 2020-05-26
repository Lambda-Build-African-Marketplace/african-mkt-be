const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  // Inserts seed entries
  return knex('user').insert([
    {username: 'Jane', password: bcrypt.hashSync("12345", 10), email: 'Jane@gmail.com', about: 'Selling all kinds of corn, grown locally.', store_name: 'Jane and the Corn Farm'}, 
    {username: 'Doe', password: bcrypt.hashSync("12345", 10), email: 'Doe@gmail.com', about: 'Selling honey, grown locally.', store_name: 'Doe\'s Honey'}
  ]);
};

