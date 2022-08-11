const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/crudmernstack')

const objetodb = mongoose.connection

objetodb.on('connected', () => {console.log('base de datos conectada')})
objetodb.on('error', () =>{console.log('Error en la conexion')})

module.exports = mongoose