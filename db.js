const db = require('mysql');

var pool = db.createPool(
    {
    "user": "j3owxxv8ftnpckh1",
    "password": "vefacmybz4gfuapr",
    "database": "lv79hage45wfl1qr",
    "host": "h40lg7qyub2umdvb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    "port": 3306,

}
);

exports.pool = pool;