const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  getDishes,
  addDish,
  getDish,
  getRecipes,
  addRecipe,
  getRecipe
};

function getDishes(){
    return db('dishes');
}

function addDish(dish){
    return db('dishes')
        .insert(dish)
}

function getDish(dish){
    return db('dishes').where({name: dish}).first();
}

function getRecipes(dish){
    return db('recipes').where({dish_name: dish});
}

function addRecipe(recipe){
    return db('recipes')
    .insert(recipe)
}

function getRecipe(recipe){
    return db('recipe_ingredients').where({recipe_name: recipe})
}