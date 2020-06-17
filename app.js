var express = require('express')
var path = require('path')
var app = express()
var apiRouter = require('./routes/api_router') 

app.set('views', path.resolve(__dirname + '/views'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/', apiRouter)

var port = 8000;
app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`)
})
