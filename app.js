const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views',path.join(__dirname,'views'))
app.use(require('./routes/indexRo'))


app.listen(3000, ()=>{
    console.log('server up!')
})