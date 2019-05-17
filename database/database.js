const mysql = require('mysql');


const Connect = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: '',
    database:"photogallery"
})


module.exports = Connect