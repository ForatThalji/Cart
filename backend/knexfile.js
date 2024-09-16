// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'pg',  // PostgreSQL as the database
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'HU@30080',
      database: 'Cart'
    },
    migrations: {
      directory: './migrations'  // Folder for migrations
    },
    seeds: {
      directory: './seeds'  // Folder for seed files (optional)
    }
  }

  
};

