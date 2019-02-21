
exports.up = function(knex, Promise) {
    return knex.schema.createTable('dishes', function(tbl){
        tbl.increments('id');
        tbl.string('name', 128).notNullable().unique();
        tbl.timestamps(true, true);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('dishes');
};
