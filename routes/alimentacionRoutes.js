const express = require('express');
const router = express.Router();
const alimentacionController = require('../controllers/alimentacionController');

// Rutas para el recurso alimentacion
router.get('/alimentacion', alimentacionController.obtenerAlimentaciones);
router.post('/alimentacion', alimentacionController.crearAlimentacion);
router.get('/alimentacion/:id', alimentacionController.obtenerAlimentacionPorId);
router.put('/alimentacion/:id', alimentacionController.actualizarAlimentacion);
router.delete('/alimentacion/:id', alimentacionController.eliminarAlimentacion);

module.exports = router;
