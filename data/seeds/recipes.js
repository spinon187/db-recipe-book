
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'normal_taco', dish_name: 'tacos'},
        {id: 2, name: 'super_taco', dish_name: 'tacos'},
        {id: 3, name: 'bad_taco', dish_name: 'tacos'}
      ]);
    });
};
