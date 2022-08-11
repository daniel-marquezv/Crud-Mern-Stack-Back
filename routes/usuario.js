const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')

const schema = mongoose.Schema

const schemausuario = new schema({
    nombre: String,
    email: String,
    telefono: String,
    idusuario: String
})

const ModeloUsuario = mongoose.model('usuarios', schemausuario)
module.exports = router

//Agregar usuarios
router.post('/agregarusuario', (req, res) => {
    const nuevousuario = new ModeloUsuario({
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        idusuario: req.body.idusuario
    })
    nuevousuario.save(function (err) {
        if (!err) {
            res.send('Usuario agregado correctamente')

        } else {
            res.send(err)
        }
    })
})

//Obtener usuarios
router.get('/obtenerusuarios', (req, res) => {
    ModeloUsuario.find({}, function (docs, err) {
        if (!err) {
            res.send(docs)

        } else {
            res.send(err)
        }
    })



})

//Obtener datos de usuario
router.post('/obtenerdatausuario', (req, res) => {
    ModeloUsuario.find({ idusuario: req.body.idusuario }, function (docs, err) {
        if (!err) {
            res.send(docs)

        } else {
            res.send(err)
        }
    })

})

//Editar usuario
router.put('/actualizausuario', (req, res) => {
    ModeloUsuario.findOneAndUpdate({ idusuario: req.body.idusuario }, {
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono
    }, (err) => {
        if (!err) {
            res.send('Usuario actualizado')
        } else {
            res.send(err)
        }
    })
})

//borrar usuario
router.post('/borrarusuario', (req, res) => {
    ModeloUsuario.findOneAndDelete({ idusuario: req.body.idusuario }, (err) => {
        if (!err) {
            res.send('Usuario eliminado')
        } else {
            res.send(err)
        }
    })
})