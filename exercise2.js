const express = require('express')

const app = express()

app.get('/', function(req, res){
  res.send('¡Hello engineer Juampa, this is the second exercise!')
})

app.listen(3000)