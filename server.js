const express = require('express')
const app = express()

//Importar conexion mongoDB
const archivoBD = require('./conexion')

//Importancion archivo de rutas y modelo usuario
const rutaUsuario = require('./routes/usuario')

//Importar body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/usuario', rutaUsuario)

app.get('/', (req, res) =>{
    res.end('Bienvenidos al back')
})

//Configurar server basico
app.listen(5000,function(){
    console.log('El servidor esta corriendo correctamente')
})