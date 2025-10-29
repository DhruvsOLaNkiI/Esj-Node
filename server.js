const express = require('express');
const app = express();

app.use(function(req, res, next){
    next();});

app.get('/', (req,res)=>{
    res.send('Hello World!');
})

app.get('/about', (req,res)=>{
    res.send('Hello About!');
})


app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});