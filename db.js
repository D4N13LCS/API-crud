const db = require('mysql2');
require('dotenv').config()

var pool = db.createPool(
    {
    "user": "root",
    "password": process.env.MYSQL_ROOT_PASSWORD,
    "database": process.env.MYSQL_DATABASE,
    "host": "mysql",
    "port": 3306,

}
);

exports.pool = pool;