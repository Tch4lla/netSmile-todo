const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'kth18822',
    port: 5432,
    database: 'netsmile'
})

module.exports = pool