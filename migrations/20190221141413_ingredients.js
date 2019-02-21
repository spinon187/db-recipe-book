
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', function(tbl){
        tbl.increments('id');
        tbl.string('name', 128).notNullable().unique();
        tbl
            .string('recipe_name')
            .unsigned()
            .references('name')
            .inTable('dishes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
            .notNullable();
        tbl.timestamps(true, true);
        })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients');
};
