const db = require('mysql');

var pool = db.createPool(
    {
    "user": "cardosodaniel",
    "password": "Senha43215",
    "database": "l1brary_2",
    "host": "db4free.net",
    "port": 3306,

}
);

exports.pool = pool;
