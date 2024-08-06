const express = require('express')
const path = require('path')
const app = express()

app.set("views", path.join(__dirname,"/views"))

app.get('/' , (req, res) =>{
res.send("hello world")
} )


app.set('view engine' , 'ejs' )
app.get('/html', (req , res)=>{
  res.render("index.ejs")
} )



app.listen(8080)