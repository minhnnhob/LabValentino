var express = require('express')
var app = express()

app.set('view engine','hbs')
app.use(express.urlencoded({extended:true}))// gui texbox, html element den app.js
app.use(express.static('public'))//su dung javascript, anh, stylesheet, trong public

app.get('/',(req,res)=>{
    res.render('home')
})

const PORT = process.env.PORT || 8000

app.listen(PORT,()=>{
    console.log("ok!")
})