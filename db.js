const db = require('mysql');

var pool = db.createPool(
    {
    "user": "root",
    "password": process.env.senha,
    "database": "ecommerce",
    "host": "localhost",
    "port": 3306,

}
);

exports.pool = pool;