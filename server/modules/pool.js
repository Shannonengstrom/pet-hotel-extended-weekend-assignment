const pg = require('pg');

const config = {
    database: 'pet-hotel',
    host: 'localhost',
    port: '5432',
    max: 10,
    idleTimeoutMillis: 1000
};

module.exports = new pg.Pool(config);