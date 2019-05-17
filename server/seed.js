const mysql = require('mysql')
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: '',
    database:"photogallery"
})


const addImageUrl = function(url, res, cb){
    var num = 000;
    for(var i = 0; i <= 100; i++){
        num++
        var imageUrl = `https://s3-us-west-1.amazonaws.com/fec-top-image-component/${num}.jpeg`
        connection.query(`INSERT INTO images (url) VALUES ("${imageUrl}")`,);
        
    }
}



export default seed;