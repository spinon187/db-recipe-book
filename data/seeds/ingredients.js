
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'meat'},
        {id: 2, name: 'extreme skill'},
        {id: 3, name: 'incompetence'}
      ]);
    });
};
