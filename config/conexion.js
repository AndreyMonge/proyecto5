const mongoose = require('mongoose')

const password = "TSkga0BHJh4qcY0G"
const dbname = "pokedex"
const ConDb = `mongodb+srv://andrey:${password}@cluster0.rhjdeyj.mongodb.net/${dbname}?retryWrites=true&w=majority`

module.exports = ()=> mongoose.connect(ConDb,{useNewUrlParser: true,useUnifiedTopology: true})