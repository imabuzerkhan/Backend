const express = require('express')

const data = express()

data.get('/', function(req , res){
  res.send("hello world")
})

data.get('/contact' , function(req, res ){
  res.send("my no is 9804395755")
} )

data.listen(3000)