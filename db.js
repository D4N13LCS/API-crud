const db = require('mysql');
require('dotenv').config()

var pool = db.createPool(
    {
    "user": "root",
    "password": process.env.MYSQL_ROOT_PASSWORD,
    "database": process.env.MYSQL_DATABASE,
    "host": "localhost",
    "port": 3306,

}
);

exports.pool = pool;