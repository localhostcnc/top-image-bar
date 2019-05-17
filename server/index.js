const seed = require('./seed.js')

const express = require('express');
const app = express();
const port = 5000;


app.post('/photogallery', (req, res) =>{
    seed.addImageUrl(`https://s3-us-west-1.amazonaws.com/fec-top-image-component/001.jpeg`, res, (err, data) => {
        if(err){
            res.status(500);
            res.send(err)
        } else {
            res.status(200);
            res.send(data)
        }
    })
})

app.get('/photogallery', (req,res) => {
    seed.getAll()
})


app.listen(port, () => console.log(`listening on port 5000`))
