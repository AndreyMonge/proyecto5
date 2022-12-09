const express = require('express')

const router = express.Router()

const controller = require('../controllers/index.controller')

router.get('/', controller.index)
router.post('/crear', controller.crear)
router.get('/borrar/:id', controller.borrar)
router.get('/editar', controller.editar)

module.exports = router