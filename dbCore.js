/**
 * Created by pixeleye03 on 2017-01-06.
 */
var mysql = require('mysql');

exports.dbConn = mysql.createConnection({
    host : '115.68.14.27',
    port : '3306',
    user : 'kocadmin',
    password : 'vlrtpfdkdl0505',
    database : 'mainDB'
});

