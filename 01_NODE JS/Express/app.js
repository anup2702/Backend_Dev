
const express = require('express')
const app = express()

app.get('/', function(req, res){
    res.send('Home')
})

app.get('/about', function(req, res){
    const id = req.query.id
    res.send('Welcome ' + id)
})

app.get('/about/:id', function(req, res){
    const id = req.params.id
    res.send('About ' + id)
})



app.listen(8000, function(req, res){
    console.log('Running')
})