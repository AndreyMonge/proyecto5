const controller = {}
const connection = require('../config/conexion')
const Pokemon = require('../model/pokemonMode')

controller.index = async (req, res) =>{
    try {
        
        await connection()
        const pokemons = await Pokemon.find()
        console.log(pokemons)
        res.render('inicio',{pokemons:pokemons})
        console.log('Conectado a la base de datos')

    } catch (err) {
        console.error('Error al conectar'+err)
    }
}

controller.crear = async (req, res) =>{
    try {
        const newPokemon = new Pokemon(req.body);
        await newPokemon.save()
        res.redirect('/');
    } catch (error) {
        console.error('Error al agregar pokemon'+error)
    }
}

controller.borrar = async (req, res) =>{
    try {
        await Pokemon.findByIdAndDelete(req.params.id)
        res.redirect('/')
    } catch (error) {
        console.error('Error al eliminar pokemon'+error)
    }
}

controller.editar= async (req, res) =>{
    try {
        res.redirect('/editar')
    } catch (error) {
        console.error('Error al eliminar pokemon'+error)
    }
}


module.exports = controller
