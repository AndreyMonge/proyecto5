const mongoose = require('mongoose')
const {Schema} = mongoose

const PokeSchema = new Schema({
    name: String,
    tipo: String,
    region: String
})

const PokeModel = mongoose.model('pokemons', PokeSchema)
mongoose.set('strictQuery', true)
module.exports = PokeModel