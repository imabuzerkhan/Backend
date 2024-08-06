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

app.get("/rolldice" ,( req , res) =>{
  const dice = Math.floor(Math.random() *6 ) +1
 res.render("rooldice.ejs" , {dice} )
} )

app.get("/instagram/:username" , (req ,res) =>{
  const {username} = req.params
  res.render("instagram.ejs", {username} )
} )


app.listen(8080)