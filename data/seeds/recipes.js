
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'normal taco', dish_name: 'tacos'},
        {id: 2, name: 'super taco', dish_name: 'tacos'},
        {id: 3, name: 'bad taco', dish_name: 'tacos'}
      ]);
    });
};
