const mysql = require('mysql2');

var db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Aaryan@123",
    database:"yoga"
});

db.connect(function(err) {
    if (err) throw err;
    console.log('Database is connected successfully !');
});

module.exports= db;