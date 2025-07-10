const express = require('express');
const router = express.Router();
const CursoController = require('../controllers/CursoController');


router.post('/cursos', CursoController.createCurso);
router.get('/cursos', CursoController.getAllCursos);
router.put('/cursos/:id/estado', CursoController.updateEstado);

module.exports = router;