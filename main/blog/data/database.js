const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    database: 'blog',
    user: 'root',
    password: '545103',
});

module.exports = pool;