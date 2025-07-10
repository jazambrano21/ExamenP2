const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/UsuarioController');

router.post('/usuarios', UsuarioController.createUsuario);
router.get('/usuarios/:id', UsuarioController.getAllUsuarios);

module.exports = router;