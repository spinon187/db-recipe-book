exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('recipe_ingredients').del()
      .then(function () {
        // Inserts seed entries
        return knex('recipe_ingredients').insert([
          {id: 1, recipe_name: 'normal_taco', ingredient_name: 'meat', quantity: 1.0},
          {id: 2, recipe_name: 'super_taco', ingredient_name: 'meat', quantity: 2.0},
          {id: 3, recipe_name: 'bad_taco', ingredient_name: 'meat', quantity: 0.0},
          {id: 4, recipe_name: 'super_taco', ingredient_name: 'extreme skill', quantity: 1.0},
          {id: 5, recipe_name: 'bad_taco', ingredient_name: 'incompetence', quantity: 5.0}

        ]);
      });
  };