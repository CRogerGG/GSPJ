const express = require('express')
const router = express.Router()

const pagesController = require('../controllers/pageController')

const clienteApi = require('../api/apiCliente');


router.get('/', pagesController.vistaPrincipal);
router.get('/usuarios', pagesController.vistaUsuarios);
router.get('/expedientes', pagesController.vistaExpedientes);
router.use('/clientes', pagesController.vistaClientes);


router.get('/apiCliente', clienteApi.traerClientes);
router.post('/apiCliente', clienteApi.crearCliente);
router.get('/apiCliente/:id_persona', clienteApi.seleccionarCliente);
router.put('/apiCliente/:id_persona', clienteApi.actualizarCliente);


module.exports = router