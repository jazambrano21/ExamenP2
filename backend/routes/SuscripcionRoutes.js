const express = require('express');
const router = express.Router();
const SuscripcionController = require('../controllers/SuscripcionController');

router.post('/suscripciones', SuscripcionController.suscribir);
router.delete('/suscripciones', SuscripcionController.cancelar);
router.get('/suscripciones', SuscripcionController.getAllSuscripciones);

module.exports = router;