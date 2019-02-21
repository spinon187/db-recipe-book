
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipe_ingredients', function(tbl){
        tbl.increments('id');
        tbl
            .string('recipe_name')
            .unsigned()
            .references('name')
            .inTable('recipes')
            // .onDelete('CASCADE')
            // .onUpdate('CASCADE')
            .notNullable();
        tbl
            .string('ingredient_name')
            .unsigned()
            .references('name')
            .inTable('ingredients')
            // .onDelete('CASCADE')
            // .onUpdate('CASCADE')
            .notNullable();
        tbl.float('quantity').notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipe_ingredients');
};
