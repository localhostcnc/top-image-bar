import seed from './seed.js'

const express = require('express');
const app = express();
const port = 5000;


app.get('/photos', function(req,res){
    // var imageUrl = `https://s3-us-west-1.amazonaws.com/fec-top-image-component/.jpeg`
    // var num = 000;
    // for(var i = 0; i <= 100; i++){
    //     num++
    //     seed.addImageUrl(`https://s3-us-west-1.amazonaws.com/fec-top-image-component/${num}.jpeg`)
    // }
})

app.post('/')


app.listen(port, () => console.log(`listening on port 5000`))