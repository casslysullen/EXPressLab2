const {
    Pool
} = require('pg');
const credentials = new Pool({
    user: '',
    password: 'mysecretpassword',
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    ssl: false
});

module.exports = credentials;