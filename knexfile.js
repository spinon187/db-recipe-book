// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/recipebook.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './migrations',
      tableName: 'recipebook'
    },
    seeds: {
      directory: './data/seeds'
    }
  }
};
